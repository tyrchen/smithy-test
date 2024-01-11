// smithy-typescript generated code
import {
  EchoServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EchoServiceClient";
import {
  DeleteTodoInput,
  DeleteTodoOutput,
} from "../models/models_0";
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
 * The input for {@link DeleteTodoCommand}.
 */
export interface DeleteTodoCommandInput extends DeleteTodoInput {}
/**
 * @public
 *
 * The output of {@link DeleteTodoCommand}.
 */
export interface DeleteTodoCommandOutput extends DeleteTodoOutput, __MetadataBearer {}

/**
 * @public
 * Delete a todo item.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoServiceClient, DeleteTodoCommand } from "echo"; // ES Modules import
 * // const { EchoServiceClient, DeleteTodoCommand } = require("echo"); // CommonJS import
 * const client = new EchoServiceClient(config);
 * const input = { // DeleteTodoInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteTodoCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTodoOutput
 * //   rowsAffected: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param DeleteTodoCommandInput - {@link DeleteTodoCommandInput}
 * @returns {@link DeleteTodoCommandOutput}
 * @see {@link DeleteTodoCommandInput} for command's `input` shape.
 * @see {@link DeleteTodoCommandOutput} for command's `response` shape.
 * @see {@link EchoServiceClientResolvedConfig | config} for EchoServiceClient's `config` shape.
 *
 * @throws {@link NotFoundError} (client fault)
 *  Not found error.
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
export class DeleteTodoCommand extends $Command<DeleteTodoCommandInput, DeleteTodoCommandOutput, EchoServiceClientResolvedConfig> {

  /**
   * @public
   */
  constructor(readonly input: DeleteTodoCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EchoServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTodoCommandInput, DeleteTodoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EchoServiceClient";
    const commandName = "DeleteTodoCommand";
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
        operation: "DeleteTodo",
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
    input: DeleteTodoCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    throw new Error("No supported protocol was found");
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTodoCommandOutput> {
    throw new Error("No supported protocol was found");
  }

}
