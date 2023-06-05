export class ErrorApi extends Error {
    public readonly statusCode: number;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  export class RequestError extends ErrorApi {
    constructor(message: string, statusCode=400) {
      super(message, statusCode);
    }
  }
  export class AuthenticationError extends ErrorApi {
    constructor(message: string) {
      super(message, 401);
    }
  }