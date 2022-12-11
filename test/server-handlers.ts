import type { DefaultRequestMultipartBody, MockedRequest, RestHandler } from 'msw'
import { rest } from 'msw' // msw supports graphql too!
import validCart from './mockData/validCart.json'
import invalidCart from './mockData/invalidCart.json'
import emptyCart from './mockData/emptyCart.json'


export const restHandlers: Array<RestHandler<MockedRequest<DefaultRequestMultipartBody>>> = [
  rest.get('http://localhost:3000/cart/', (req, res, ctx) => {
    const partnerEmail = req.headers.get("partner-email")
    if (partnerEmail === "valid@mail.com") {
      return res(ctx.status(200), ctx.json(validCart))
    }
    if (partnerEmail === "emptycart@mail.com") {
      return res(ctx.status(200), ctx.json(emptyCart))
    }
    if (partnerEmail === "failParse@mail.com") {
      return res(ctx.status(200), ctx.json(invalidCart))
    }
    if (partnerEmail === "error404@mail.com") {
      return res(ctx.status(404), ctx.json(invalidCart))
    }
    return res(ctx.status(404), ctx.json(validCart))
  }),
]




