import type { DefaultRequestMultipartBody, MockedRequest, RestHandler } from 'msw'
import { rest } from 'msw' // msw supports graphql too!
import validCart from './mockData/validCart.json'
import validSales from './mockData/validSales.json'
import validInvoices from './mockData/invoices/validInvoices.json'
import invalidCart from './mockData/invalidCart.json'
import emptyCart from './mockData/emptyCart.json'
import validAddress from './mockData/addresses/validAddress.json'
import invalidAddress from './mockData/addresses/invalidAddress.json'
import emptyAddress from './mockData/addresses/emptyAddress.json'
import validCustomer from './mockData/customer/validCustomer.json'
import invalidCustomer from './mockData/customer/invalidCustomer.json'
import emptyCustomer from './mockData/customer/emptyCustomer.json'


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

  rest.get('http://localhost:3000/addresses/', (req, res, ctx) => {
    const partnerEmail = req.headers.get("partner-email")
    if (partnerEmail === "valid@mail.com") {
      return res(ctx.status(200), ctx.json(validAddress))
    }
    if (partnerEmail === "emptycart@mail.com") {
      return res(ctx.status(200), ctx.json(emptyAddress))
    }
    if (partnerEmail === "failParse@mail.com") {
      return res(ctx.status(200), ctx.json(invalidAddress))
    }
    if (partnerEmail === "error404@mail.com") {
      return res(ctx.status(404), ctx.json(invalidAddress))
    }
    return res(ctx.status(404), ctx.json(validAddress))
  }),

  rest.get('http://localhost:3000/customer/', (req, res, ctx) => {
    const partnerEmail = req.headers.get("partner-email")
    if (partnerEmail === "valid@mail.com") {
      return res(ctx.status(200), ctx.json(validCustomer))
    }
    if (partnerEmail === "emptycart@mail.com") {
      return res(ctx.status(200), ctx.json(emptyCustomer))
    }
    if (partnerEmail === "failParse@mail.com") {
      return res(ctx.status(200), ctx.json(invalidCustomer))
    }
    if (partnerEmail === "error404@mail.com") {
      return res(ctx.status(404), ctx.json(invalidCustomer))
    }
    return res(ctx.status(404), ctx.json(validCustomer))
  }),

  rest.get('http://localhost:3000/sales/', (req, res, ctx) => {
    const partnerEmail = req.headers.get("partner-email")
    if (partnerEmail === "valid@mail.com") {
      return res(ctx.status(200), ctx.json(validSales))
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

  rest.get('http://localhost:3000/invoices/', (req, res, ctx) => {
    const partnerEmail = req.headers.get("partner-email")
    if (partnerEmail === "valid@mail.com") {
      return res(ctx.status(200), ctx.json(validInvoices))
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




