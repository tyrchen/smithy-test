// smithy-typescript generated code
import { EchoClient } from "../EchoClient";
import {
  ListTodosCommand,
  ListTodosCommandInput,
  ListTodosCommandOutput,
} from "../commands/ListTodosCommand";
import { EchoPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@smithy/types";

/**
 * @internal
 */
const makePagedClientRequest = async (client: EchoClient, input: ListTodosCommandInput, ...args: any): Promise<ListTodosCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTodosCommand(input), ...args);
}
/**
 * @public
 */
export async function* paginateListTodos(config: EchoPaginationConfiguration, input: ListTodosCommandInput, ...additionalArguments: any): Paginator<ListTodosCommandOutput>{
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTodosCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["size"] = config.pageSize;
    if (config.client instanceof EchoClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    }
    else {
      throw new Error("Invalid client, expected Echo | EchoClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
