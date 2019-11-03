function logURL() {
    return { cancel: true };
}

chrome.webRequest.onBeforeRequest.addListener(
    logURL,
    {urls: [
        "https://ads.2mdnsys.com/*",
        "https://koindut.com/*",
        "https://kissanime.ru/ads/*",
        "https://native.propellerclick.com/*",
        "https://easygamepromo.com/*",
        "https://propellerads.com/*"
    ]},
    ["blocking"]
);
