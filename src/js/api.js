export async function postData(url = '', data = {}) {
    return await fetch(url, {
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