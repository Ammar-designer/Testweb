function steamunlocked()
{
    var InputValue = document.getElementById("search").value;
    window.open("https://steamunlocked.net/?s=" + InputValue);
}

function crotorrent()
{
    var InputValue = document.getElementById("search").value;
    window.open("https://crotorrents.com/?s=" + InputValue);
}

document.getElementById("Steamunlocked").onclick = steamunlocked;
document.getElementById("Crotorrent").onclick = crotorrent;

console.log("Type search.help() to Check Every Command In This Console");

const search = {
    help() {
        console.log("1. search.clear() To Clear The Console");
        console.log("2. search.goback() To Go Back");
    },
    clear() {
        console.clear();
    },
    goback() {
        history.back()
    }
};