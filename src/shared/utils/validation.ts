export const extractErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }
  
  if (typeof error === 'string') {
    return error
  }
  
  if (typeof error === 'object' && error !== null) {
    const errorObj = error as { message?: string; error?: string }
    return errorObj.message || errorObj.error || 'Unknown error occurred'
  }
  
  return 'Unknown error occurred'
}
