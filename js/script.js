let number_of_floors = 0 //this will store how much floors to display
let wrong_attempts = 0 // this will store how much user tried to check letter this will trigger hangman
const words = ["apple", "car", "book", "phone", "chair", "table", "computer", "bottle", "pen", "jacket"] // this will store the words to random choice and display
const random_word = words[(Math.random() * words.length) | 0] //random choice from words list
const ground = document.querySelector('#ground'); // ground of hangman
const vertical_beam = document.querySelector('#vertical-beam'); //vertical beam of hangman
const horizontal_beam = document.querySelector('#horizontal-beam'); // horizontal beam of hangman
const rope = document.querySelector('#rope'); // rope of hangman
const head = document.querySelector('#head'); // head of hangman
const body = document.querySelector('#body'); // body of hangman
const left_arm = document.querySelector('#left-arm'); // left arm of hangman
const right_arm = document.querySelector('#right-arm'); // right arm of hangman
const left_leg = document.querySelector('#left-leg'); // left leg of hangman
const right_leg = document.querySelector('#right-leg'); // right leg of hangman
var text_child = document.getElementById('text-child'); // text element from html
const answer = document.querySelector('#answer'); // answer
const lost_window = document.querySelector('#lost-window'); // lost window
const win_window = document.querySelector('#win-window'); // win window
for (let index = 0; index < random_word.length; index++) { //
    number_of_floors = number_of_floors + 1                // count number of floors
}                                                          //

let text_to_display = "_".repeat(number_of_floors) // floors to display for user
text_child.textContent = text_to_display.split('').join(' ') // set text in text_child

ground.style.visibility = 'hidden' // hide ground of hangman
vertical_beam.style.visibility = 'hidden' // hide vertical beam of hangman
horizontal_beam.style.visibility = 'hidden' // hide horizontal beam of hangman
rope.style.visibility = 'hidden' // hide rope of hangman
head.style.visibility = 'hidden' // hide head of hangman
body.style.visibility = 'hidden' // hide body of hangman
left_arm.style.visibility = 'hidden' // hide left arm of hangman
right_arm.style.visibility = 'hidden' // hide right arm of hangman
left_leg.style.visibility = 'hidden' // hide left leg of hangman
right_leg.style.visibility = 'hidden' // hide right leg of hangman
lost_window.style.visibility = 'hidden' // hide lost window
win_window.style.visibility = 'hidden' // hide win window

function checkletter(letter) {
    if (random_word.includes(letter)) {     //
        wrong_attempts = wrong_attempts + 0 //
    } else {                                // counts wrong attempts
        wrong_attempts = wrong_attempts + 1 //
    }     

    switch (wrong_attempts) {   // hangman paint cases
        case 1:         
            ground.style.visibility = 'visible' // show ground of hangman
            break;
        case 2: 
            vertical_beam.style.visibility = 'visible' // show vertical beam of hangman
            break;
        case 3: 
            horizontal_beam.style.visibility = 'visible' // show horizontal beam of hangman
            break;
        case 4: 
            rope.style.visibility = 'visible' // show rope of hangman
            break;
        case 5: 
            head.style.visibility = 'visible' // show head of hangman
            break;
        case 6: 
            body.style.visibility = 'visible' // show body of hangman
            break;
        case 7: 
            left_arm.style.visibility = 'visible' //show left arm of hangman
            break;
        case 8: 
            right_arm.style.visibility = 'visible' // show right arm of hangman
            break;
        case 9: 
            left_leg.style.visibility = 'visible' // show left leg of hangman
            break;
        case 10: 
            right_leg.style.visibility = 'visible' // show right leg of hangman
            answer.textContent = "the answer was: " + random_word // set text in answer
            lost_window.style.visibility = 'visible' // show lost window
            break;
        default:
            // pass
    }                                  //
    for (let index = 0; index < random_word.length; index++) { // for iteration random_word
        if (letter == random_word[index]) { // if statement to check if on this index is letter
            let myCharArray = text_to_display.split(''); // converts 'text_to_display' variable into array
            myCharArray[index] = letter // replace letter on that index with letter
            text_to_display = myCharArray.join('') // convert array back to string
        }  
        text_child.textContent = text_to_display.split('').join(' ') // set text in text_child
    }
    
    if (text_to_display.includes('_')) { // check if done
        //pass
    } else {
        win_window.style.visibility = 'visible' // show win window
    }
}

function refresh() {
    location.reload() // function to reload website
}