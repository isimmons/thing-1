import type { User } from '~/@types'

const appUrl = import.meta.env.VITE_APP_URL

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${appUrl}/users`)
  const { users } = await response.json()
  return users
}
