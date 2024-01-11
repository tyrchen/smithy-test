import { EchoServiceClient, EchoMessageCommand } from 'echo';

const client = new EchoServiceClient({
  endpoint: "http://localhost:3000/api",
  token: undefined,
});


window.client = client;
window.EchoMessageCommand = EchoMessageCommand;
