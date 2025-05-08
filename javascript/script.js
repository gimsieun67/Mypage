const buttons = document.querySelectorAll(".button1, .button2, .button3, .button4");
const boxes = document.querySelectorAll(".First_Box, .Second_Box, .Third_Box, .Four_Box");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        for (let box of boxes) {
            box.style.display = "none";
        }
        boxes[i].style.display = "block";
    });
}
