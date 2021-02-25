alert("Cominciamo FizzBuzz (controlla il console log)");

for (var i = 1; i < 101; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log("FuzzBuzz");
    } else if (i%3 == 0) {
        console.log("Fuz");
    } else if (i%5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}