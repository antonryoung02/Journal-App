from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import random
app = FastAPI()

# Set up CORS middleware, allow your frontend origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://0.0.0.0:3000"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

class Credentials(BaseModel):
    """Used to validate, create, change user credentials"""
    username: str
    password: str

#Todo validate user input
@app.post("/credentials/login")
def validate_login_credentials(credentials: Credentials):
    """Checks if user exists and if password is correct"""
    print(f"user credentials: {credentials}")
    if random.random() < 0.5:
        return {"status": "approved", "message": credentials.username}
    else:
        return {"status": "denied", "message": "Password incorrect"}
    
#Todo validate user input
@app.post("/credentials/signup")
def validate_signup_credentials(credentials: Credentials):
    """Checks if user exists to create new user"""
    print(f"user credentials: {credentials}")
    if random.random() < 0.5:
        return {"status": "approved", "message": credentials.username}
    else:
        return {"status": "denied", "message": "Password incorrect"}