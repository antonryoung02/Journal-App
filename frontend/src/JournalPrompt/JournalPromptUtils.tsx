import {ServerStatusResponse} from '../utils';

export interface PromptResponse {
    id:number;
    name: string;
    prompt: string;
}

//todo make these api calls
export function getExistingPromptList():PromptResponse[] {
    return [{"id":0, "name":"Prompt 1", "prompt":"Prompt 1 content"}, {"id":1, "name":"Prompt 2", "prompt":"Prompt 2 content"}, {"id":2,"name":"Prompt 3", "prompt":"Prompt 3 content"}]
}

export function sendNewPrompt(prompt:string):PromptResponse {
    return {"id":0, "name":"Prompt 1", "prompt":"Prompt 1 content"}
}

export function deletePrompt(prompt:PromptResponse):ServerStatusResponse {
    return {"status":"approved", "message": "idk"}
}

export function editPrompt(newPrompt:PromptResponse):ServerStatusResponse {
    return {"status":"approved", "message": "idk"}
}