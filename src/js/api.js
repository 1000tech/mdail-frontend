export function postData(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        mode: 'no-cors', // no-cors, *cors, same-origin
        body: JSON.stringify(data)
    })
}

export async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
    })
    return await response.json()
}

export function updateData(url = '', data = {}) {
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
}