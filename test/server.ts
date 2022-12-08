// test/server.js
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { restHandlers } from './server-handlers'

const server = setupServer(...restHandlers)
export { server, rest }

