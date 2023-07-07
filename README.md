# 😎 Keylogger 
<br>
This was a playful application I created using HTML and CSS JavaScript.  Once I was exposed to the document.addEventListener() which is a method used in JavaScript to attach an event listener to a specific element in a web page.  I decided to challenge myslef and see if I could create a keyboard inspired app to log key presses.

### 🛠 Mock Design in Figma
![Mock Design](figma.jpg)

## ⌨ HTML Structure & CSS Design 
![HTML and CSS Code ](codesnippet.jpg)

Creating the mock up design of the keyboard in Figma helped me think about how I was going to structure the HTML Markup.  As you can see from the code snippets I decided to use a number of ```<div></div>``` to create sections for each area of the keyboard such as the F1 keys, number keys and the main keyboard area.  

The CSS part was really fun and fustrating at the same time but researching how to use flexbox and using the ```border-radius: 10px```; css property made the keyboard pop.   At this stage I wasn’t sure how I would link the user interaction to vsiualise which key has been pressed.  

## 💎 Javascript 
![JS Code ](javascript.jpg)
Using the document.addEventListener() method to listen for the "keyup" event. When a key is released on the users keyboard, the function is executed, retrieving the corresponding element using a ID specfifed and then using document.getElementById() and assigning it to the const variable.  This was like magic to me that I finally started to experince how to manipulate and interact with the DOM 🧩

## ⚙ Functions 
![JS Code ](switch.jpg)
Rather than using a list a if else statements I looked into using switch statements using various resources online and found this to be the best fit for what I wanted to achieve.  Staying true to what was taught in week 1 of School of Code Bootcamp I could hear the coaches voice in the background.....

      break down the problem statement and write out the tasks that your trying to solve in plain english   

Having researched and found the keypress event provides a charCode that represents the character value of the key pressed. This value corresponds to the character code or Unicode value of the entered character.  For example, when the letter "A" key is pressed, the charCode is 65, as it corresponds to the character code for the letter "A" in the ASCII table.  Once I was able to capture the key event press it was easy to store this in a variable to be used in the switch case to evalute and then perform a case block for each value.  

I created a function called toggleclass to change the CSS classes of the keyboard key, which in turn modifies their appearance (colour). It applies a class to a keyboard character to indicate that it has been pressed, and after a short delay, it reverts back to its original appearance. 

This part took me a while to figure out and after sometime and a few 100 console.log() I started to get the interaction working 😅

## ✍ Challenges & Key Learning
Key takeaways for this little project was to really think about what the code is doing and don’t forget to include break in all case statements.

When it came to the css I missed the opportunity to use root variables and use better naming conventions for CSS class names as I confused myself when I took a few days break and returned back to look at the code base 😅

and Finally really enjoyed learning about flex box and switch statements.  Im really look forward to using some CSS frameworks and maybe try mi hand at TailwindCSS

## 🎯 Link 

      https://ajdevbox.github.io/keylogger/
 
