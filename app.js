document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("askBtn").onclick = eightBall;

	const input = document.getElementById("input");
	input.onclick = function() {
		if(input.value == "Enter your question here") document.getElementById("input").value = "";
		input.classList.remove("placeholder");
	}
	input.onblur = function() {
		if(input.value == "") {
			input.value = "Enter your question here"
			input.classList.add("placeholder");
		}
	}
});

document.onkeypress = function(e) {
	if(e.key == "Enter") eightBall();
}

function eightBall() {
	if(document.getElementById("input").value == "") {
		document.getElementById("output").textContent = "Ask me a question.";
	}
	else {
		const answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it,yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
		const randInt = Math.floor(Math.random() * (answers.length - 1)) + 0;
		document.getElementById("output").textContent = answers[randInt];
		
	}
}