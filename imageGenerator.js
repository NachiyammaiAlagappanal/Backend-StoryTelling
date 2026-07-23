import client from "./openRouterClient.js";
import fs from "fs";

const generateImage = async (prompt) => {
  const response = await client.chat.completions.create({
    model: "sourceful/riverflow-v2-fast",
    messages: [
      {
        role: "user",
        content: `Generate an image of a lord vinayagar`,
      }
    ]
  });

    console.log(JSON.stringify(response, null, 2));

const imageData =
    response.choices[0]
        .message
        .images[0]
        .image_url
        .url;

// Remove "data:image/jpeg;base64,"
const base64 = imageData.replace(/^data:image\/\w+;base64,/, "");

fs.writeFileSync("output.jpg", base64, "base64");

console.log("Image saved as output.jpg");

  return response.choices[0].message.images[0].image_url.url;
};

export default generateImage;