export const API_URL = "http://localhost:3200/"

export async function fetchData(url = '', data = {}, method = '') {
  const response = await fetch(url, {
    method: method, 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: method == 'GET' ? null : JSON.stringify(data) 
  })
  return response.json()
}

