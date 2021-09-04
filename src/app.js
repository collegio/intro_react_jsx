const title = "Activity Tracker";
const subtitle = "Get active after work!";
let activities = [];

// action when a form is submitted. In this case,
// we add the activity
const formDidSubmit = (e) => {
    e.preventDefault();

    const theName = e.target.elements.yourName.value;
    const theActivity = e.target.elements.yourActivity.value;
    const theDistance = e.target.elements.yourDistance.value;

    console.log('name');
    console.log(theName);

    if (theName) {

        // add the new free agent!
        activities = activities.concat({
            name: theName,
            activity: theActivity,
            distance: theDistance
        });

        // update the fields
        e.target.elements.yourName.value = '';
        e.target.elements.yourActivity.value = 'Running';
        e.target.elements.yourDistance.value = '';

        // re-render the view
        renderView();
    }
};

// clear the entire activity list
const clearAllActivities = () => {

    // reset the free agent activities
    activities = [];

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

            {activities.length <= 0 && <p>No activities entered!</p>}
            {activities.length > 0 && <h3>Activities List</h3>}

            {activities.map((activity) => <li key={activity.name}>{activity.name} - {activity.activity}, {activity.distance}</li>)}

            <br />

            {activities.length > 0 && <button onClick={clearAllActivities}>Clear Activities</button>}

            <h2>Add a New Activity</h2>
            <form onSubmit={formDidSubmit}>
                <label>Name: </label>
                <input type="text" name="yourName" />
                <br />
                <br />
                <label>Activity: </label>
                <select name="yourActivity">
                <option value="Running">Running</option>
                <option value="Walking">Walking</option>
                <option value="Cycling">Cycling</option>
                <option value="Swimming">Swimming</option>
                </select>
                <br />
                <br />
                <label>Distance: </label>
                <input type="text" name="yourDistance" />
                <br />
                <br />
                <button>Submit Your Activity</button>
            </form>
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}

// call renderView() to initially render the screen.
renderView();