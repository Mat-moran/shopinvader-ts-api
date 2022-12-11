import {
  describe,
  it,
  expect,
} from 'vitest'
import { IAddressType, IApiErrorResponse, IApiSuccessResponse, ICart } from '../src/shopinvader-boundary'
import { createShopinvaderProvider } from "../src/shopinvader-provider"

const apiMethodTest = <K>(provider, method) => {
  const notEmail = "notEmail"
  const validEmail = "valid@mail.com"
  const invalidEmail = "invalid@mail.com"
  const emptycartEmail = "emptycart@mail.com"
  const failParseEmail = "failParse@mail.com"
  const error404Email = "error404@mail.com"


  it('Non Email parse failed', async () => {
    const invalidEmailResponse = await provider[method](notEmail) as IApiErrorResponse
    expect(invalidEmailResponse.success).toBe(false)
    expect(invalidEmailResponse.error_type).toBe("zod")
  })
  it('Invalid Email path', async () => {
    const invalidEmailResponse = await provider[method](invalidEmail) as IApiErrorResponse
    expect(invalidEmailResponse.success).toBe(false)
    expect(invalidEmailResponse.error_type).toBe("erp api")
  })
  it('Valid Email Path full cart response', async () => {
    const validEmailResponse = await provider[method](validEmail) as IApiSuccessResponse<K>
    expect(validEmailResponse.success).toBe(true)
  })
  // Empty cart fetch
  it('Empty cart response', async () => {
    const emptycart = await provider[method](emptycartEmail) as IApiErrorResponse
    expect(emptycart.success).toBe(false)
    expect(emptycart.error_type).toBe("zod")
  })
  // Invalid cart fetch
  it('Checking invalid cart parse', async () => {
    const response = await provider[method](failParseEmail) as IApiErrorResponse
    expect(response.success).toBe(false)
    expect(response.error_type).toBe("zod")
  })
  // Error fetching the ERP
  it('Checking 404 response', async () => {
    const response = await provider[method](error404Email) as IApiErrorResponse
    expect(response.success).toBe(false)
    expect(response.error_type).toBe("erp api")
  })
}

// Edit an assertion and save to see HMR in action
describe('getCart method', () => {
  // Valid cart fetch
  const provider = createShopinvaderProvider({
    erp_url_base_url: 'http://localhost:3000/' as string,
    website_unique_id: 'alsf',
    api_key: "lkasjf",
  })

  apiMethodTest<ICart>(provider, "getCart")


})


