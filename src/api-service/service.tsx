import axios from "axios";

export const callPromptApiService = async (prompt: string) => {
  const CHATGPT_URL = "https://chatgpt-42.p.rapidapi.com/gpt4";
  const RAPID_API_KEY = `${import.meta.env.VITE_RAPID_CHATGPT_API_KEY}`;
  //   const options = {
  //     method: "POST",
  //     url: `${CHATGPT_URL}`,
  //     headers: {
  //       "x-rapidapi-key": `${import.meta.env.RAPID_CHATGPT_API_KEY}`,
  //       "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
  //       "Content-Type": "application/json",
  //     },
  //     data: {
  //       messages: [
  //         {
  //           role: "user",
  //           content: `${prompt}`,
  //         },
  //       ],
  //       web_access: false,
  //     },
  //   };
  const options = {
    method: "POST",
    url: `${CHATGPT_URL}`,
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      messages: [
        {
          role: "user",
          content: `${prompt}`,
        },
      ],
      web_access: false,
    },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    return error
  }
};
