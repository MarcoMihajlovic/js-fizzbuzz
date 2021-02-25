var array = [];
var index = 0;

for (var i = 1; i < 101; i++) {
    if (i%3 == 0 && i%5 == 0) {
        array.push("FuzzBuzz");
    } else if (i%3 == 0) {
        array.push("Fuzz");
    } else if (i%5 == 0) {
        array.push("Buzz");
    } else {
        array.push(i);
    }
}

function myFunction() {
    intr = setInterval(function(){
        document.getElementById("count").innerHTML = "";
        document.getElementById("count").innerHTML = array[index++];
        if (index == 100) {
            clearInterval(intr);
        }
    }, 350);
}