// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {

        var data = {}
        data.title = document.getElementsByClassName("jobtitle")[0].textContent;
        data.company = document.getElementsByClassName("company")[0].innerHTML;
        data.location = document.getElementsByClassName("location")[0].innerHTML;
        data.description = document.getElementById("job_summary").innerHTML;

        sendResponse(data)
    }
});

//assistance from https://stackoverflow.com/questions/19758028/chrome-extension-get-dom-content