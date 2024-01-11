// smithy-typescript generated code
import { EchoServiceServiceException as __BaseException } from "./EchoServiceServiceException";
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

/**
 * @public
 * Conflict error.
 */
export class ConflictError extends __BaseException {
  readonly name: "ConflictError" = "ConflictError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictError, __BaseException>) {
    super({
      name: "ConflictError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ConflictError.prototype);
  }
}

/**
 * @public
 */
export interface CreateTodoInput {
  title: string | undefined;
}

/**
 * @public
 */
export interface CreateTodoOutput {
  id: string | undefined;
}

/**
 * @public
 * Describes one specific validation failure for an input member.
 */
export interface ValidationExceptionField {
  /**
   * @public
   * A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
   */
  path: string | undefined;

  /**
   * @public
   * A detailed description of the validation failure.
   */
  message: string | undefined;
}

/**
 * @public
 * A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * A list of specific failures encountered while validating the input.
   * A member can appear in this list more than once if it failed to satisfy multiple constraints.
   */
  fieldList?: (ValidationExceptionField)[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface DeleteTodoInput {
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteTodoOutput {
  rowsAffected: number | undefined;
}

/**
 * @public
 * Not found error.
 */
export class NotFoundError extends __BaseException {
  readonly name: "NotFoundError" = "NotFoundError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundError, __BaseException>) {
    super({
      name: "NotFoundError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

/**
 * @public
 */
export interface EchoMessageInput {
  message: string | undefined;
}

/**
 * @public
 */
export interface EchoMessageOutput {
  message: string | undefined;
}

/**
 * @public
 * Forbidden error.
 */
export class ForbiddenError extends __BaseException {
  readonly name: "ForbiddenError" = "ForbiddenError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenError, __BaseException>) {
    super({
      name: "ForbiddenError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}

/**
 * @public
 * Contains username and password. Currently any username and password is accepted.
 */
export interface SigninForm {
  username: string | undefined;
  password: string | undefined;
}

/**
 * @public
 */
export interface SigninInput {
  /**
   * @public
   * Contains username and password. Currently any username and password is accepted.
   */
  payload: SigninForm | undefined;
}

/**
 * @public
 * Contains a bearer token for authentication.
 */
export interface SigninToken {
  token: string | undefined;
}

/**
 * @public
 */
export interface SigninOutput {
  /**
   * @public
   * Contains a bearer token for authentication.
   */
  payload: SigninToken | undefined;
}

/**
 * @public
 * Throttling error.
 */
export class ThrottlingError extends __BaseException {
  readonly name: "ThrottlingError" = "ThrottlingError";
  readonly $fault: "client" = "client";
  $retryable = {
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingError, __BaseException>) {
    super({
      name: "ThrottlingError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ThrottlingError.prototype);
  }
}

/**
 * @public
 * Unauthorized error.
 */
export class UnauthorizedError extends __BaseException {
  readonly name: "UnauthorizedError" = "UnauthorizedError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedError, __BaseException>) {
    super({
      name: "UnauthorizedError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}

/**
 * @public
 */
export interface GetTodoInput {
  id: string | undefined;
}

/**
 * @public
 * Contains a todo item.
 */
export interface TodoItem {
  id: string | undefined;
  title: string | undefined;
  completed: boolean | undefined;
}

/**
 * @public
 */
export interface GetTodoOutput {
  /**
   * @public
   * Contains a todo item.
   */
  todo: TodoItem | undefined;
}

/**
 * @public
 */
export interface ListTodosInput {
  nextToken?: string;
  size?: number;
}

/**
 * @public
 */
export interface ListTodosOutput {
  /**
   * @public
   * Contains a list of todo items.
   */
  todos: (TodoItem)[] | undefined;

  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateTodoInput {
  id: string | undefined;
  title: string | undefined;
}

/**
 * @public
 */
export interface UpdateTodoOutput {
  rowsAffected: number | undefined;
}
