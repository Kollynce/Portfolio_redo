import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VUE_APP_CHATGPT_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function generateBlogContent(prompt) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 7,
    });

    if (response.choices && response.choices.length > 0) {
      return response.choices[0].text;
    }
  } catch (error) {
    console.error("Error generating blog content:", error);
  }

  return null;
}
