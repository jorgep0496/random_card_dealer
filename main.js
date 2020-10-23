window.onload = function generate() {
    let cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    let suit = ["♠", "♣", "♥", "♦"];

    let a = Math.floor(Math.random() * cardValue.length);
    document.querySelector("#num").innerHTML = `${cardValue[a]}`;

    let b = Math.floor(Math.random() * suit.length);
    document.querySelector("#suit1").innerHTML = `${suit[b]}`;
    document.querySelector("#suit2").innerHTML = `${suit[b]}`;

    if (b == 2 || b == 3) {
        document.querySelector("#suit1").style.color = "red";
        document.querySelector("#suit2").style.color = "red";
        document.querySelector("#num").style.color = "red";
    }
}