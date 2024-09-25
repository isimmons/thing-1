import { http, HttpResponse } from 'msw'
import { getUsers } from './data/users'

const appUrl = import.meta.env.VITE_APP_URL

export const handlers = [
  http.get(`${appUrl}/users`, () => {
    const data = getUsers()
    return HttpResponse.json({
      users: data,
    })
  }),
]
