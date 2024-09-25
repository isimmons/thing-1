beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const appUrl = process.env.VITE_APP_URL

// silly test to confirm that MSW is working properly for tests

it('fetch data from API', async () => {
  const response = await fetch(`${appUrl}/users`)
  const { users } = await response.json()

  expect(users).toHaveLength(3)

  const { firstName, lastName } = users[0]
  expect(firstName).toBe('Sponge')
  expect(lastName).toBe('Bob')
})
