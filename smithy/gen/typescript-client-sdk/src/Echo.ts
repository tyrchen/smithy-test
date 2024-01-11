// smithy-typescript generated code
import {
  EchoClient,
  EchoClientConfig,
} from "./EchoClient";
import {
  CreateTodoCommand,
  CreateTodoCommandInput,
  CreateTodoCommandOutput,
} from "./commands/CreateTodoCommand";
import {
  DeleteTodoCommand,
  DeleteTodoCommandInput,
  DeleteTodoCommandOutput,
} from "./commands/DeleteTodoCommand";
import {
  EchoMessageCommand,
  EchoMessageCommandInput,
  EchoMessageCommandOutput,
} from "./commands/EchoMessageCommand";
import {
  GetTodoCommand,
  GetTodoCommandInput,
  GetTodoCommandOutput,
} from "./commands/GetTodoCommand";
import {
  ListTodosCommand,
  ListTodosCommandInput,
  ListTodosCommandOutput,
} from "./commands/ListTodosCommand";
import {
  SigninCommand,
  SigninCommandInput,
  SigninCommandOutput,
} from "./commands/SigninCommand";
import {
  UpdateTodoCommand,
  UpdateTodoCommandInput,
  UpdateTodoCommandOutput,
} from "./commands/UpdateTodoCommand";
import {
  UpdateTodoStatusCommand,
  UpdateTodoStatusCommandInput,
  UpdateTodoStatusCommandOutput,
} from "./commands/UpdateTodoStatusCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

const commands = {
  CreateTodoCommand,
  DeleteTodoCommand,
  EchoMessageCommand,
  GetTodoCommand,
  ListTodosCommand,
  SigninCommand,
  UpdateTodoCommand,
  UpdateTodoStatusCommand,
}

export interface Echo {
  /**
   * @see {@link CreateTodoCommand}
   */
  createTodo(
    args: CreateTodoCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateTodoCommandOutput>;
  createTodo(
    args: CreateTodoCommandInput,
    cb: (err: any, data?: CreateTodoCommandOutput) => void
  ): void;
  createTodo(
    args: CreateTodoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTodoCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTodoCommand}
   */
  deleteTodo(
    args: DeleteTodoCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteTodoCommandOutput>;
  deleteTodo(
    args: DeleteTodoCommandInput,
    cb: (err: any, data?: DeleteTodoCommandOutput) => void
  ): void;
  deleteTodo(
    args: DeleteTodoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTodoCommandOutput) => void
  ): void;

  /**
   * @see {@link EchoMessageCommand}
   */
  echoMessage(
    args: EchoMessageCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<EchoMessageCommandOutput>;
  echoMessage(
    args: EchoMessageCommandInput,
    cb: (err: any, data?: EchoMessageCommandOutput) => void
  ): void;
  echoMessage(
    args: EchoMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EchoMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTodoCommand}
   */
  getTodo(
    args: GetTodoCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetTodoCommandOutput>;
  getTodo(
    args: GetTodoCommandInput,
    cb: (err: any, data?: GetTodoCommandOutput) => void
  ): void;
  getTodo(
    args: GetTodoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTodoCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTodosCommand}
   */
  listTodos(
    args: ListTodosCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListTodosCommandOutput>;
  listTodos(
    args: ListTodosCommandInput,
    cb: (err: any, data?: ListTodosCommandOutput) => void
  ): void;
  listTodos(
    args: ListTodosCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTodosCommandOutput) => void
  ): void;

  /**
   * @see {@link SigninCommand}
   */
  signin(
    args: SigninCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SigninCommandOutput>;
  signin(
    args: SigninCommandInput,
    cb: (err: any, data?: SigninCommandOutput) => void
  ): void;
  signin(
    args: SigninCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SigninCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTodoCommand}
   */
  updateTodo(
    args: UpdateTodoCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateTodoCommandOutput>;
  updateTodo(
    args: UpdateTodoCommandInput,
    cb: (err: any, data?: UpdateTodoCommandOutput) => void
  ): void;
  updateTodo(
    args: UpdateTodoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTodoCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTodoStatusCommand}
   */
  updateTodoStatus(
    args: UpdateTodoStatusCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateTodoStatusCommandOutput>;
  updateTodoStatus(
    args: UpdateTodoStatusCommandInput,
    cb: (err: any, data?: UpdateTodoStatusCommandOutput) => void
  ): void;
  updateTodoStatus(
    args: UpdateTodoStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTodoStatusCommandOutput) => void
  ): void;

}

/**
 * @public
 * Echoes input
 */
export class Echo extends EchoClient implements Echo {}
createAggregatedClient(commands, Echo);
