import { OpenAI } from "langchain/llms";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import dotenv from "dotenv";

dotenv.config();

const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.9 });
const template = "What is a good name for a company that makes {product}?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

const chain = new LLMChain({ llm: model, prompt: prompt });

const res = await chain.call({ product: "colorful red socks" });
console.log(res);
