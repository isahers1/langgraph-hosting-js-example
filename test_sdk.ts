import { ChatOpenAI } from "@langchain/openai";
import { START, END, MessageGraph } from "@langchain/langgraph";

const model = new ChatOpenAI({ temperature: 0 });

const graph = new MessageGraph()
    .addNode("oracle", model)

graph.addEdge(START,"oracle");
graph.addEdge("oracle", END);


const runnable = graph.compile();