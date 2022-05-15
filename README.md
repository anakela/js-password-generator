# Homework 3 - JavaScript Challenge: Password Generator

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

> #### JavaScript Challenge: Password Generator
> This week's Challenge requires you to create an application that an employee can use to generate a random password based on criteria they've selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. This week's coursework will teach you all the skills you need to succeed in this assignment.

> The password can include special characters. If you're unfamiliar with these, see this list of Password Special Characters from the OWASP Foundation (Links to an external site.).

### User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```
### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

### Links

- Solution URL: [https://github.com/anakela/js-password-generator](https://github.com/anakela/js-password-generator)
- Live Site URL: [https://anakela.github.io/js-password-generator/](https://anakela.github.io/js-password-generator/)

## My Process

### Built With

- Semantic HTML5 Markup
- CSS
- JavaScript
- GitHub

### What I Learned

I learned about how the `element.addEventListener()` works and how to assign it to an HTML element so that an action can trigger it rather than having the function just automatically happen when the page loads.  In this case:

- I learned that `let generateBtn = document.querySelector("#generate")` assigned the variable `generateBtn` to the `#generate` ID in the HTML file, which is the "Generate Password" button.
- Then, `generateBtn.addEventListener("click", writePassword)` assigned the click event to the Generate Password button, which would, when clicked, initialize the `writePassword()` function.

This project also pushed me to learn about nesting `if...else` statements and `for loops` inside of functions so that they work one after another to complete a function.

Lastly, I learned how to use Google Chrome's Console to view the functions in my code to better understand where errors might be occuring.  (The `console.log()` will always be one of my favorites!)

### Continued Development

This particular assignment has shown me how much I have to learn when it comes to JavaScript.  I would like to apply what I've learned here and apply it to additional new projects.

I would also like to better learn JavaScript syntax and basic functions.  I believe this will better prepare me for the additional challenges that I will face not only in bootcamp, but also in the workforce.

### Useful Resources

- [MDN Web Docs: Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [MDN Web Docs: Addition assignment (+=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)
- [MDN Web Docs: EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs: Window alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
- [MDN Web Docs: Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [Stack Overflow: how to return to top of for loop in javascript](https://stackoverflow.com/questions/3927136/how-to-return-to-top-of-for-loop-in-javascript)
- [Stack Overflow: Array inside a JavaScript Object?](https://stackoverflow.com/questions/1828924/array-inside-a-javascript-object)
- [Stack Overflow: Cannot access 'variable_name' before initialization](https://stackoverflow.com/questions/56318460/cannot-access-variable-name-before-initialization)+
- [Stack Overflow: Generate random password string with requirements in javascript](https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript)
- [Stack Overflow: Pull from each array if true in JS?](https://stackoverflow.com/questions/72246191/pull-from-each-array-if-true-in-js) - I actually asked this question and was surprised at how quickly other users posted replies.
- [OWASP: Password Special Characters](https://owasp.org/www-community/password-special-characters)
- [W3Schools: HTML DOM Element addEventListener()](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
- [W3Schools: JavaScript HTML DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
- [W3Schools: Window confirm()](https://www.w3schools.com/jsref/met_win_confirm.asp)
- [W3Schools: Window prompt()](https://www.w3schools.com/jsref/met_win_prompt.asp)
- [W3Schools: JavaScript if, else, and else if](https://www.w3schools.com/js/js_if_else.asp)
- [W3Schools: JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
- [W3Schools: onclick Event](https://www.w3schools.com/jsref/event_onclick.asp)
- [W3Schools: JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

## Author

- GitHub - [Angela Soto](https://github.com/anakela)
- LinkedIn - [@anakela](https://www.linkedin.com/in/anakela/)

## Acknowledgments

I worked with several classmates and TAs to get the random password generator to even be operational.  I'd like to acknowledge the following individuals:

- Luigi Campbell (TA)
- Scott Nelson (TA)
- Nolan Spence
- Ivy Chang
- Michael Barrett

Both Luigi and Scott were very patient with me and helped me better understand the JavaScript I was using and why.  Nolan, Ivy, and Michael were also very helpful by working with me and comparing notes to understand the assignment and the functions it contained.