function changeColor() {
    const button = document.getElementById('colorButton');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button.style.backgroundColor = randomColor;
}

function showGreeting() {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting);
}

function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('result').innerText = "Result: " + sum;
}

