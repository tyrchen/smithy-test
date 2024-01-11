// smithy-typescript generated code
import {
  EchoClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EchoClient";
import {
  UpdateTodoStatusInput,
  UpdateTodoStatusOutput,
} from "../models/models_0";
import {
  de_UpdateTodoStatusCommand,
  se_UpdateTodoStatusCommand,
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
 * The input for {@link UpdateTodoStatusCommand}.
 */
export interface UpdateTodoStatusCommandInput extends UpdateTodoStatusInput {}
/**
 * @public
 *
 * The output of {@link UpdateTodoStatusCommand}.
 */
export interface UpdateTodoStatusCommandOutput extends UpdateTodoStatusOutput, __MetadataBearer {}

/**
 * @public
 * Update the status of a todo item.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoClient, UpdateTodoStatusCommand } from "echo"; // ES Modules import
 * // const { EchoClient, UpdateTodoStatusCommand } = require("echo"); // CommonJS import
 * const client = new EchoClient(config);
 * const input = { // UpdateTodoStatusInput
 *   id: "STRING_VALUE", // required
 *   status: true || false, // required
 * };
 * const command = new UpdateTodoStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTodoStatusOutput
 * //   rowsAffected: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param UpdateTodoStatusCommandInput - {@link UpdateTodoStatusCommandInput}
 * @returns {@link UpdateTodoStatusCommandOutput}
 * @see {@link UpdateTodoStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateTodoStatusCommandOutput} for command's `response` shape.
 * @see {@link EchoClientResolvedConfig | config} for EchoClient's `config` shape.
 *
 * @throws {@link NotFoundError} (client fault)
 *  Not found error.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link EchoServiceException}
 * <p>Base exception class for all service exceptions from Echo service.</p>
 *
 */
export class UpdateTodoStatusCommand extends $Command<UpdateTodoStatusCommandInput, UpdateTodoStatusCommandOutput, EchoClientResolvedConfig> {

  /**
   * @public
   */
  constructor(readonly input: UpdateTodoStatusCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EchoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTodoStatusCommandInput, UpdateTodoStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EchoClient";
    const commandName = "UpdateTodoStatusCommand";
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
        operation: "UpdateTodoStatus",
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
    input: UpdateTodoStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateTodoStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTodoStatusCommandOutput> {
    return de_UpdateTodoStatusCommand(output, context);
  }

}
