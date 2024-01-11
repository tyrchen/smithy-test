// smithy-typescript generated code
import {
  EchoServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EchoServiceClient";
import {
  EchoMessageInput,
  EchoMessageOutput,
} from "../models/models_0";
import {
  de_EchoMessageCommand,
  se_EchoMessageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@smithy/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SMITHY_CONTEXT_KEY,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EchoMessageCommand}.
 */
export interface EchoMessageCommandInput extends EchoMessageInput {}
/**
 * @public
 *
 * The output of {@link EchoMessageCommand}.
 */
export interface EchoMessageCommandOutput extends EchoMessageOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoServiceClient, EchoMessageCommand } from "echo"; // ES Modules import
 * // const { EchoServiceClient, EchoMessageCommand } = require("echo"); // CommonJS import
 * const client = new EchoServiceClient(config);
 * const input = { // EchoMessageInput
 *   message: "STRING_VALUE", // required
 * };
 * const command = new EchoMessageCommand(input);
 * const response = await client.send(command);
 * // { // EchoMessageOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param EchoMessageCommandInput - {@link EchoMessageCommandInput}
 * @returns {@link EchoMessageCommandOutput}
 * @see {@link EchoMessageCommandInput} for command's `input` shape.
 * @see {@link EchoMessageCommandOutput} for command's `response` shape.
 * @see {@link EchoServiceClientResolvedConfig | config} for EchoServiceClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link EchoServiceServiceException}
 * <p>Base exception class for all service exceptions from EchoService service.</p>
 *
 */
export class EchoMessageCommand extends $Command<EchoMessageCommandInput, EchoMessageCommandOutput, EchoServiceClientResolvedConfig> {

  /**
   * @public
   */
  constructor(readonly input: EchoMessageCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EchoServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EchoMessageCommandInput, EchoMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EchoServiceClient";
    const commandName = "EchoMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        (_: any) => _,
      outputFilterSensitiveLog:
        (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "EchoService",
        operation: "EchoMessage",
      },
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: EchoMessageCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_EchoMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EchoMessageCommandOutput> {
    return de_EchoMessageCommand(output, context);
  }

}
