import { getStartingOptions, getProfessors, postNewTest } from '../../../services/axios';
import { sendErrorAlert, sendSuccessAlert } from '../../../utils/externalLibs/sweetAlert';

function isLinkValid(link) {
    const validLink = /(http[s]*:\/\/)([a-z\-_0-9/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_/._~:?#[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(pdf)/i;
    if (!validLink.test(link)) {
        sendErrorAlert('Por favor, digite um link válido para um PDF');
        return false;
    }
    return true;
}

function catchServerError(err, setIsLoading) {
    let errorMessage = 'Oh não! Parece que houve algum problema com o servidor!';
    const { status } = err.response;
    if (status === 409) {
        errorMessage = 'Parece que esta prova já está cadastrada! Confira se as informações da prova e o link estão corretos';
    }
    setIsLoading(false);
    sendErrorAlert(errorMessage);
}

function setGenericOptions(options, setOptions, setIsLoading, getFunction) {
    setIsLoading(true);
    getFunction()
        .then((resp) => {
            setOptions({
                ...options,
                ...resp.data,
            });
            setIsLoading(false);
        })
        .catch((err) => catchServerError(err, setIsLoading));
}

export function sendTestData(newTestData, setIsLoading, navigate) {
    if (isLinkValid(newTestData.link)) {
        setIsLoading(true);
        postNewTest(newTestData)
            .then(async () => {
                setIsLoading(false);
                await sendSuccessAlert('Sua prova foi enviada com sucesso!');
                navigate('/');
            })
            .catch((err) => catchServerError(err, setIsLoading));
    }
}

export function setStartingOptions(options, setOptions, setIsLoading) {
    setGenericOptions(options, setOptions, setIsLoading, () => getStartingOptions());
}

export function setProfessors(options, setOptions, setIsLoading, subjectId) {
    setGenericOptions(options, setOptions, setIsLoading, () => getProfessors(subjectId));
}

export function isAnyAtributeEmpty(object) {
    const atributes = Object.values(object);
    return atributes.some((value) => !value);
}
