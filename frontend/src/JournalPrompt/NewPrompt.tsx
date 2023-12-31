
function NewPrompt() {

    return (
        <div>
        <h3>Add New Prompt</h3>
        <form>
            <textarea placeholder="describe what kinds of prompts you'd like this to generate"></textarea>
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default NewPrompt;
