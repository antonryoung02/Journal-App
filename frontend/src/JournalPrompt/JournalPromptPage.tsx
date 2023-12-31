import Navigation from '../Navigation';
import ExistingPrompts from './ExistingPrompts';
import NewPrompt from './NewPrompt';

function JournalPromptPage() {

    return(
        <div>
            <Navigation />
            <p>Page content, form goes here </p>
            <NewPrompt />
            <ExistingPrompts />
        </div>
    )
}

export default JournalPromptPage;