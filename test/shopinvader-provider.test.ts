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
    const response = await provider[method](notEmail) as IApiErrorResponse
    expect(response.success).toBe(false)
    expect(response.error_type).toBe("zod")
  })
  it('Invalid Email path ' + method, async () => {
    const response = await provider[method](invalidEmail) as IApiErrorResponse
    console.log(response)
    expect(response.success).toBe(false)
    expect(response.error_type).toBe("erp api")
  })
  it('Valid Email Path ' + method, async () => {
    const response = await provider[method](validEmail) as IApiSuccessResponse<K>
    log ? console.log(response) : null;
    expect(response.success).toBe(true)
  })
  // Empty cart fetch
  it('Empty fetch response for ' + method, async () => {
    const response = await provider[method](emptycartEmail) as IApiErrorResponse
    expect(response.success).toBe(false)
    expect(response.error_type).toBe("zod")
  })
  // Invalid cart fetch
  it('Checking invalid fetch data parse for ' + method, async () => {
    const response = await provider[method](failParseEmail) as IApiErrorResponse
    expect(response.success).toBe(false)
    expect(response.error_type).toBe("zod")
  })
  // Error fetching the ERP
  it('Checking 404 response for ' + method, async () => {
    const response = await provider[method](error404Email) as IApiErrorResponse
    expect(response.success).toBe(false)
    expect(response.error_type).toBe("erp api")
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
  apiMethodTest<IAddress>(provider, "getAddresses")
  apiMethodTest<ICustomer>(provider, "getCustomer")


})


