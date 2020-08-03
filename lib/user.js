// TODO: Refactor and fully understand what's going on with the cookie here

export async function fetchUser(cookie = '') {
  const res = await fetch(
    '/api/me',
    cookie
      ? {
          headers: {
            cookie,
          },
        }
      : {}
  )

  if (!res.ok) return null
  return await res.json()
}
