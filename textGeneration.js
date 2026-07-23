import client from "./openRouterClient.js";

const generateStory = async (prompt) => {
  const completion = await client.chat.completions.create({
    model: "poolside/laguna-s-2.1:free",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  console.log(JSON.stringify(completion, null, 2));

  return completion.choices[0].message.content;
}

export default generateStory;