"use strict";

var title = "Free Agent Tracker";
var subtitle = "Get active after work!";
var free_agents = [];

// action when a form is submitted. In this case,
// we add the player
var formDidSubmit = function formDidSubmit(e) {
    e.preventDefault();

    var theName = e.target.elements.yourName.value;
    var theGender = e.target.elements.yourGender.value;
    var theMessage = e.target.elements.yourMessage.value;

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
var clearAllPlayers = function clearAllPlayers() {

    // reset the free agent players
    free_agents = [];

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
        free_agents.length <= 0 && React.createElement(
            "p",
            null,
            "No free agents available!"
        ),
        free_agents.length > 0 && React.createElement(
            "h3",
            null,
            "Free Agents List"
        ),
        free_agents.map(function (player) {
            return React.createElement(
                "li",
                { key: player.name },
                "Name: ",
                player.name,
                " (",
                player.gender,
                ")"
            );
        }),
        React.createElement("br", null),
        free_agents.length > 0 && React.createElement(
            "button",
            { onClick: clearAllPlayers },
            "Clear Players"
        ),
        React.createElement(
            "h2",
            null,
            "Add a New Free Agent"
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
                "Gender: "
            ),
            React.createElement(
                "select",
                { name: "yourGender" },
                React.createElement(
                    "option",
                    { value: "Male" },
                    "Male"
                ),
                React.createElement(
                    "option",
                    { value: "Female" },
                    "Female"
                )
            ),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                "Your Message: "
            ),
            React.createElement("br", null),
            React.createElement("textarea", { name: "yourMessage", rows: "8", cols: "100" }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "button",
                null,
                "Submit Your Name"
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

// call renderView() to initially render the screen.
renderView();
