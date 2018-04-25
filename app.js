function startDiagnosis() {
    var plantName = document.getElementById("plantName").value;
    var frontPage = document.getElementById("frontPage");
    var diagnosisStart = document.getElementById("diagnosisStart");
    frontPage.style.display = "none";
    page0.style.display = "block";
    diagnosisStart.style.display = "none";
    document.getElementById("nameInput").innerHTML = plantName;
}

function hidePageZeroShowPageOne() {
    var page0 = document.getElementById("page0");
    var page1 = document.getElementById("page1");
    if (page0.style.display === "none") {
        page0.style.display = "block";
        page1.style.display = "none";
    } else {
        page0.style.display = "none";
        page1.style.display = "block";
    }
}
