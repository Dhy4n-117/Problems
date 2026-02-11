let count = 0;

function increase() {
    count = count + 1;
    // FIXED: Changed getElementById("counter") to getElementById("count")
    document.getElementById("count").innerText = count;
}

function decrease() {
    count = count - 1;
    // FIXED: Standardized to innerText and added semicolon
    document.getElementById("count").innerText = count; 
}
