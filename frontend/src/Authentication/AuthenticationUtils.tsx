import { NavigateFunction, useNavigate } from 'react-router-dom';
import React from 'react';
import {ServerStatusResponse} from '../utils';

export interface AuthData {
    url: string;
    credentials: {username: string, password: string};
}

export interface LoginProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    navigate: NavigateFunction;
}

export async function sendCredentials(authData:AuthData): Promise<ServerStatusResponse> {
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
    sendCredentials: (authData: AuthData) => Promise<ServerStatusResponse>) {
    let result:ServerStatusResponse = await sendCredentials(authData);
    if (result.status === "approved") {
        navigate("/");
    }
}