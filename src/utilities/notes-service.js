import sendRequest from './send-request';
const BASE_URL = '/api/notes'

export async function addNote(formData) {
    console.log(formData)
    sendRequest(`${BASE_URL}/addnote`, 'POST', formData)
}

