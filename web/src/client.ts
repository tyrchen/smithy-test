import { EchoServiceClient, EchoMessageCommand, SigninCommand, GetTodoCommand } from 'echo';

const client = new EchoServiceClient({
  endpoint: "http://localhost:3000/api",
  token: { token: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDUwMDUyOTAsImV4cCI6MTcwNjIxNDg5MCwibmJmIjoxNzA1MDA1MjkwLCJpc3MiOiJlY2hvLXNlcnZpY2UiLCJzdWIiOiJhdXRoIiwiZGF0YSI6ImFkbWluIn0.khBn_NnnAsIsWEzk6RkzpDYhbJSiUp4sKZih6mtnf4kSPnifopBPxx0QNuHPBtbNCrXg4170-1MHgZjZQzQoBg" },
});


window.client = client;
window.EchoMessageCommand = EchoMessageCommand;
window.SigninCommand = SigninCommand;
window.GetTodoCommand = GetTodoCommand;
