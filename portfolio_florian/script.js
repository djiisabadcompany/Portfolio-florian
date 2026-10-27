const dropdown = document.getElementById("choice");
// gets value of choice
const result = document.getElementById("result");
// gets the result of that choice
dropdown.addEventListener("change", function () {
    // listens to change and opens the eventlistener
    if (this.value === "0") {
        result.textContent = "Kies een andere optie";
    } else if (this.value === "1") {
        result.textContent = "Ik kan heel snel leren en nieuwe dingen oppakken.";
    } else if (this.value === "2") {
        result.textContent = "Ik ben goed in designen en kan meerdere soorten websites bouwen.";
    } else if (this.value === "3") {
        result.textContent = "Ik luister goed naar feedback en pas mijn werk aan.";
    } else {
        result.textContent = "";
    }
    // if else statements depending on the answer.
});
// shut the dropdown eventlistener