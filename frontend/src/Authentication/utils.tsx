import { NavigateFunction, useNavigate } from 'react-router-dom';
import React from 'react';

export interface AuthData {
    url: string;
    credentials: {username: string, password: string};
}

export interface AuthResponse {
    status: string;
    message: string;
}

export interface LoginProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    navigate: NavigateFunction;
}

export async function sendCredentials(authData:AuthData): Promise<AuthResponse> {
    try {
        const response = await fetch(authData.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(authData.credentials),
        });
        return response.json();
    } catch (error) {
        console.error("Error communicating with server: ", error)
        return {status:"denied", message:"Error communicating with server"};
    }
}

//Todo handle error codes differently
export async function handleCredentialSubmit(authData:AuthData, navigate: NavigateFunction, 
    sendCredentials: (authData: AuthData) => Promise<AuthResponse>) {
    let result:AuthResponse = await sendCredentials(authData);
    if (result.status === "approved") {
        navigate("/");
    }
}