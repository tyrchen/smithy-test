// smithy-typescript generated code
import {
  EchoServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EchoServiceClient";
import {
  CreateTodoInput,
  CreateTodoOutput,
} from "../models/models_0";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTodoCommand}.
 */
export interface CreateTodoCommandInput extends CreateTodoInput {}
/**
 * @public
 *
 * The output of {@link CreateTodoCommand}.
 */
export interface CreateTodoCommandOutput extends CreateTodoOutput, __MetadataBearer {}

/**
 * @public
 * Create a todo item.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoServiceClient, CreateTodoCommand } from "echo"; // ES Modules import
 * // const { EchoServiceClient, CreateTodoCommand } = require("echo"); // CommonJS import
 * const client = new EchoServiceClient(config);
 * const input = { // CreateTodoInput
 *   title: "STRING_VALUE", // required
 * };
 * const command = new CreateTodoCommand(input);
 * const response = await client.send(command);
 * // { // CreateTodoOutput
 * //   id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTodoCommandInput - {@link CreateTodoCommandInput}
 * @returns {@link CreateTodoCommandOutput}
 * @see {@link CreateTodoCommandInput} for command's `input` shape.
 * @see {@link CreateTodoCommandOutput} for command's `response` shape.
 * @see {@link EchoServiceClientResolvedConfig | config} for EchoServiceClient's `config` shape.
 *
 * @throws {@link ConflictError} (client fault)
 *  Conflict error.
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
export class CreateTodoCommand extends $Command.classBuilder<CreateTodoCommandInput, CreateTodoCommandOutput, EchoServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: EchoServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("EchoService", "CreateTodo", {

  })
  .n("EchoServiceClient", "CreateTodoCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
