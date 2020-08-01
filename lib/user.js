// TODO: GROK this, refactor and move in to hooks

import { useState, useEffect } from 'react'

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

  if (!res.ok) {
    return null
  }

  const json = await res.json()
  return json
}
