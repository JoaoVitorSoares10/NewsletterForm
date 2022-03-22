const params = window.location.search.substring(1).split('&');
let paramArray = {};

for (let i = 0; i < params.length; i++) {
    var param = params[i].split('=');
    paramArray[param[0]] = decodeURIComponent(param[1]).replaceAll("+", " ");
}

document.getElementById("welcomeName").innerText = paramArray.userName;
document.getElementById("welcomeEmail").innerText = paramArray.userEmail;