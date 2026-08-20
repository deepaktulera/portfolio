import api from "./axios";

export const sendAIMessage = (messages) =>
  api.post("/ai/chat", { messages });
