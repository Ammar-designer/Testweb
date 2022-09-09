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