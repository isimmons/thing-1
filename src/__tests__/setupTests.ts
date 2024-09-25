import '@testing-library/jest-dom/vitest'
import { server } from '~/msw-mocks/node'
import type { SetupServerApi } from 'msw/node'

declare global {
  // eslint-disable-next-line no-var
  var server: SetupServerApi
}

global.server = server
