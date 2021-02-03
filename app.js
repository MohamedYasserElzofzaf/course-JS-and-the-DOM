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
// document.addEventListener("click", function(event) {
//     // ← the `event` parameter is new!
//     console.log(event);
// });

// const links = document.querySelectorAll("a");
// const thirdLink = links[2];

// thirdLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("Look, ma! We didn't navigate to a new page!");
// });

let count = 1

function generateParagraphs() {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 500; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph number ' + count;
        count = count + 1;

        fragment.appendChild(newElement);
    }

    document.body.appendChild(fragment);

    if (count < 20000) {
        setTimeout(generateParagraphs, 0);
    }
}

generateParagraphs();