export enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

export interface ResponseMessage {
  responseCode: ResponseStatus;
  isSuccess?: boolean;
  message?: string;
  data?: unknown;
}
