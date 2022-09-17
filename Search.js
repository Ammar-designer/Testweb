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

console.log("Type custom.help() to Check Every Command In This Console");

const custom = {
    help() {
        console.log("custom.clear()");
    },
    clear() {
        console.clear()
    },
};