// smithy-typescript generated code
import { EchoServiceClient } from "../EchoServiceClient";
import {
  ListTodosCommand,
  ListTodosCommandInput,
  ListTodosCommandOutput,
} from "../commands/ListTodosCommand";
import { EchoServicePaginationConfiguration } from "./Interfaces";
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

/**
 * @public
 */
export const paginateListTodos: (
    config: EchoServicePaginationConfiguration,
    input: ListTodosCommandInput,
    ...rest: any[]
) => Paginator<ListTodosCommandOutput> =
    createPaginator<EchoServicePaginationConfiguration, ListTodosCommandInput, ListTodosCommandOutput>(
        EchoServiceClient,
        ListTodosCommand,
        "nextToken",
        "nextToken",
        "size"
    );
