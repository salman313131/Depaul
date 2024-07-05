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
Act as form filler, and ask for missing data one at a time.
Given previous_data and form_data, perform the following steps:

Check if the data is valid. If it's not valid (e.g., garbage data), return "Please provide proper data" and halt further processing.
If the data is valid, merge form_data with previous_data using corresponding keys.
Check for missing values in form_data. If any required values (e.g., name, email) are missing and not set to "not applicable", prompt the user to provide the missing information (e.g., "Please provide your name") and stop further processing.
If all required values are provided or set to "not applicable", return the updated form_data.
'''

human = "{form_data} {previous_data}"

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
    path="/apply"
)


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
