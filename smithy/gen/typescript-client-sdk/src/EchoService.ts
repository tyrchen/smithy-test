// smithy-typescript generated code
import {
  EchoServiceClient,
  EchoServiceClientConfig,
} from "./EchoServiceClient";
import {
  EchoMessageCommand,
  EchoMessageCommandInput,
  EchoMessageCommandOutput,
} from "./commands/EchoMessageCommand";
import {
  SigninCommand,
  SigninCommandInput,
  SigninCommandOutput,
} from "./commands/SigninCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

const commands = {
  EchoMessageCommand,
  SigninCommand,
}

export interface EchoService {
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

}

/**
 * @public
 * Echoes input
 */
export class EchoService extends EchoServiceClient implements EchoService {}
createAggregatedClient(commands, EchoService);
