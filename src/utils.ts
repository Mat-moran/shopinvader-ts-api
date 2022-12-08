import { ZodSchema } from "zod";
import { IApiResponse } from "./shopinvader-boundary";

// methods
export const zodParse = async <K>(schema: ZodSchema, fetchResult: any): Promise<IApiResponse<K>> => {
  const parsedResult = schema.safeParse(fetchResult.data)
  if (!parsedResult.success) {
    return { success: false, error: parsedResult.error, message: parsedResult.error.message, error_type: "zod" }
  }
  return { success: true, data: parsedResult.data } // how to return the type passed on schema?
}


