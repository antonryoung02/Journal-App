import {PromptResponse, getExistingPromptList} from './JournalPromptUtils';
import Prompt from './Prompt';
import {useState, useEffect} from 'react';

function ExistingPrompts() {
    const [prompts, setPrompts] = useState(getExistingPromptList());


    return (
        <div>
        <h2>Existing Prompts</h2>
        {prompts.map((prompt:PromptResponse, index:number) => (
            <Prompt key={index} id={prompt.id} name={prompt.name} prompt={prompt.prompt} />
        ))}
    </div>
    )
}

export default ExistingPrompts;
