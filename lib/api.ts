const url = () => {
  return typeof window !== 'undefined' ? window.location.host : ''
}

const fetcher = async ({ url, method, body }) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('API Error')
  }

  const data = await res.json()
  return data
}

export const register = async (user) => {
  const data = await fetcher({
    url: '/api/register',
    method: 'POST',
    body: user,
  })

  return data.data
}

export const signin = async (user) => {
  const data = await fetcher({ url: '/api/signin', method: 'POST', body: user })
  return data.data
}
