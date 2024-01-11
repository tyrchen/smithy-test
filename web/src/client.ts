import { EchoServiceClient, EchoMessageCommand } from 'echo';

const client = new EchoServiceClient({
  region: "us-west-2",
  endpoint: "http://localhost:3000/api",
});

client.send(new EchoMessageCommand({ message: "Hello World!" })).then((res) => {
  console.log(res);
});
