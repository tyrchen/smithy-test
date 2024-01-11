import { EchoServiceClient, EchoMessageCommand, SigninCommand, GetTodoCommand } from 'echo';

const client = new EchoServiceClient({
  endpoint: "http://localhost:3000/api",
  token: { token: "my-secret-token" },
});


window.client = client;
window.EchoMessageCommand = EchoMessageCommand;
window.SigninCommand = SigninCommand;
window.GetTodoCommand = GetTodoCommand;
