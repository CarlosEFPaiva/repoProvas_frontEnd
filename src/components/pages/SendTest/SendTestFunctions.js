import { getStartingOptions, getProfessors } from '../../../services/axios';

function setGenericOptions(options, setOptions, setIsLoading, getFunction) {
    setIsLoading(true);
    getFunction()
        .then((resp) => {
            setOptions({
                ...options,
                ...resp,
            });
            setIsLoading(false);
        });
}

export function setStartingOptions(options, setOptions, setIsLoading) {
    setGenericOptions(options, setOptions, setIsLoading, () => getStartingOptions());
}

export function setProfessors(options, setOptions, setIsLoading) {
    setGenericOptions(options, setOptions, setIsLoading, () => getProfessors());
}

export function isAnyAtributeEmpty(object) {
    const atributes = Object.values(object);
    return atributes.some((value) => !value);
}
