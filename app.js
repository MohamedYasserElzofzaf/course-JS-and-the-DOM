// document.addEventListener("click", function() {
//     // console.log("you make a click on the page");
//     const mainHeading = document.querySelector("h1");
//     mainHeading.style.backgroundColor = "purple";
// });

// this will work
// function myEventListeningFunction() {
//     console.log("howdy");
// }

// // adds a listener for clicks, to run the `myEventListeningFunction` function
// document.addEventListener("click", myEventListeningFunction);

// // immediately removes the click listener that should run the `myEventListeningFunction` function
// document.removeEventListener("click", myEventListeningFunction);

// this will not work
// adds a listener for clicks, to run the `myEventListeningFunction` function
// document.addEventListener("click", function myEventListeningFunction() {
//     console.log("howdy");
// });

// // immediately removes the click listener that should run the `myEventListeningFunction` function
// document.removeEventListener("click", function myEventListeningFunction() {
//     console.log("howdy");
// });

// document.addEventListener("click", function() {
//     console.log("The document was clicked");
// });

// document.body.addEventListener("click", function() {
//     console.log("The document body was clicked");
// });

// add event prameter
document.addEventListener("click", function(event) {
    // ← the `event` parameter is new!
    console.log("The document was clicked");
});