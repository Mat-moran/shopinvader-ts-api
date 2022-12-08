import {
  describe,
  it,
  expect,
} from 'vitest'
import { IApiErrorResponse, IApiSuccessResponse, ICart } from '../src/shopinvader-boundary'
import { createShopinvaderProvider } from "../src/shopinvader-provider"

// Edit an assertion and save to see HMR in action
describe('getCart method', () => {
  const notEmail = "mail.com"
  const validEmail = "valid@mail.com"
  const invalidEmail = "invalid@mail.com"
  const emptycartEmail = "emptycart@mail.com"



  // Valid cart fetch
  const provider = createShopinvaderProvider({
    erp_url_base_url: 'http://localhost:3000/' as string,
    website_unique_id: 'alsf',
    api_key: "lkasjf",
  })
  it('Non Email parse failed', async () => {
    const invalidEmailResponse = await provider.getCart(notEmail) as IApiErrorResponse
    expect(invalidEmailResponse.success).toBe(false)
    expect(invalidEmailResponse.error_type).toBe("zod")
  })

  it('Invalid Email path', async () => {
    const invalidEmailResponse = await provider.getCart(invalidEmail) as IApiErrorResponse
    expect(invalidEmailResponse.success).toBe(false)
    expect(invalidEmailResponse.error_type).toBe("erp api")
  })

  it('Valid Email Path full cart response', async () => {
    const validEmailResponse = await provider.getCart(validEmail) as IApiSuccessResponse<ICart>
    expect(validEmailResponse.success).toBe(true)
  })


  // Empty cart fetch
  it('Empty cart response', async () => {
    const emptycart = await provider.getCart(emptycartEmail) as IApiErrorResponse
    expect(emptycart.success).toBe(false)
    expect(emptycart.error_type).toBe("zod")
  })



  // Invalid cart fetch
  const invalidCartProvider = createShopinvaderProvider({
    erp_url_base_url: 'http://localhost:3000/invalidcart/' as string,
    website_unique_id: 'alsf',
    api_key: "lkasjf",
  })


  it('Checking invalid cart parse', async () => {
    const response = await invalidCartProvider.getCart(validEmail) as IApiErrorResponse
    expect(response.success).toBe(false)
    expect(response.error_type).toBe("zod")

  })

  // Error fetching the ERP
  const errorCartProvider = createShopinvaderProvider({
    erp_url_base_url: 'http://localhost:3000/404/' as string,
    website_unique_id: 'alsf',
    api_key: "lkasjf",
  })


  it('Checking 404 response', async () => {
    const response = await errorCartProvider.getCart(validEmail) as IApiErrorResponse
    expect(response.success).toBe(false)
    expect(response.error_type).toBe("erp api")
  })



})
