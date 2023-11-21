import sendRequest from './send-request';
const BASE_URL = '/api/notes'

export async function addNote(formData) {
    console.log(formData)
    sendRequest(`${BASE_URL}/addnote`, 'POST', formData)
}

export async function getNotes(){
    console.log("sending note request")
    return await sendRequest(`${BASE_URL}/show`);
}

