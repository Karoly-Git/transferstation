let isServerLocal = false;

let servers = {
    localhost: "http://localhost:8000/work-session-tracker.json",
    heroku: "https://transferstation.herokuapp.com/work-session-tracker.json"
};

export let url = isServerLocal ? servers.localhost : servers.heroku;

