document.getElementById("apiKeyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const apiKey = document.getElementById("apiKeyInput").value;
    const service = detectService(apiKey);

    if (service) {
        document.getElementById("result").innerText = `API KEY: ${service}`;
    } else {
        document.getElementById("result").innerText = "Cannot detect service api key ";
    }
});

function detectService(apiKey) {
    const Twitter_Access_Token = /^[1-9][ 0-9]+-[0-9a-zA-Z]{40}$/;
    const Twitter_Username = /^@(\w{1,15})$/;
    const Facebook_Access_Token = /^EAACEdEose0cBA[0-9A-Za-z]+$/;
    const Facebook_OAuth_20 = /^[A-Za-z0-9]{125}$/;
    const Instagram_OAuth_20 = /^[0-9a-fA-F]{7}.[0-9a-fA-F]{32}$/;
    const regexGoogleMaps = /^AIza[0-9A-Za-z-_]{35}$/;
    const regexYoutube = /^AIza[0-9A-Za-z-_]{35}$/;
    const regexGithub = /^ghp_[a-zA-Z0-9]{36}$/;

    const services = {
        "Twitter Access Token":Twitter_Access_Token,
        "Twitter_Username":Twitter_Username,
        "Facebook Access Token":Facebook_Access_Token,
        "Facebook OAuth 2.0":Facebook_OAuth_20,
        "Instagram OAuth 2.0":Instagram_OAuth_20,
        "Google Maps":regexGoogleMaps,
        "Youtube":regexYoutube,
        "Github": regexGithub,
        // Puedes agregar más servicios y sus regex aquí
    };

    for (const service in services) {
        if (apiKey.match(services[service])) {
            return service;
        }
    }

    return null;
}
