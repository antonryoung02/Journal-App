import {PromptResponse} from './JournalPromptUtils';

const Prompt: React.FC<PromptResponse> = ({ name, prompt }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{prompt}</p>
        </div>
    );
};

export default Prompt;
