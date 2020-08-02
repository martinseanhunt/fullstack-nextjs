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
  
  const user = await res.json()

  // We don't need to await this as we already have the 
  // user data from auth0 and we just want to persist it
  // so it can happen in the background
  saveAndUpdateUser(user)

  return user
}

const saveAndUpdateUser = user => 
  // TODO: set api string as constant
  fetch('/api/me', {
    headers: { 'content-type': 'application/json' }, 
    method: 'POST',
    body: JSON.stringify(user)
  })

