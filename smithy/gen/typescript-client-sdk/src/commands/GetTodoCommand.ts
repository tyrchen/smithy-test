// smithy-typescript generated code
import {
  EchoClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EchoClient";
import {
  GetTodoInput,
  GetTodoOutput,
} from "../models/models_0";
import {
  de_GetTodoCommand,
  se_GetTodoCommand,
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
 * The input for {@link GetTodoCommand}.
 */
export interface GetTodoCommandInput extends GetTodoInput {}
/**
 * @public
 *
 * The output of {@link GetTodoCommand}.
 */
export interface GetTodoCommandOutput extends GetTodoOutput, __MetadataBearer {}

/**
 * @public
 * Get a todo item.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoClient, GetTodoCommand } from "echo"; // ES Modules import
 * // const { EchoClient, GetTodoCommand } = require("echo"); // CommonJS import
 * const client = new EchoClient(config);
 * const input = { // GetTodoInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetTodoCommand(input);
 * const response = await client.send(command);
 * // { // GetTodoOutput
 * //   todo: { // TodoItem
 * //     id: "STRING_VALUE", // required
 * //     title: "STRING_VALUE", // required
 * //     completed: true || false, // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTodoCommandInput - {@link GetTodoCommandInput}
 * @returns {@link GetTodoCommandOutput}
 * @see {@link GetTodoCommandInput} for command's `input` shape.
 * @see {@link GetTodoCommandOutput} for command's `response` shape.
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
export class GetTodoCommand extends $Command<GetTodoCommandInput, GetTodoCommandOutput, EchoClientResolvedConfig> {

  /**
   * @public
   */
  constructor(readonly input: GetTodoCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EchoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTodoCommandInput, GetTodoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EchoClient";
    const commandName = "GetTodoCommand";
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
        operation: "GetTodo",
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
    input: GetTodoCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTodoCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTodoCommandOutput> {
    return de_GetTodoCommand(output, context);
  }

}
