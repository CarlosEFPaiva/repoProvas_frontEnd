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
