// smithy-typescript generated code
import { EchoServiceClient } from "../EchoServiceClient";
import {
  ListTodosCommand,
  ListTodosCommandInput,
  ListTodosCommandOutput,
} from "../commands/ListTodosCommand";
import { EchoServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@smithy/types";

/**
 * @internal
 */
const makePagedClientRequest = async (client: EchoServiceClient, input: ListTodosCommandInput, ...args: any): Promise<ListTodosCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTodosCommand(input), ...args);
}
/**
 * @public
 */
export async function* paginateListTodos(config: EchoServicePaginationConfiguration, input: ListTodosCommandInput, ...additionalArguments: any): Paginator<ListTodosCommandOutput>{
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTodosCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["size"] = config.pageSize;
    if (config.client instanceof EchoServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    }
    else {
      throw new Error("Invalid client, expected EchoService | EchoServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
