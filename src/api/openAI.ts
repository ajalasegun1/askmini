import axios from 'axios';
import Config from 'react-native-config';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + Config.OPEN_AI_KEY,
  },
});

const CHATGPTURL = 'https://api.openai.com/v1/chat/completions';
const DALLEURL = 'https://api.openai.com/v1/images/generations';
export type Message = {
  role: string;
  content: string;
};
export const apiCall = async (prompt: string, messages: Message[]) => {
  console.log('I was called');
  try {
    const res = await client.post(CHATGPTURL, {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Does this message want to generate an AI picture, image, art or anyting similar? ${prompt}. Simply answer yes or no`,
        },
      ],
    });

    let isArt = res.data?.choices[0]?.message?.content;
    console.log({isArt});
    if (isArt.toLowerCase().includes('yes')) {
      return dalleapicall(prompt, messages);
    } else {
      return chatgptapicall(prompt, messages);
    }
  } catch (error) {
    console.log({error});
    return Promise.resolve({success: false, data: error as any});
  }
};

const chatgptapicall = async (prompt: string, messages: Message[]) => {
  console.log('calling chatgpt');
  try {
    const res = await client.post(CHATGPTURL, {
      model: 'gpt-3.5-turbo',
      messages,
    });
    let answer = res.data?.choices[0]?.message?.content;
    messages.push({role: 'assistant', content: answer.trim()});
    console.log({messages});
    return Promise.resolve({success: true, data: messages});
  } catch (error) {
    console.log('chat gpt error', {error});
    return Promise.resolve({success: false, data: error as any});
  }
};

const dalleapicall = async (prompt: string, messages: Message[]) => {
  try {
    const res = await client.post(DALLEURL, {
      prompt,
      n: 1,
      size: '256x256',
    });
    let url = res.data?.data[0].url;
    messages.push({role: 'assistant', content: url});
    console.log({messages});
    return Promise.resolve({success: true, data: messages});
  } catch (error) {
    console.log('image error', {error});
    return Promise.resolve({success: false, data: error as any});
  }
};
