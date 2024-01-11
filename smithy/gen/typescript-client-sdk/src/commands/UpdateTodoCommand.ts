// smithy-typescript generated code
import {
  EchoServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EchoServiceClient";
import {
  UpdateTodoInput,
  UpdateTodoOutput,
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
 * The input for {@link UpdateTodoCommand}.
 */
export interface UpdateTodoCommandInput extends UpdateTodoInput {}
/**
 * @public
 *
 * The output of {@link UpdateTodoCommand}.
 */
export interface UpdateTodoCommandOutput extends UpdateTodoOutput, __MetadataBearer {}

/**
 * @public
 * Update a todo item.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoServiceClient, UpdateTodoCommand } from "echo"; // ES Modules import
 * // const { EchoServiceClient, UpdateTodoCommand } = require("echo"); // CommonJS import
 * const client = new EchoServiceClient(config);
 * const input = { // UpdateTodoInput
 *   id: "STRING_VALUE", // required
 *   title: "STRING_VALUE", // required
 * };
 * const command = new UpdateTodoCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTodoOutput
 * //   rowsAffected: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param UpdateTodoCommandInput - {@link UpdateTodoCommandInput}
 * @returns {@link UpdateTodoCommandOutput}
 * @see {@link UpdateTodoCommandInput} for command's `input` shape.
 * @see {@link UpdateTodoCommandOutput} for command's `response` shape.
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
export class UpdateTodoCommand extends $Command<UpdateTodoCommandInput, UpdateTodoCommandOutput, EchoServiceClientResolvedConfig> {

  /**
   * @public
   */
  constructor(readonly input: UpdateTodoCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EchoServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTodoCommandInput, UpdateTodoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EchoServiceClient";
    const commandName = "UpdateTodoCommand";
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
        operation: "UpdateTodo",
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
    input: UpdateTodoCommandInput,
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
  ): Promise<UpdateTodoCommandOutput> {
    throw new Error("No supported protocol was found");
  }

}
