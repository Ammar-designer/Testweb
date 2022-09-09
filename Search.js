var InputValue = document.getElementById("search").value;
function steamunlocked()
{
    window.open("https://steamunlocked.net/?s=" + InputValue);
}

function crotorrent()
{
    window.open("https://crotorrents.com/?s=" + InputValue);
}

document.getElementById("Steamunlocked").onclick = steamunlocked;
document.getElementById("Crotorrent").onclick = crotorrent;