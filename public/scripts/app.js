"use strict";

var title = "Activity Tracker";
var subtitle = "Get active after work!";
var activities = [];

// action when a form is submitted. In this case,
// we add the activity
var formDidSubmit = function formDidSubmit(e) {
    e.preventDefault();

    var theName = e.target.elements.yourName.value;
    var theActivity = e.target.elements.yourActivity.value;
    var theDistance = e.target.elements.yourDistance.value;

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
var clearAllActivities = function clearAllActivities() {

    // reset the free agent activities
    activities = [];

    // re-render the view
    renderView();
};

// render the view
// NOTE: this is a temporary solution! When we work with
//       React Components we will have a more elegant way
//       to do this.
var renderView = function renderView() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            title
        ),
        React.createElement(
            "h2",
            null,
            subtitle,
            " "
        ),
        activities.length <= 0 && React.createElement(
            "p",
            null,
            "No activities entered!"
        ),
        activities.length > 0 && React.createElement(
            "h3",
            null,
            "Activities List"
        ),
        activities.map(function (activity) {
            return React.createElement(
                "li",
                { key: activity.name },
                activity.name,
                " - ",
                activity.activity,
                ", ",
                activity.distance
            );
        }),
        React.createElement("br", null),
        activities.length > 0 && React.createElement(
            "button",
            { onClick: clearAllActivities },
            "Clear Activities"
        ),
        React.createElement(
            "h2",
            null,
            "Add a New Activity"
        ),
        React.createElement(
            "form",
            { onSubmit: formDidSubmit },
            React.createElement(
                "label",
                null,
                "Name: "
            ),
            React.createElement("input", { type: "text", name: "yourName" }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                "Activity: "
            ),
            React.createElement(
                "select",
                { name: "yourActivity" },
                React.createElement(
                    "option",
                    { value: "Running" },
                    "Running"
                ),
                React.createElement(
                    "option",
                    { value: "Walking" },
                    "Walking"
                ),
                React.createElement(
                    "option",
                    { value: "Cycling" },
                    "Cycling"
                ),
                React.createElement(
                    "option",
                    { value: "Swimming" },
                    "Swimming"
                )
            ),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                "Distance: "
            ),
            React.createElement("input", { type: "text", name: "yourDistance" }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "button",
                null,
                "Submit Your Activity"
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

// call renderView() to initially render the screen.
renderView();
