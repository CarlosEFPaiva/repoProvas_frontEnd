import { getProfessorsOptions, getSubjectsOptions, getTestsByProfessorId, getTestsBySubjectId } from '../../../services/axios';
import { sendErrorAlert } from '../../../utils/externalLibs/sweetAlert';

function catchServerError(err, setIsLoading) {
    let errorMessage = 'Oh não! Parece que houve algum problema com o servidor!';
    const { status } = err.response;
    if (status === 409) {
        errorMessage = 'Parece que esta prova já está cadastrada! Confira se as informações da prova e o link estão corretos';
    }
    setIsLoading(false);
    sendErrorAlert(errorMessage);
}

function printableOption({ name, tests }) {
    if (tests === 1) {
        return `${name} - 1 prova`;
    }
    return `${name} - ${tests} provas`;
}

function adjustProfessorsOptions(professorResponse) {
    const options = professorResponse.map((professor) => {
        const {
            id,
            name,
            tests,
        } = professor;
        const option = printableOption({ name, tests });
        return { id, option };
    });
    return options;
}

function adjustTestOptions(testResponse, isByProfessors) {
    const { tests } = testResponse;
    const thirdInfo = (test) => (isByProfessors ? test.subject.name : test.professor);
    return tests.map((test) => ({
        ...test,
        thirdInfo: thirdInfo(test),
    }));
}

function adjustSubjectsOptions(subjectResponse) {
    const options = [];
    let lastSemesterAdded;
    subjectResponse.forEach((subject) => {
        const {
            id,
            name,
            semester,
            tests,
        } = subject;
        if (lastSemesterAdded !== semester.name) {
            options.push({ semester: semester.name });
            lastSemesterAdded = semester.name;
        }
        const option = printableOption({ name, tests });
        options.push({ id, option });
    });
    return options;
}

function setGenericFunction(setIsLoading, getFunction, setFilterOptions, adjustOptions) {
    setIsLoading(true);
    getFunction()
        .then((resp) => {
            const options = adjustOptions(resp.data);
            setFilterOptions(options);
            setIsLoading(false);
        })
        .catch((err) => catchServerError(err, setIsLoading));
}

export function setProfessors(setIsLoading, setFilterOptions) {
    setGenericFunction(
        setIsLoading,
        getProfessorsOptions,
        setFilterOptions,
        adjustProfessorsOptions,
    );
}

export function setSubjects(setIsLoading, setFilterOptions) {
    setGenericFunction(setIsLoading, getSubjectsOptions, setFilterOptions, adjustSubjectsOptions);
}

export function setTestsOptions(setIsLoading, setTests, isByProfessors, getById) {
    let getFunction;
    if (isByProfessors) {
        getFunction = () => getTestsByProfessorId(getById);
    } else {
        getFunction = () => getTestsBySubjectId(getById);
    }
    setGenericFunction(
        setIsLoading,
        getFunction,
        setTests,
        (response) => adjustTestOptions(response, isByProfessors),
    );
}
