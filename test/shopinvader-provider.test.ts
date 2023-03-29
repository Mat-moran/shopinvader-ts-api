import { z, ZodSchema, ZodError } from 'zod';
import {
  describe,
  it,
  expect,
} from 'vitest'
import { IAddress, IAddressType, IApiErrorResponse, IApiSuccessResponse, ICart, ICustomer } from '../src/shopinvader-boundary'
import { createShopinvaderProvider } from "../src/shopinvader-provider"

const apiMethodTest = <K>(provider, method, log = false) => {
  const notEmail = "notEmail"
  const validEmail = "valid@mail.com"
  const invalidEmail = "invalid@mail.com"
  const emptycartEmail = "emptycart@mail.com"
  const failParseEmail = "failParse@mail.com"
  const error404Email = "error404@mail.com"


  it('Non Email parse failed ' + method, async () => {
    // const response = await provider[method](notEmail) as IApiErrorResponse
    const response = await provider[method](notEmail, z.object({ name: z.string() }))
    expect(response.success).toBe(false)
    expect(response.errors).toStrictEqual([])
    expect(response?.inputErrors[0].message).toBe("Invalid email")
    expect(response.environmentErrors).toStrictEqual([])
  })
  it('Invalid Email path ' + method, async () => {
    const response = await provider[method](invalidEmail, z.object({ name: z.string() }))
    expect(response.success).toBe(false)
    expect(response.errors[0]).toHaveProperty('message')
    expect(response.inputErrors).toStrictEqual([])
    expect(response.environmentErrors).toStrictEqual([])
  })
  it('Valid Email Path ' + method, async () => {
    const response = await provider[method](validEmail, z.object({ data: z.object({ name: z.string() }) }))
    expect(response.success).toBe(true)
  })
  // Empty cart fetch
  it('Empty fetch response for ' + method, async () => {
    const response = await provider[method](emptycartEmail, z.object({ data: z.object({ name: z.string() }) }))
    expect(response.success).toBe(true)
  })
  // Invalid cart fetch
  it('Checking invalid fetch data parse for ' + method, async () => {
    const response = await provider[method](failParseEmail, z.object({ data: z.object({ name: z.string(), idss: z.string() }) }))
    expect(response.success).toBe(false)
    expect(response.errors).toStrictEqual([])
    expect(response?.inputErrors[0].message).toBe("Required")
    expect(response?.inputErrors[0].path).toStrictEqual(['data', 'idss'])
    expect(response.environmentErrors).toStrictEqual([])
  })
  // Error fetching the ERP
  it('Checking 404 response for ' + method, async () => {
    const response = await provider[method](error404Email, z.object({ data: z.object({ name: z.string() }) }))
    // const response = await provider[method](error404Email) as IApiErrorResponse
    console.log(response)
    expect(response.success).toBe(false)
    expect(response.errors[0]).toHaveProperty('message')
    console.log(response)
    // expect(response.error_type).toBe("erp api")
  })
}

// Edit an assertion and save to see HMR in action
describe('getCart method', () => {
  // Valid cart fetch
  const provider = createShopinvaderProvider({
    erp_url_base_url: 'http://localhost:3000' as string,
    website_unique_id: 'alsf',
    api_key: "lkasjf",
  })

  apiMethodTest<ICart>(provider, "getCart", true)
  // apiMethodTest<IAddress>(provider, "getAddresses")
  // apiMethodTest<ICustomer>(provider, "getCustomer")


})


