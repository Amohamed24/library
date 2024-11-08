

// //1.  empty object
// let user = {
//     name: "John",
//     surname: "Smith",
// }
// console.log(user)
// console.log(user.name)


// // change value name to pete
// user.name = "Pete"
// console.log(user.name)
// // delete property name from obj
// delete user.name 
// console.log(user)


// // 2). checks for value


// let schedule = {};
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }
// console.log(isEmpty(schedule))
// schedule["8:30"] = "get up"
// console.log(isEmpty(schedule))

// // 3). sum of all salaries
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// let sum = 0;
// console.log(salaries)

// for (let key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum)



// //4). func multiplies all# if obj by 2
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// }

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number'){
//             console.log(obj[key] * 2)
//         }
//     }
// }

// multiplyNumeric(menu)




// Create a library app
// - theres a button 'new book' that once clicked will open up a form
// -- inside the form are input boxes to enter book info
// --- such as title. author, pages, read

// Once entered, there will be a button inside form 'add book'
// -- click button to keep that info
// --- then display on the screen
// -there's also a close button to hide dialog

// keep adding books on html everytime form is filled out



// Plan
// 1. Interface has UI = 
// -- a button that adds a book
// --form appears
// --- close btn and submit btn in form
// -----close btn hides form
// -----submit keeps data then displays on pages
// 2. Inputs =
// --- the user will to enter book info in form
// 3. Desired output = 
// - user data entered
// - that data displayed on screen


//      Pseudocode
// When the user clickes the button
// display dialog on screen
// dialog will have 3 inputs; 1. title, author, pages
// User will enter book info
// if user hits close, dialog closes
// once data entered, user hits submit
// data will be displayed on screen




const dialog = document.querySelector("#dialog");
const close = document.querySelector("#close");
const newBookbtn = document.querySelector("#new-book-btn");
const outputBox = document.querySelector("output");
const submit = document.querySelector("#submit")
const bookEl = document.createElement("div")

// New button opens up the dialog on click
newBookbtn.addEventListener('click', () => {
    dialog.showModal();
})

// closes the dialog on click
close.addEventListener('click', (e) => {
    e.preventDefault
    dialog.close()
  });


// shows on screen
submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(bookEl.value)
})


// says undefined

