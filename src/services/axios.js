import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';

export function getStartingOptions() {
    return axios.get('/send-test/initial-options');
}

export function getProfessors(subjectId) {
    return axios.get(`/send-test/professors/${subjectId}`);
}

export function postNewTest(newTest) {
    return axios.post('/send-test', newTest);
}

export function getProfessorsOptions() {
    return axios.get('/view-test/initial-options/professors');
}

export function getSubjectsOptions() {
    return axios.get('/view-test/initial-options/subjects');
}

export function getTestsByProfessorId(professorId) {
    return axios.get(`/view-test/by-professor/${professorId}`);
}

export function getTestsBySubjectId(subjectId) {
    return axios.get(`/view-test/by-subject/${subjectId}`);
}
