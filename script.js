
function login() {
    let name = document.getElementById("student").value;

    if (name === "") {
        alert("Enter student name");
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("exam").style.display = "block";
    document.getElementById("welcome").textContent = "Welcome, " + name;
}

function submitExam() {
    let answer = document.querySelector('input[name="q1"]:checked');
    let score = answer && answer.value === "HTML" ? 1 : 0;

    document.getElementById("result").textContent =
        "Your Score: " + score + "/1";
    document.getElementById("exam").style.display = "none";
}
