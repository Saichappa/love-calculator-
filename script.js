// Variable tracking state context (checking or resetting)
var isShowingResult = false;

function lovecal(){
    var resultBtn = document.getElementById("result");
    var inputSection = document.getElementById("input-section");
    var lovePic = document.getElementById("love-pic");

    // RESET FLOW: If a result is currently active, clicking reset clears the form
    if (isShowingResult) {
        document.getElementById("firstname").value = "";
        document.getElementById("partnername").value = "";
        lovePic.style.display = "none";
        lovePic.src = "images/placeholder.jpg"; // Reset to placeholder image
        inputSection.style.display = "block";
        resultBtn.innerHTML = "Check Match";
        resultBtn.style.backgroundColor = "#b92c2c";
        isShowingResult = false;
        return;
    }

    // Capture variables and trim white space safety margins
    var firstname = document.getElementById("firstname").value.trim().toLowerCase();
    var partnername = document.getElementById("partnername").value.trim().toLowerCase();

    // Data validation security check
    if(firstname === "" || partnername === ""){
        alert("Please enter both names first!");
        return;
    }

    // Deterministic Calculation Engine
    var combinedNames = [firstname, partnername].sort().join("");
    var sum = 0;
    for (var i = 0; i < combinedNames.length; i++) {
        sum += combinedNames.charCodeAt(i);
    }
    var lovePercentage = (sum % 100) + 1;

    // UI Transformation: Collapse current input control blocks
    inputSection.style.display = "none";

    // Grade Logic & Animal Image Matching Matrix
    if (lovePercentage >= 75) {
        // Grade 1: Soulmates (Lovebirds)
        lovePic.src = "grade1.jpeg"; 
        resultBtn.innerHTML = "GRADE 1: Soulmates! (" + lovePercentage + "%) <br><small>Click to Try Again</small>";
    } else if (lovePercentage >= 40) {
        // Grade 2: Good Match (Otters)
        lovePic.src = "grade2.jpeg"; 
        resultBtn.innerHTML = "GRADE 2: Good Match! (" + lovePercentage + "%) <br><small>Click to Try Again</small>";
    } else {
        // Grade 3: Just Friends (Cat & Dog)
        lovePic.src = "grade3.jpeg"; 
        resultBtn.innerHTML = "GRADE 3: Just Friends! (" + lovePercentage + "%) <br><small>Click to Try Again</small>";
    }

    // Make target animal graphic active on view frame
    lovePic.style.display = "block";
    resultBtn.style.backgroundColor = "#333"; // Shifts button styling color to dark gray for reset visibility
    isShowingResult = true;
}
