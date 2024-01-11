// smithy-typescript generated code
import {
  CreateTodoCommandInput,
  CreateTodoCommandOutput,
} from "../commands/CreateTodoCommand";
import {
  DeleteTodoCommandInput,
  DeleteTodoCommandOutput,
} from "../commands/DeleteTodoCommand";
import {
  EchoMessageCommandInput,
  EchoMessageCommandOutput,
} from "../commands/EchoMessageCommand";
import {
  GetTodoCommandInput,
  GetTodoCommandOutput,
} from "../commands/GetTodoCommand";
import {
  ListTodosCommandInput,
  ListTodosCommandOutput,
} from "../commands/ListTodosCommand";
import {
  SigninCommandInput,
  SigninCommandOutput,
} from "../commands/SigninCommand";
import {
  UpdateTodoCommandInput,
  UpdateTodoCommandOutput,
} from "../commands/UpdateTodoCommand";
import { EchoServiceException as __BaseException } from "../models/EchoServiceException";
import { EchoServiceServiceException as __BaseException } from "../models/EchoServiceServiceException";
import {
  ConflictError,
  ForbiddenError,
  NotFoundError,
  ThrottlingError,
  UnauthorizedError,
  ValidationException,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  _json,
  collectBody,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

/**
 * serializeAws_restJson1CreateTodoCommand
 */
export const se_CreateTodoCommand = async(
  input: CreateTodoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/todos";
  let body: any;
  body = JSON.stringify(take(input, {
    'title': [],
  }));
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1DeleteTodoCommand
 */
export const se_DeleteTodoCommand = async(
  input: DeleteTodoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/todos/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'id', () => input.id!, '{id}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1EchoMessageCommand
 */
export const se_EchoMessageCommand = async(
  input: EchoMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    'x-echo-message': input.message!,
  });
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/echo";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1GetTodoCommand
 */
export const se_GetTodoCommand = async(
  input: GetTodoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/todos/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'id', () => input.id!, '{id}', false)
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1ListTodosCommand
 */
export const se_ListTodosCommand = async(
  input: ListTodosCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/todos";
  const query: any = map({
    "nextToken": [,input.nextToken!],
    "size": [() => input.size !== void 0, () => (input.size!.toString())],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

/**
 * serializeAws_restJson1SigninCommand
 */
export const se_SigninCommand = async(
  input: SigninCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/signin";
  let body: any;
  body = JSON.stringify(take(input, {
    'password': [],
    'username': [],
  }));
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * serializeAws_restJson1UpdateTodoCommand
 */
export const se_UpdateTodoCommand = async(
  input: UpdateTodoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': 'application/json',
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/todos/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, 'id', () => input.id!, '{id}', false)
  let body: any;
  body = JSON.stringify(take(input, {
    'title': [],
  }));
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
}

/**
 * deserializeAws_restJson1CreateTodoCommand
 */
export const de_CreateTodoCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTodoCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateTodoCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    id: [, output.headers['x-todo-id']],
  });
  await collectBody(output.body, context);
  return contents;
}

/**
 * deserializeAws_restJson1CreateTodoCommandError
 */
const de_CreateTodoCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateTodoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictError":
    case "com.example#ConflictError":
      throw await de_ConflictErrorRes(parsedOutput, context);
    case "ValidationException":
    case "smithy.framework#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      })
    }
  }

  /**
   * deserializeAws_restJson1DeleteTodoCommand
   */
  export const de_DeleteTodoCommand = async(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTodoCommandOutput> => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
      return de_DeleteTodoCommandError(output, context);
    }
    const contents: any = map({
      $metadata: deserializeMetadata(output),
      rowsAffected: [() => void 0 !== output.headers['x-rows-affected'], () => __strictParseInt32(output.headers['x-rows-affected'])],
    });
    await collectBody(output.body, context);
    return contents;
  }

  /**
   * deserializeAws_restJson1DeleteTodoCommandError
   */
  const de_DeleteTodoCommandError = async(
    output: __HttpResponse,
    context: __SerdeContext,
  ): Promise<DeleteTodoCommandOutput> => {
    const parsedOutput: any = {
      ...output,
      body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "NotFoundError":
      case "com.example#NotFoundError":
        throw await de_NotFoundErrorRes(parsedOutput, context);
      case "ValidationException":
      case "smithy.framework#ValidationException":
        throw await de_ValidationExceptionRes(parsedOutput, context);
      default:
        const parsedBody = parsedOutput.body;
        return throwDefaultError({
          output,
          parsedBody,
          errorCode
        })
      }
    }

    /**
     * deserializeAws_restJson1EchoMessageCommand
     */
    export const de_EchoMessageCommand = async(
      output: __HttpResponse,
      context: __SerdeContext
    ): Promise<EchoMessageCommandOutput> => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_EchoMessageCommandError(output, context);
      }
      const contents: any = map({
        $metadata: deserializeMetadata(output),
      });
      const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
      const doc = take(data, {
        'message': __expectString,
      });
      Object.assign(contents, doc);
      return contents;
    }

    /**
     * deserializeAws_restJson1EchoMessageCommandError
     */
    const de_EchoMessageCommandError = async(
      output: __HttpResponse,
      context: __SerdeContext,
    ): Promise<EchoMessageCommandOutput> => {
      const parsedOutput: any = {
        ...output,
        body: await parseErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ValidationException":
        case "smithy.framework#ValidationException":
          throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          })
        }
      }

      /**
       * deserializeAws_restJson1GetTodoCommand
       */
      export const de_GetTodoCommand = async(
        output: __HttpResponse,
        context: __SerdeContext
      ): Promise<GetTodoCommandOutput> => {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
          return de_GetTodoCommandError(output, context);
        }
        const contents: any = map({
          $metadata: deserializeMetadata(output),
        });
        const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
        const doc = take(data, {
          'todo': _json,
        });
        Object.assign(contents, doc);
        return contents;
      }

      /**
       * deserializeAws_restJson1GetTodoCommandError
       */
      const de_GetTodoCommandError = async(
        output: __HttpResponse,
        context: __SerdeContext,
      ): Promise<GetTodoCommandOutput> => {
        const parsedOutput: any = {
          ...output,
          body: await parseErrorBody(output.body, context)
        };
        const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
        switch (errorCode) {
          case "NotFoundError":
          case "com.example#NotFoundError":
            throw await de_NotFoundErrorRes(parsedOutput, context);
          case "ValidationException":
          case "smithy.framework#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
          default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
              output,
              parsedBody,
              errorCode
            })
          }
        }

        /**
         * deserializeAws_restJson1ListTodosCommand
         */
        export const de_ListTodosCommand = async(
          output: __HttpResponse,
          context: __SerdeContext
        ): Promise<ListTodosCommandOutput> => {
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return de_ListTodosCommandError(output, context);
          }
          const contents: any = map({
            $metadata: deserializeMetadata(output),
          });
          const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
          const doc = take(data, {
            'nextToken': __expectString,
            'todos': _json,
          });
          Object.assign(contents, doc);
          return contents;
        }

        /**
         * deserializeAws_restJson1ListTodosCommandError
         */
        const de_ListTodosCommandError = async(
          output: __HttpResponse,
          context: __SerdeContext,
        ): Promise<ListTodosCommandOutput> => {
          const parsedOutput: any = {
            ...output,
            body: await parseErrorBody(output.body, context)
          };
          const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          switch (errorCode) {
            case "ValidationException":
            case "smithy.framework#ValidationException":
              throw await de_ValidationExceptionRes(parsedOutput, context);
            default:
              const parsedBody = parsedOutput.body;
              return throwDefaultError({
                output,
                parsedBody,
                errorCode
              })
            }
          }

          /**
           * deserializeAws_restJson1SigninCommand
           */
          export const de_SigninCommand = async(
            output: __HttpResponse,
            context: __SerdeContext
          ): Promise<SigninCommandOutput> => {
            if (output.statusCode !== 200 && output.statusCode >= 300) {
              return de_SigninCommandError(output, context);
            }
            const contents: any = map({
              $metadata: deserializeMetadata(output),
            });
            const data: Record<string, any> = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
            const doc = take(data, {
              'token': __expectString,
            });
            Object.assign(contents, doc);
            return contents;
          }

          /**
           * deserializeAws_restJson1SigninCommandError
           */
          const de_SigninCommandError = async(
            output: __HttpResponse,
            context: __SerdeContext,
          ): Promise<SigninCommandOutput> => {
            const parsedOutput: any = {
              ...output,
              body: await parseErrorBody(output.body, context)
            };
            const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
            switch (errorCode) {
              case "ForbiddenError":
              case "com.example#ForbiddenError":
                throw await de_ForbiddenErrorRes(parsedOutput, context);
              case "ThrottlingError":
              case "com.example#ThrottlingError":
                throw await de_ThrottlingErrorRes(parsedOutput, context);
              case "UnauthorizedError":
              case "com.example#UnauthorizedError":
                throw await de_UnauthorizedErrorRes(parsedOutput, context);
              case "ValidationException":
              case "smithy.framework#ValidationException":
                throw await de_ValidationExceptionRes(parsedOutput, context);
              default:
                const parsedBody = parsedOutput.body;
                return throwDefaultError({
                  output,
                  parsedBody,
                  errorCode
                })
              }
            }

            /**
             * deserializeAws_restJson1UpdateTodoCommand
             */
            export const de_UpdateTodoCommand = async(
              output: __HttpResponse,
              context: __SerdeContext
            ): Promise<UpdateTodoCommandOutput> => {
              if (output.statusCode !== 200 && output.statusCode >= 300) {
                return de_UpdateTodoCommandError(output, context);
              }
              const contents: any = map({
                $metadata: deserializeMetadata(output),
                rowsAffected: [() => void 0 !== output.headers['x-rows-affected'], () => __strictParseInt32(output.headers['x-rows-affected'])],
              });
              await collectBody(output.body, context);
              return contents;
            }

            /**
             * deserializeAws_restJson1UpdateTodoCommandError
             */
            const de_UpdateTodoCommandError = async(
              output: __HttpResponse,
              context: __SerdeContext,
            ): Promise<UpdateTodoCommandOutput> => {
              const parsedOutput: any = {
                ...output,
                body: await parseErrorBody(output.body, context)
              };
              const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
              switch (errorCode) {
                case "NotFoundError":
                case "com.example#NotFoundError":
                  throw await de_NotFoundErrorRes(parsedOutput, context);
                case "ValidationException":
                case "smithy.framework#ValidationException":
                  throw await de_ValidationExceptionRes(parsedOutput, context);
                default:
                  const parsedBody = parsedOutput.body;
                  return throwDefaultError({
                    output,
                    parsedBody,
                    errorCode
                  })
                }
              }

              const throwDefaultError = withBaseException(__BaseException);
              /**
               * deserializeAws_restJson1ConflictErrorRes
               */
              const de_ConflictErrorRes = async (
                parsedOutput: any,
                context: __SerdeContext
              ): Promise<ConflictError> => {
                const contents: any = map({
                });
                const data: any = parsedOutput.body;
                const doc = take(data, {
                  'message': __expectString,
                });
                Object.assign(contents, doc);
                const exception = new ConflictError({
                  $metadata: deserializeMetadata(parsedOutput),
                  ...contents
                });
                return __decorateServiceException(exception, parsedOutput.body);
              };

              /**
               * deserializeAws_restJson1ForbiddenErrorRes
               */
              const de_ForbiddenErrorRes = async (
                parsedOutput: any,
                context: __SerdeContext
              ): Promise<ForbiddenError> => {
                const contents: any = map({
                });
                const data: any = parsedOutput.body;
                const doc = take(data, {
                  'message': __expectString,
                });
                Object.assign(contents, doc);
                const exception = new ForbiddenError({
                  $metadata: deserializeMetadata(parsedOutput),
                  ...contents
                });
                return __decorateServiceException(exception, parsedOutput.body);
              };

              /**
               * deserializeAws_restJson1NotFoundErrorRes
               */
              const de_NotFoundErrorRes = async (
                parsedOutput: any,
                context: __SerdeContext
              ): Promise<NotFoundError> => {
                const contents: any = map({
                });
                const data: any = parsedOutput.body;
                const doc = take(data, {
                  'message': __expectString,
                });
                Object.assign(contents, doc);
                const exception = new NotFoundError({
                  $metadata: deserializeMetadata(parsedOutput),
                  ...contents
                });
                return __decorateServiceException(exception, parsedOutput.body);
              };

              /**
               * deserializeAws_restJson1ThrottlingErrorRes
               */
              const de_ThrottlingErrorRes = async (
                parsedOutput: any,
                context: __SerdeContext
              ): Promise<ThrottlingError> => {
                const contents: any = map({
                });
                const data: any = parsedOutput.body;
                const doc = take(data, {
                  'message': __expectString,
                });
                Object.assign(contents, doc);
                const exception = new ThrottlingError({
                  $metadata: deserializeMetadata(parsedOutput),
                  ...contents
                });
                return __decorateServiceException(exception, parsedOutput.body);
              };

              /**
               * deserializeAws_restJson1UnauthorizedErrorRes
               */
              const de_UnauthorizedErrorRes = async (
                parsedOutput: any,
                context: __SerdeContext
              ): Promise<UnauthorizedError> => {
                const contents: any = map({
                });
                const data: any = parsedOutput.body;
                const doc = take(data, {
                  'message': __expectString,
                });
                Object.assign(contents, doc);
                const exception = new UnauthorizedError({
                  $metadata: deserializeMetadata(parsedOutput),
                  ...contents
                });
                return __decorateServiceException(exception, parsedOutput.body);
              };

              /**
               * deserializeAws_restJson1ValidationExceptionRes
               */
              const de_ValidationExceptionRes = async (
                parsedOutput: any,
                context: __SerdeContext
              ): Promise<ValidationException> => {
                const contents: any = map({
                });
                const data: any = parsedOutput.body;
                const doc = take(data, {
                  'fieldList': _json,
                  'message': __expectString,
                });
                Object.assign(contents, doc);
                const exception = new ValidationException({
                  $metadata: deserializeMetadata(parsedOutput),
                  ...contents
                });
                return __decorateServiceException(exception, parsedOutput.body);
              };

              // de_TodoItem omitted.

              // de_TodoList omitted.

              // de_ValidationExceptionField omitted.

              // de_ValidationExceptionFieldList omitted.

              const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
                httpStatusCode: output.statusCode,
                requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
                extendedRequestId: output.headers["x-amz-id-2"],
                cfId: output.headers["x-amz-cf-id"],
              });

              // Encode Uint8Array data into string with utf-8.
              const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> => collectBody(streamBody, context).then(body => context.utf8Encoder(body))

              const isSerializableHeaderValue = (value: any): boolean =>
                value !== undefined &&
                value !== null &&
                value !== "" &&
                (!Object.getOwnPropertyNames(value).includes("length") ||
                  value.length != 0) &&
                (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

              const parseBody = (streamBody: any, context: __SerdeContext): any => collectBodyString(streamBody, context).then(encoded => {
                if (encoded.length) {
                  return JSON.parse(encoded);
                }
                return {};
              });

              const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
                const value = await parseBody(errorBody, context);
                value.message = value.message ?? value.Message;
                return value;
              }

              /**
               * Load an error code for the aws.rest-json-1.1 protocol.
               */
              const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
                const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

                const sanitizeErrorCode = (rawValue: string | number): string => {
                  let cleanValue = rawValue;
                  if (typeof cleanValue === "number") {
                    cleanValue = cleanValue.toString();
                  }
                  if (cleanValue.indexOf(",") >= 0) {
                    cleanValue = cleanValue.split(",")[0];
                  }
                  if (cleanValue.indexOf(":") >= 0) {
                    cleanValue = cleanValue.split(":")[0];
                  }
                  if (cleanValue.indexOf("#") >= 0) {
                    cleanValue = cleanValue.split("#")[1];
                  }
                  return cleanValue;
                };

                const headerKey = findKey(output.headers, "x-amzn-errortype");
                if (headerKey !== undefined) {
                  return sanitizeErrorCode(output.headers[headerKey]);
                }

                if (data.code !== undefined) {
                  return sanitizeErrorCode(data.code);
                }

                if (data["__type"] !== undefined) {
                  return sanitizeErrorCode(data["__type"]);
                }
              };
