const input = document.getElementById("myInput");
const nama = document.getElementById("nama");
const hasil = document.getElementById("hasil");
// document.getElementById("myInput").oninput = function() {myFunction()};
input.addEventListener("keyup", function () {
    nama.innerText = input.value;
});

input.addEventListener("keyup", function () {
    if (input.value > 10000) {
        bakso();
        cilok();
    } else {
    }
});
function bakso() {
    hasil.innerText = input.value / 10000;
}
function cilok() {
    hasil.innerText = input.value / 500;
}
