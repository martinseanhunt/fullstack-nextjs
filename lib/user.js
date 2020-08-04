export const fetchUser = async () => {
  const res = await fetch('/api/me')
  if (!res.ok) return null
  return await res.json()
}
