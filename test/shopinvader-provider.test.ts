import { z, ZodSchema, ZodError } from 'zod';
import {
  describe,
  it,
  expect,
} from 'vitest'
import { IAddress, IAddressType, IApiErrorResponse, IApiSuccessResponse, ICart, ICustomer } from '../src/shopinvader-boundary'
import { createShopinvaderProvider } from "../src/shopinvader-provider"

const apiMethodTest = <K>(provider, method, valid_schema, invalid_schema, log = false) => {
  const notEmail = "notEmail"
  const validEmail = "valid@mail.com"
  const invalidEmail = "invalid@mail.com"
  const emptycartEmail = "emptycart@mail.com"
  const failParseEmail = "failParse@mail.com"
  const error404Email = "error404@mail.com"


  it('Non Email parse failed ' + method, async () => {
    // const response = await provider[method](notEmail) as IApiErrorResponse
    const response = await provider[method](notEmail, valid_schema)
    expect(response.success).toBe(false)
    expect(response.errors).toStrictEqual([])
    expect(response?.inputErrors[0].message).toBe("Invalid email")
    expect(response.environmentErrors).toStrictEqual([])
  })
  it('Invalid Email path ' + method, async () => {
    const response = await provider[method](invalidEmail, valid_schema)
    expect(response.success).toBe(false)
    expect(response.errors[0]).toHaveProperty('message')
    expect(response.inputErrors).toStrictEqual([])
    expect(response.environmentErrors).toStrictEqual([])
  })
  it('Valid Email Path ' + method, async () => {
    const response = await provider[method](validEmail, valid_schema)
    expect(response.success).toBe(true)
  })
  // Empty cart fetch
  it('Empty fetch response for ' + method, async () => {
    const response = await provider[method](emptycartEmail, valid_schema)
    expect(response.success).toBe(true)
  })
  // Invalid cart fetch
  it('Checking invalid fetch data parse for ' + method, async () => {
    const response = await provider[method](failParseEmail, invalid_schema)
    expect(response.success).toBe(false)
    expect(response.errors).toStrictEqual([])
    expect(response.inputErrors[0]).toHaveProperty('message')
    expect(response.environmentErrors).toStrictEqual([])
  })
  // Error fetching the ERP
  it('Checking 404 response for ' + method, async () => {
    const response = await provider[method](error404Email, valid_schema)
    // const response = await provider[method](error404Email) as IApiErrorResponse
    expect(response.success).toBe(false)
    expect(response.errors[0]).toHaveProperty('message')
    // expect(response.error_type).toBe("erp api")
  })
}

// Edit an assertion and save to see HMR in action
describe('getCart method', () => {
  const valid_cart_schema = z.object({ data: z.object({ name: z.string() }) })
  const invalid_cart_schema = z.object({ data: z.object({ name: z.string(), idss: z.string() }) })
  const provider = createShopinvaderProvider({
    erp_url_base_url: 'http://localhost:3000' as string,
    website_unique_id: 'alsf',
    api_key: "lkasjf",
  })

  apiMethodTest(provider, "getCart", valid_cart_schema, invalid_cart_schema)
  // apiMethodTest<IAddress>(provider, "getAddresses")
  // apiMethodTest<ICustomer>(provider, "getCustomer")


})

describe('getSales method', () => {
  const valid_sale_schema = z.object({ data: z.array(z.object({ name: z.string() })) })
  const invalid_sale_schema = z.object({ data: z.object({ name: z.string(), idss: z.string() }) })
  const provider = createShopinvaderProvider({
    erp_url_base_url: 'http://localhost:3000' as string,
    website_unique_id: 'alsf',
    api_key: "lkasjf",
  })
  apiMethodTest(provider, "getSales", valid_sale_schema, invalid_sale_schema)

})

describe('getAddress method', () => {
  const valid_address_schema = z.object({ data: z.array(z.object({ id: z.number() })) })
  const invalid_address_schema = z.object({ data: z.object({ name: z.string(), idssss: z.string() }) })
  const provider = createShopinvaderProvider({
    erp_url_base_url: 'http://localhost:3000' as string,
    website_unique_id: 'alsf',
    api_key: "lkasjf",
  })
  apiMethodTest(provider, "getAddresses", valid_address_schema, invalid_address_schema)

})

describe('getCustomer method', () => {
  const valid_customer_schema = z.object({ data: z.object({ id: z.number() }) })
  const invalid_customer_schema = z.object({ data: z.object({ name: z.string(), idssss: z.string() }) })
  const provider = createShopinvaderProvider({
    erp_url_base_url: 'http://localhost:3000' as string,
    website_unique_id: 'alsf',
    api_key: "lkasjf",
  })
  apiMethodTest(provider, "getCustomer", valid_customer_schema, invalid_customer_schema)

})

describe('getInvoices method', () => {
  const valid_invoices_schema = z.object({ data: z.array(z.object({ id: z.number() })) })
  const invalid_invoices_schema = z.object({ data: z.object({ name: z.string(), idssss: z.string() }) })
  const provider = createShopinvaderProvider({
    erp_url_base_url: 'http://localhost:3000' as string,
    website_unique_id: 'alsf',
    api_key: "lkasjf",
  })
  apiMethodTest(provider, "getInvoices", valid_invoices_schema, invalid_invoices_schema)

})


