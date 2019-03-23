function clearAnalysis(elementID) {
    document.getElementById(elementID).value = '';
}

function getAnalysis(elementID) {
    // Validate input
    var sentimentText = validateTextInput(elementID);
    if (sentimentText == false) return;

    // Call the sentiment analysis.
    // TBD - Incomplete
    //analyzeSentiment(sentimentText);

    // Display result
    setAnalysisResult('test');
}

function setAnalysisResult(result) {
    result = "She is a liar! Score: 0.87; Main Sentiment: Lie";
    document.getElementById('analysisResult').value = result;
}

function validateTextInput(elementID) {
    var sentimentText = document.getElementById(elementID).value;

    // Make sure there is text to analyze
    if (sentimentText == null || sentimentText == '') {
        alert('Please provide a text to analyze.');
        return false;
    }

    // Text must be less than 4000 characters
    if (sentimentText.length > 4000) {
        alert('The text size must not exceed 4000 characters.');
        return false;
    }

    return sentimentText;
}

// TBD
function analyzeSentiment(text) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);

            return ;
        }
    };
    xhttp.open("POST", "http://localhost:50001/api/sentiment...", true);
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send(text);
}