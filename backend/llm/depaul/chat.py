from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
import os
import uvicorn
from langserve import add_routes
from fastapi import FastAPI

from dotenv import load_dotenv
load_dotenv()

my_key = os.getenv("GROQ_API_KEY")

chat = ChatGroq(temperature=0, groq_api_key=my_key,
                model_name="llama3-8b-8192")


system = '''
Role: Representative of DePaul University

Instructions:
Answer only questions related to DePaul University.
Refer to the provided context (previously asked questions and generated answers) when needed.
If the question is not related to DePaul University, respond with: "Sorry, I can only provide answers related to DePaul University." and halt further processing.
'''


human = "{question} {context}"

prompt = ChatPromptTemplate.from_messages(
    [("system", system), ("human", human)])

chain = prompt | chat

app = FastAPI(
    title="Langchain server",
    version="1.0",
    description="A server for generating text using langchain."
)

add_routes(
    app,
    chain,
    path="/chat"
)


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
