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
    const regexGoogleMaps = /^AIza[0-9A-Za-z-_]{35}$/;
    const regexYoutube = /^AIza[0-9A-Za-z-_]{35}$/;
    const regexGithub = /^ghp_[a-zA-Z0-9]{36}$/;

    const services = {
        "maps": regexGoogleMaps,
        "youtube": regexYoutube,
        "github": regexGithub,
        // Puedes agregar más servicios y sus regex aquí
    };

    for (const service in services) {
        if (apiKey.match(services[service])) {
            return service;
        }
    }

    return null;
}
