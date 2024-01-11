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
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

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
export class UpdateTodoCommand extends $Command.classBuilder<UpdateTodoCommandInput, UpdateTodoCommandOutput, EchoServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: EchoServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("EchoService", "UpdateTodo", {

  })
  .n("EchoServiceClient", "UpdateTodoCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
