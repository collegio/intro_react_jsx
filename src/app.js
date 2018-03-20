const title = "Free Agent Tracker";
const subtitle = "Get active after work!";
let free_agents = [];

// action when a form is submitted. In this case,
// we add the player
const formDidSubmit = (e) => {
    e.preventDefault();

    const theName = e.target.elements.yourName.value;
    const theGender = e.target.elements.yourGender.value;
    const theMessage = e.target.elements.yourMessage.value;

    if (theName) {

        // add the new free agent!
        free_agents = free_agents.concat({
            name: theName,
            gender: theGender,
            message: theMessage
        });

        // update the fields
        e.target.elements.yourName.value = '';
        e.target.elements.yourGender.value = 'Male';
        e.target.elements.yourMessage.value = '';

        // re-render the view
        renderView();
    }
};

// clear the entire player list
const clearAllPlayers = () => {

    // reset the free agent players
    free_agents = [];

    // re-render the view
    renderView();
};

// render the view
// NOTE: this is a temporary solution! When we work with
//       React Components we will have a more elegant way
//       to do this.
const renderView = () => {
    const template = (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle} </h2>

            {free_agents.length <= 0 && <p>No free agents available!</p>}
            {free_agents.length > 0 && <h3>Free Agents List</h3>}

            {free_agents.map((player) => <li key={player.name}>Name: {player.name} ({player.gender})</li>)}

            <br />

            {free_agents.length > 0 && <button onClick={clearAllPlayers}>Clear Players</button>}

            <h2>Add a New Free Agent</h2>
            <form onSubmit={formDidSubmit}>
                <label>Name: </label>
                <input type="text" name="yourName" />
                <br />
                <br />
                <label>Gender: </label>
                <select name="yourGender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
                <br />
                <br />
                <label>Your Message: </label>
                <br />
                <textarea name="yourMessage" rows="8" cols="100"></textarea>
                <br />
                <br />
                <button>Submit Your Name</button>
            </form>
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}

// call renderView() to initially render the screen.
renderView();