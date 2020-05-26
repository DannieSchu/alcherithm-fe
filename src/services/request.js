const BODY_METHODS = ['POST', 'PATCH', 'PUT'];
const request = (path, method, body = null) => {
  const headers = BODY_METHODS.includes(method) ? { 'Content-Type': 'application/json' } : {};
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers,
    credentials: 'include',
    body: BODY_METHODS.includes(method) ? JSON.stringify(body) : null
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const patch = (path, body) => request(path, 'PATCH', body);
export const put = (path, body) => request(path, 'PUT', body);
export const del = path => request(path, 'DELETE');
