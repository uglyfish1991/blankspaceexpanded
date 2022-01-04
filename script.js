// Const Variables
const block = document.getElementsByClassName("container")

// Increase Difficulty options
let current = 0

const refresh = () => {
    console.log("refresh")
    for (let i = 0; i < block.length; i++) {
        block[i].style.display = "none"
    }
    block[current].style.display = "flex"
}

const add = () => {
    if (current < 6) {
        current++
        console.log(current)
        refresh()
    }
}

// Maybe put the minus button back in? 
const minus = () => {
    if (current > 0) {
        current--
        console.log(current)
        refresh()
    }
}

// Level 1a Variables
const help1a = document.getElementById("helptext1a") //Helptext for Level 1a - same class, different ID

const abMain = document.getElementsByClassName("abfix")[0]
const abCont = document.getElementsByClassName("abcontentfix")[0]
const lvl1aPad = document.getElementById("levelOneAPad") // first input box for padding
const lvl1aBord = document.getElementById("levelOneABord") // second input box for border
const lvl1aMarg = document.getElementById("levelOneAMarg") // third input box for margin

//Code for Level 1a first box - expecting "padding" for padding 20px
lvlOneAPad = () => {
    console.log("padding level 1a")
    if (lvl1aPad.value == "padding") {
        abCont.style.padding="20px";
        abCont.style.margin="0px";
        help1a.textContent ="The first thing surrounding our content in this example is padding! We've added 20px of transparent space around the content"
        lvl1aPad.style.backgroundColor= "lightgreen";

    } else if (lvl1aPad.value == "margin") {
        help1a.textContent ="There is a margin on this, but this isn't the correct input for this box. Take a look to the panes of the right, which component of the box model is 20px in our example?"
        lvl1aPad.style.backgroundColor= "lightcoral";
    }

    else if (lvl1aPad.value == "border") {
        abCont.style.border="20px";
        help1a.textContent ="There is a border on this, but this isn't the correct input for this box. Take a look to the panes of the right, which component of the box model is 20px in our example? Also, border is a shorthand property - it would need more than just a pixel size to work!"
        lvl1aPad.style.backgroundColor= "lightcoral";
    }

    else {
        abCont.style.padding="0px";
        help1a.textContent = "Remember the components of the box model - take a look at the code, and the information in the panes on your right for some help!"
        lvl1aPad.style.backgroundColor = "lightcoral";
    }
}

lvlOneABord = () => {
    console.log("border level 1a")
    if (lvl1aBord.value == "border") {
        abCont.style.border="30px solid orange";
        help1a.textContent ="Surrounding our padding and content is the border - we've made ours pretty noticeable! Border is a shorthand property, we can assign many values on one line using this!"
        lvl1aBord.style.backgroundColor= "lightgreen";

    } else if (lvl1aBord.value == "margin") {
        help1a.textContent ="There is a margin on this, but this isn't the correct input for this box. Take a look to the panes of the right, which component of the box model is orange in our example?"
        lvl1aBord.style.backgroundColor= "lightcoral";

    } else if (lvl1aBord.value == "padding") {
        help1a.textContent ="There is padding on this, but this isn't the correct input for this box. Take a look to the panes of the right, which component of the box model is orange in our example?"
        lvl1aBord.style.backgroundColor= "lightcoral";
    }

    else {
        help1a.textContent = "Remember the components of the box model - take a look at the code, and the information in the panes on your right for some help!"
        lvl1aBord.style.backgroundColor = "lightcoral";
    }
}

lvlOneAMarg = () => {
    console.log("margin level 1a")
    if (lvl1aMarg.value == "margin") {
        abCont.style.margin="40px";
        help1a.textContent ="Margin is outside of the border - it puts space between the border and whatever content is around it."
        lvl1aMarg.style.backgroundColor= "lightgreen";

    } else if (lvl1aMarg.value == "border") {
        help1a.textContent ="There is a border on this, but this isn't the correct input for this box. Take a look to the panes of the right, which component of the box model is 20px in our example? Also, border is a shorthand property - it would need more than just a pixel size to work!"
        lvl1aMarg.style.backgroundColor= "lightcoral";

    } else if (lvl1aMarg.value == "padding") {
        help1a.textContent ="There is padding on this, but this isn't the correct input for this box. Take a look to the panes of the right, which component of the box model is 40px in our example?"
        lvl1aMarg.style.backgroundColor= "lightcoral";
    }

    else {
        help1a.textContent = "Remember the components of the box model - take a look at the code, and the information in the panes on your right for some help!"
        lvl1aMarg.style.backgroundColor = "lightcoral";
    }
}

fullCheck1a = () => {
    if (lvl1aPad.value == "padding" && lvl1aBord.value == "border" && lvl1aMarg.value == "margin") {
        help1a.textContent = "Amazing work! Congratulations! You've completed Level 1 - The Box Model! The box model is really helpful for us - you can see it on your own elements by right clicking your page, selecting \"inspect\" and hovering over different elements! Move on to Level 1B by clicking \"Next >\" at the top!"
    } else {
        help1a.textContent = "Keep filling in those inputs until the page matches! The input boxes will go green if you've submitted the expected answer!"
    }
}


// Level 1ba Variables
const help1ba = document.getElementById("helptext1ba") //Helptext for Level 1a - same class, different ID

const baCont = document.getElementsByClassName("bacontentfix")[0]
const lvl1bTop = document.getElementById("levelOneBTop") // first input box for border
const lvl1bBot = document.getElementById("levelOneBBot") // first input box for green
const lvl1bMarg = document.getElementById("levelOneBMarg") // first input box for 0px 60px 15px 20px

lvlOneBTop = () => {
    console.log("border top level 1b")
    if (lvl1bTop.value == "border") {
        baCont.style.borderTop="10px solid purple";
        help1ba.textContent ="Yes! The border at the top of the content is 10px, solid and purple. We've made sure that only the top border has these values by using the border-top property, as opposed to just border"
        lvl1bTop.style.backgroundColor= "lightgreen";

    } else if (lvl1bTop.value == "padding") {
        help1ba.textContent ="There is padding on this, but it isn't the correct input for this box! Use the rest of the CSS for clues - what is purple on the correct pane? Our padding is currently transparent."
        lvl1bTop.style.backgroundColor= "lightcoral";

    } else if (lvl1bTop.value == "margin") {
        help1ba.textContent ="There are margins on this, but this isn't the correct input for this box. Use the rest of the CSS for clues - what is purple on the correct pane? Our margins are currently transparent"
        lvl1bTop.style.backgroundColor= "lightcoral";
    }

    else {
        help1ba.textContent = "Remember the components of the box model - take a look at the code, and the information in the panes on your right for some help!"
        lvl1bTop.style.backgroundColor = "lightcoral";
    }
}

lvlOneBBot = () => {
    console.log("border bottom level 1b")
    if (lvl1bBot.value == "green") {
        baCont.style.borderBottom="20px solid green";
        help1ba.textContent ="Yes! It is the border-bottom property which has a green value. With just a size and style (in this case 20px and solid) the colour will default to black."
        lvl1bBot.style.backgroundColor= "lightgreen";
    }

    else {
        baCont.style.borderBottom="20px solid " + lvl1bBot.value;
        help1ba.textContent = "Trying getting the colour of the bottom border to match on both panes! Colour strings are easier to guess - try green!"
        lvl1bBot.style.backgroundColor = "lightcoral";
    }
}

lvlOneBMarg = () => {
    console.log("margin sizes level 1b")
    if (lvl1bMarg.value == "0px 60px 15px 20px;") {
        baCont.style.margin="0px 60px 15px 20px";
        help1ba.textContent ="Well done! That one was tough! You got the correct pixel values in the correct places and spotted the missing ; ! "
        lvl1bMarg.style.backgroundColor= "lightgreen";
    } else if (lvl1bMarg.value == "0px 60px 15px 20px") {
        help1ba.textContent ="So close! Just check the very end of your input - are you missing anything? Punctuation, possibly?"
        lvl1bMarg.style.backgroundColor= "lightcoral";
    } else if (lvl1bMarg.value == "0 60 15 20") {
        help1ba.textContent ="You've got the values in the right order, but don't forget units! The browser needs to know what our units are! Take a look at our existing CSS for examples"
        lvl1bMarg.style.backgroundColor= "lightcoral";
    } else if (lvl1bMarg.value == "0px 15px 20px 60px;") {
        baCont.style.margin="0px 15px 20px 60px";
        help1ba.textContent ="You've found the correct values - but not necessarily in the right order....take a look at the information in the panes for a clue!"
        lvl1bMarg.style.backgroundColor= "lightcoral";
    }

    else {
        baCont.style.margin="0px";
        help1ba.textContent = "Use the information to the right to find out the sizes of our margins - they're not equal! Remember the order the should be written in too!"
        lvl1bMarg.style.backgroundColor = "lightcoral";
    }
}

fullCheck1ba = () => {
    if (lvl1bTop.value == "border" && lvl1bBot.value == "green" && lvl1bMarg.value == "0px 60px 15px 20px;") {
        help1ba.textContent = "Amazing work! Congratulations! You've completed Level 1B. Move on to Level 2 by clicking \"Next >\" at the top!"
    } else {
        help1ba.textContent = "Keep filling in those inputs until the page matches! The input boxes will go green if you've submitted the expected answer!"
    }
}


// Level 1 Variables

const rightframe = document.getElementById("right") //Top right ID
let bginput = document.getElementById("bgsyntax")   // first empty box for "bg-color"
let bgcolourinput = document.getElementById("bginput") // second empty box, for actual value 
let headingInput = document.getElementById("hcolour") //third empty box, for H1 "color"
let rightHeading = document.getElementsByClassName("coral")[0] // H1 on right side that actually changes
let rightMiddle = document.getElementsByClassName("middle")[0] // middle div on right side that actually changes
let textDecoration = document.getElementById("tdunderline") //fourth empty box, for h1 "text decoration"
let middlePx = document.getElementById("pxsize") //fith empty box, for middle dix width unit "px"
let middleMar = document.getElementById("marright") //sixth empty box, expecting "right" for centering div"
let middleAlign = document.getElementById("midalign") //seventh empty box, expecting "center" for text align"
const help = document.getElementById("helptext1") // helptext at bottom of page

// Code for the first box - expecting "background-color" to change body bg
lineOne = () => {
    console.log("l1 function happening")
    if (bginput.value == "background-color") {
        rightframe.style.backgroundColor = bgcolourinput.value;
        bginput.style.backgroundColor = "lightgreen"
        help.textContent = "Well done! You got the code! Try adding a colour now"
    } else if (bginput.value == "background-colour") {
        rightframe.style.backgroundColor = "white";
        help.textContent = "Almost! Check your spelling! Remember, CSS uses American Spelling"
    } else if (bginput.value == "backgroundcolor") {
        rightframe.style.backgroundColor = "white";
        help.textContent = "Almost! Check the punctuation you're using, have you used a dash between words?"
    }
    else {
        rightframe.style.backgroundColor = "white";
        help.textContent = "Not quite! Take a look again - and feel free to use the links above as research!"
        bginput.style.backgroundColor = "lightcoral"

    }
}

// Code for the second box - expecting "cadetblue" or the hex to change body bg
bgValue = () => {
    if (bgcolourinput.value == "cadetblue" || bgcolourinput.value == "#5f9ea0" && bginput.value == "background-color") {
        rightframe.style.backgroundColor = bgcolourinput.value;
        bgcolourinput.style.backgroundColor = "lightgreen";
        help.textContent = "Great work! You've managed to change the background of the page element <body>.You can see how the background colour matches exactly! Well done!"
    } else if (bginput.value == "background-color") {
        rightframe.style.backgroundColor = bgcolourinput.value;
        bgcolourinput.style.backgroundColor = "lightcoral";
        help.textContent = "Great work! You've managed to change the background of the page element <body>. Try getting the background to match exactly"
    }
    else {
        help.textContent = "Try entering the first part of the CSS before you enter a colour"
        rightframe.style.backgroundColor = "white";
        bgcolourinput.style.backgroundColor = "lightcoral";

    }
}

// Code for the third box - expecting "color" to change H1 font color
hOneColour = () => {
    if (headingInput.value == "color:") {
        rightHeading.style.color = "coral";
        headingInput.style.backgroundColor = "lightgreen";
        help.textContent = "Excellent! Now every H1 will be coral - but remember, you should only use H1 once per page!"
    } else if (headingInput.value.includes("colour")) {
        help.textContent = "Almost! Remember - American spellings!"
        rightHeading.style.color = "black";
        headingInput.style.backgroundColor = "lightcoral";
    }

    else if (headingInput.value == "color") {
        help.textContent = "So close! Take a look at the punctuation - is something missing?"
        rightHeading.style.color = "black";
        headingInput.style.backgroundColor = "lightcoral";
    }
    else {
        help.textContent = "What is it that you are trying to change? Have a look at other examples in the code to see if they help"
        rightHeading.style.color = "black";
        headingInput.style.backgroundColor = "lightcoral";
    }
}

// Code for the fourth box - expecting "text" to change decoration
tdUnderline = () => {
    if (textDecoration.value == "text") {
        rightHeading.style.textDecoration = "underline";
        textDecoration.style.backgroundColor = "lightgreen";
        help.textContent = "Excellent! We've decorated our H1  by underlining it! Now every instance of H1 will be underlined - but remember, you should only use H1 once per page!"
    }
    else {
        help.textContent = "What is it that you are trying to change? Have a look at other examples in the code to see if they help"
        rightHeading.style.textDecoration = "none";
        textDecoration.style.backgroundColor = "lightcoral";
    }
}

// Code for the fifth box - expecting px to change width
pxSize = () => {
    if (middleMar.value == "right" && middlePx.value == "px") {
        rightMiddle.style.marginRight = "auto";
        rightMiddle.style.width = "400px";
        help.textContent = "Excellent! We made our div 400px wide! To center it, we need to tell the browser to auto-find the left and right margins, and display as 'block'. That was tough! Well done!"
        middlePx.style.backgroundColor = "lightgreen";
        middleMar.style.backgroundColor = "lightgreen";
    } else if (middlePx.value == "px") {
        rightMiddle.style.width = "400px";
        middlePx.style.backgroundColor = "lightgreen";
        help.textContent = "Excellent! We can use values to give our elements sizes. In this case, we've said we want the div class 'middle' to be 400px wide!"
    } else if (middlePx.value == "pixels" || middlePx.value == "Pixels") {
        help.textContent = "Pixels is correct! but we can write it a shorter way! Like you can shortned centimetres to cm, you can shorten pixels!"
        rightMiddle.style.width = "100%";
        middlePx.style.backgroundColor = "lightcoral";
    } else if (middlePx.value == "%" || middlePx.value == "percent") {
        help.textContent = "You've got the right idea! We need to give our browser a unit - 400 what? But 400% means 4 x the full width of the container it is in - that could be a little too big! Have a look at the bottom of your screen now - is there a scrollbar? Can you scroll across a lot?"
        rightMiddle.style.width = "400%";
        middlePx.style.backgroundColor = "lightcoral";
    }
    else {
        help.textContent = "We've specified the property, and weve specified a number - should we be specific about the unit?"
        rightMiddle.style.width = "100%";
        middlePx.style.backgroundColor = "lightcoral";
    }
}

// Code for the fifth box - expecting px to change width
marR = () => {
    if (middleMar.value == "right" && middlePx.value == "px") {
        rightMiddle.style.marginRight = "auto";
        help.textContent = "Excellent! We made our div 400px wide! To center it, we need to tell the browser to auto-find the left and right margins, and display as 'block'. That was tough! Well done!"
        middlePx.style.backgroundColor = "lightgreen";
        middleMar.style.backgroundColor = "lightgreen";

    } else if (middleMar.value == "right" && middlePx.value != "px") {
        help.textContent = "Your margin is correct - but you wont see a result just yet! You'll see the result better if the div isnt the whole width of the page!"
        middleMar.style.backgroundColor = "lightcoral";
    }
    else {
        help.textContent = "Is there anything else similar in the CSS? Any other positions/directions listed that we could use the opposite of?"
        rightMiddle.style.marginRight = "0px";
        middleMar.style.backgroundColor = "lightcoral";
    }
}

// Code for the seventh box - expecting center to change alignment
midAlign = () => {
    if (middleAlign.value == "center") {
        rightMiddle.style.textAlign = "center";
        help.textContent = "Great work! We can align our text using text-align, and in this case, we've centred it. Well done for noticing the American spelling, too!"
        middleAlign.style.backgroundColor = "lightgreen";

    } else if (middleAlign.value == "centre") {
        help.textContent = "So close! Remember, we use American spellings in the code!"
        middleAlign.style.backgroundColor = "lightcoral";

    } else if (middleAlign.value == "right") {
        rightMiddle.style.textAlign = "right"
        help.textContent = "So close! You've changed the alignment correctly, but not to correct value! Have another look!"
        middleAlign.style.backgroundColor = "lightcoral";
    }
    else {
        help.textContent = "How are we trying to align our text? It's currently aligned to the left"
        rightMiddle.style.textAlign = "left";
        middleAlign.style.backgroundColor = "lightcoral";
    }
}

fullCheck = () => {
    if (middleAlign.value == "center" && middleMar.value == "right" && middlePx.value == "px" && bginput.value == "background-color" && bgcolourinput.value == "cadetblue" || bgcolourinput.value == "#5f9ea0" && textDecoration.value == "text" && headingInput.value == "color:") {
        help.textContent = "Amazing work! Use the 'Next' button above to move on to a harder challenge!"
    } else {
        help.textContent = "Keep filling in those inputs until the page matches! The input boxes will go green if you've submitted the expected answer!"
    }
}

// Level 2 Variables
const rightframe2 = document.getElementById("right2") //Can't reuse ID from before
const help2 = document.getElementById("helptext2") //Helptext for Level 2 - same class, different ID


let bbMain = document.getElementsByClassName("bbfix")[0] // Main class for top right box - needs a background (lvl2bg)
let bbHead = document.getElementsByClassName("bbheaderfix")[0]
let bbCont = document.getElementsByClassName("bbcontentfix")
let lvl2bg = document.getElementById("levelTwobg") // First input box - expecting "peachpuff" as answer
let lvl2TAlign = document.getElementById("levelTwoText") // Second input box - expecting "text" for an answer
let lvl2TPx = document.getElementById("levelTwoFont") // Third input box - expecting "px" for an answer
let lvl2MarTop = document.getElementById("levelTwoMarg") //Forth input box - expecting -top for answer, will give hints for other directions, or answer without punctuation
let lvl2Border = document.getElementById("levelTwoBorder") //Fifth input box - expecting solid
let lvl2Padding = document.getElementById("levelTwoPadding") //Sixth input box - expecting padding as a result

//Code for Level 2 first box - expecting "peachpuff" as an asnwer, can accept any colour
lvlTwoBgColour = () => {
    if (lvl2bg.value == "peachpuff") {
        bbMain.style.backgroundColor = "peachpuff";
        help2.textContent = "Great work! The background colour is peachpuff. Already our page looks better!"
        lvl2bg.style.backgroundColor = "lightgreen";

    } else if (lvl2bg.value == "coral" || lvl2bg.value=="lightcoral" || lvl2bg.value=="cornsilk") {
        bbMain.style.backgroundColor = lvl2bg.value;
        help2.textContent = "So close! Right concept, but not quite the right colour! Try another string."
        lvl2bg.style.backgroundColor = "lightcoral";

    } 
    else {
        bbMain.style.backgroundColor = lvl2bg.value;
        help2.textContent = "Try typing in one of the colour strings listed to change the background colour to match the frame!"
        lvl2bg.style.backgroundColor = "lightcoral";
    }
}

//Code for Level 2 second box - expecting "text" as an answer
lvlTwoText = () => {
    if (lvl2TAlign.value == "text") {
        bbHead.style.textAlign = "center";
        help2.textContent = "Great work! We've centered all the text in the class \"header\". Because this is the only div with that class, it's the only one we see, but anything else we give the class to will also have centered text."
        lvl2TAlign.style.backgroundColor = "lightgreen";

    } 
    else {
        bbHead.style.textAlign = "left";
        help2.textContent = "We can see from our property and value that we're trying to align something...but what? What is the kind of content that we are centering?"
        lvl2TAlign.style.backgroundColor = "lightcoral";
    }
}

//Code for Level 2 third box - expecting "px" as an answer - will change for em, % and vw
lvlTwoFontPx = () => {
    if (lvl2TPx.value == "px") {
        bbHead.style.fontSize = "40px";
        help2.textContent = "Great work! We've made all text within the class \"header\" 40px - that's quite big!"
        lvl2TPx.style.backgroundColor = "lightgreen";

    } else if (lvl2TPx.value == "em" || lvl2TPx.value=="%" || lvl2TPx.value=="vw") {
        bbHead.style.fontSize = "40" + lvl2TPx.value;
        help2.textContent = "You've got the right idea - we're adding a unit that the browser can measure in, but are there any others you can think of? Check the right pane for a hint."
        lvl2TPx.style.backgroundColor = "lightcoral";

    } 
    else {
        bbHead.style.fontSize = "14px";
        help2.textContent = "We've told the browser we want our font-size as 40, but 40 what? Try looking at units fonts can be set in for a hint!"
        lvl2TPx.style.backgroundColor = "lightcoral";
    }
}

//Code for Level 2 fourth box - expecting -top for answer, will give hints for other directions, or answer without punctuation
lvlTwoMTop = () => {
    
    if (lvl2MarTop.value == "-top") {
        let n;
        for (n = 0; n < bbCont.length; n++) {
        bbCont[n].style.marginTop = "20px";}
        help2.textContent = "Good spot with the punctuation! We've added a transparent space of 20px at the top of each element with the class \"content\" outside of the border, padding and content"
        lvl2MarTop.style.backgroundColor = "lightgreen";

    } else if (lvl2MarTop.value == "-left" || lvl2MarTop.value=="-right") {
        help2.textContent = "We can change this value, but have a look at the pane on the right. We've set that further down. Maybe try another?"
        lvl2MarTop.style.backgroundColor = "lightcoral";

    } 
    else if (lvl2MarTop.value == "bottom") {
        help2.textContent = "Are you missing anything? Punctuation?"
        lvl2MarTop.style.backgroundColor = "lightcoral";

    } 
    else if (lvl2MarTop.value == "-bottom") {
        let n;
        for (n = 0; n < bbCont.length; n++) {
        bbCont[n].style.marginBottom = "20px";}
        help2.textContent = "Well done! You've changed one of the margins - so underneath every element with the class of \"content\" we've added a 20px margin - but does that match our example? Is the space at the bottom of our divs?"
        lvl2MarTop.style.backgroundColor = "lightcoral";

    } 
    else if (lvl2MarTop.value == "top") {
        help2.textContent = "So close! You've got the right margin for us to change, but are you missing anything? Punctuation?"
        lvl2MarTop.style.backgroundColor = "lightcoral";

    } 
    else {
        let n;
        for (n = 0; n < bbCont.length; n++) {
        bbCont[n].style.marginTop = "0px";}
        help2.textContent = "We know we're looking to change a margin, and we know we're changing it by 20px. What direction could it be?"
        lvl2MarTop.style.backgroundColor = "lightcoral";
    }
}

//Code for Level 2 fifth box - expecting solid for answer. Will accept any valid border CSS
lvlTwoBord = () => {
    
    if (lvl2Border.value == "solid") {
        let n;
        for (n = 0; n < bbCont.length; n++) {
        bbCont[n].style.border = "5px solid lightcoral";}
        help2.textContent = "Border is a fun property, because it is shorthand for many others. In this case we've condensed what would be three lines of code (border-width, border-style, and border-color) into 1!"
        lvl2Border.style.backgroundColor = "lightgreen";

    } else if (lvl2Border.value == "dashed" || lvl2Border.value == "dotted" || lvl2Border.value == "double" || lvl2Border.value == "groove" || lvl2Border.value == "ridge" || lvl2Border.value == "inset"|| lvl2Border.value == "outset" || lvl2Border.value == "initial" || lvl2Border.value == "inherit") {
        let n;
        for (n = 0; n < bbCont.length; n++) {
        bbCont[n].style.border = "5px lightcoral " +lvl2Border.value;}
        help2.textContent = "Your syntax is right! Keep trying values until you hit the right one!"
        lvl2Border.style.backgroundColor = "lightcoral";

    } 
    else if (lvl2Border.value == "none" || lvl2Border.value == "hidden") {
        help2.textContent = "Not quite! This a value we can use with border, but in our example we can see a line around our content, so this value isnt right in this situation"
        lvl2Border.style.backgroundColor = "lightcoral";

    } 
    else {
        let n;
        for (n = 0; n < bbCont.length; n++) {
        bbCont[n].style.border = "none";}
        help2.textContent = "We've got a value missing from our shorthand border property - without it, no part of the border CSS will show!"
        lvl2Border.style.backgroundColor = "lightcoral";
    }
}

//Code for Level 2 six box - expecting padding as an answer. Will prompt user to look at box model for any other answer
lvlTwoPad = () => {
    
    if (lvl2Padding.value == "padding") {
        let n;
        for (n = 0; n < bbCont.length; n++) {
        bbCont[n].style.padding = "10px";}
        help2.textContent = "Padding is space around out content, inside of the border. The padding itself is transparent. It means we've got a bit of space around our text!"
        lvl2Padding.style.backgroundColor = "lightgreen";

    } 
    else {
        let n;
        for (n = 0; n < bbCont.length; n++) {
        bbCont[n].style.padding = "0px";}
        help2.textContent = "If you're stuck, I'd recommed using the links above to research the box model! We've looked at border and margin - what else can we change?"
        lvl2Padding.style.backgroundColor = "lightcoral";
    }
}

fullCheckB = () => {
    if (lvl2bg.value == "peachpuff" && lvl2TAlign.value == "text" && lvl2TPx.value == "px" && lvl2MarTop.value == "-top" && lvl2Border == "solid" && lvl2Padding == "padding") {
        help2.textContent = "Amazing work! Use the 'Next' button above to move on to a harder challenge!"
    } else {
        help2.textContent = "Keep filling in those inputs until the page matches! The input boxes will go green if you've submitted the expected answer!"
    }
}

// Level 3 Variables

const help3 = document.getElementById("helptext3") //Helptext for Level 3 - same class, different ID

let ccMain = document.getElementsByClassName("ccfix")[0] //
let ccImg = document.getElementsByClassName("ccimgfix")[0]
let ccContent = document.getElementsByClassName("cccontentfix")[0]
let lvl3Btop = document.getElementById("levelThreeBorder") // First input box - expecting "border-top"
let lvl3Float = document.getElementById("levelThreeFloat") // Second input box - expecting "float"
let lvl3Width = document.getElementById("levelThreeWidth") // third input box, expecting 400
let lvl3BordStyle = document.getElementById("levelThreeBordStyle") //th input box, expecting ridge
let lvl3Box = document.getElementById("levelThreeBox") // Last box, expecting "box-sizing"


//Code for Level 3 first box - expecting border-top as an answer. Will respond to any other border, and give a hint for no punctuation
lvlThreeBord = () => {
    
    if (lvl3Btop.value == "border-top") {
        ccMain.style.borderTop = "3vh ridge #bb4430";
        help3.textContent = "Yes! We've put a border on the top of body only, so we can specify \"border-top\"!"
        lvl3Btop.style.backgroundColor = "lightgreen";

    } else if (lvl3Btop.value == "border-left") {
        ccMain.style.borderLeft = "3vh ridge #bb4430";
        help3.textContent = "So close! You've correctly deduced that we're changing only one edge of the border - but which one? Try right, top, or bottom!"
        lvl3Btop.style.backgroundColor = "lightcoral";

    } else if (lvl3Btop.value == "border-right") {
        ccMain.style.borderRight = "3vh ridge #bb4430";
        help3.textContent = "So close! You've correctly deduced that we're changing only one edge of the border - but which one? Try left, top, or bottom!"
        lvl3Btop.style.backgroundColor = "lightcoral";

    } else if (lvl3Btop.value == "border-bottom") {
        ccMain.style.borderBottom = "3vh ridge #bb4430";
        help3.textContent = "So close! You've correctly deduced that we're changing only one edge of the border - but which one? Try right, top, or left!"
        lvl3Btop.style.backgroundColor = "lightcoral";

    } else if (lvl3Btop.value == "border") {
        ccMain.style.border = "3vh ridge #bb4430";
        help3.textContent = "We are adding a border! But is it around the whole content, or only one edge?"
        lvl3Btop.style.backgroundColor = "lightcoral";

    } 
    else if (lvl3Btop.value == "bordertop") {
        ccMain.style.border = "none";
        help3.textContent = "So close! Check your punctuation =p"
        lvl3Btop.style.backgroundColor = "lightcoral";

    } 
    else {
        ccMain.style.border = "none";
        help3.textContent = "We've got something on one edge of our content - outside of our content and padding. Take a look at the box model link above for a hint!"
        lvl3Btop.style.backgroundColor = "lightcoral";
    }
}

//Code for Level 3 second box - expecting float as an answer. Don't know what else to prompt for?
lvlThreeFloat = () => {
    
    if (lvl3Float.value == "float") {
        ccImg.style.float = "left";
        help3.textContent = "Yes! Float is a really handy property - used for positioning and formatting content. It allows it to wrap. In this case, we've floated out image left, so text will appear to the right of the whole image, because it is wrapped!"
        lvl3Float.style.backgroundColor = "lightgreen";

    } 
    else {
        ccImg.style.float = "none";
        help3.textContent = "This might require some research! Have a look at the links above and see if you can find anything out!"
        lvl3Float.style.backgroundColor = "lightcoral";
    }
}
//Code for Level 3 third box - expecting 400 as an answer. Don't know what else to prompt for?
lvlThreeWidth = () => {
    
    if (lvl3Width.value == "400") {
        ccContent.style.width = "400px";
        help3.textContent = "We've set it to have a width of 400px! But is it a little bigger than that? Hmmmmm......"
        lvl3Width.style.backgroundColor = "lightgreen";

    } else if (lvl3Width.value == "400px") {
        ccContent.style.width = "100%";
        help3.textContent = "Right answer - but you don't need the units, they're already there!"
        lvl3Width.style.backgroundColor = "lightgreen";

    } 
    else {
        ccContent.style.width = lvl3Width.value+"px";
        help3.textContent = "The pane on the right tells you how many pixels wide this div should be!"
        lvl3Width.style.backgroundColor = "lightcoral";
    }
}

//Code for Level 3 fourth box - expecting ridge as an answer. Don't know what else to prompt for?
lvlThreeBordStyle = () => {
    
    if (lvl3BordStyle.value == "ridge") {
        ccContent.style.border = "15px ridge green";
        help3.textContent = "Yes! We used the ridge style for our border. Without a border-style value, the whole shorthand CSS wasn't working, but now we can see all our values applied"
        lvl3BordStyle.style.backgroundColor = "lightgreen";

    } else if (lvl3BordStyle.value == "dashed" || lvl3BordStyle.value == "dotted" || lvl3BordStyle.value == "double" || lvl3BordStyle.value == "groove" || lvl3BordStyle.value == "solid" || lvl3BordStyle.value == "inset"|| lvl3BordStyle.value == "outset" || lvl3BordStyle.value == "initial" || lvl3BordStyle.value == "inherit") {
        ccContent.style.border = "15px green"+lvl3BordStyle.value;
        help3.textContent = "That's the right idea! We're putting a border-style value into our shorthand CSS - keep trying values until you get the correct one!"
        lvl3BordStyle.style.backgroundColor = "lightcoral";
    }else {
        ccContent.style.border = "none";
        help3.textContent = "We've got some border shorthand CSS, with a border-width and a border-colour value in, what are we missing?"
        lvl3BordStyle.style.backgroundColor = "lightcoral";
    }
}


//Code for Level 3 last box - expecting "box-sizing"?
lvlThreeBox = () => {
    
    if (lvl3Box.value == "box-sizing") {
        ccContent.style.boxSizing = "border-box";
        help3.textContent = "This combination of properties and values make it so any paddings and borders we set are included into the size of the element - rather than added to it. Delete this entry and have a look to see if you can see the difference between box-sizing being set to border box, vs its default \"content-box\". You've got it!"
        lvl3Box.style.backgroundColor = "lightgreen";

    } 
    else {
        ccContent.style.boxSizing = "content-box";
        help3.textContent = "This might require some research! Have a look at the links above and see if you can find anything out!"
        lvl3Box.style.backgroundColor = "lightcoral";
    }
}

fullCheckC = () => {
    if (lvl3Btop.value == "border-top" && lvl3Float.value == "float" && lvl3Width.value == "400" && lvl3BordStyle.value == "ridge" && lvl3Box.value == "box-sizing") {
        help3.textContent = "Amazing work! Use the 'Next' button above to move on to a harder challenge!"
    } else {
        help3.textContent = "Keep filling in those inputs until the page matches! The input boxes will go green if you've submitted the expected answer!"
    }
}


// Level 4 Variables
const help4 = document.getElementById("helptext4") //Helptext for Level 4 - same class, different ID

let ddMain = document.getElementsByClassName("ddfix")[0]
let ddNav = document.getElementsByClassName("ddnavfix")[0]
let ddCont = document.getElementsByClassName("ddcontentfix")[0]
let lvl4Bg = document.getElementById("levelFourBg") // first input box for image
let lvl4FontSize = document.getElementById("levelFourFontSize") // second input box for "px"
let lvl4FontFamily = document.getElementById("levelFourFontFamily") // third input box for "font-family"

//Code for Level 4 first box - expecting "image" for background image
lvlFourBg = () => {
    
    if (lvl4Bg.value == "image") {
        ddMain.style.backgroundImage="url('bg.jpeg')";
        help4.textContent ="When we are defining a background, we need to say what kind of background it is. In this case, you quite rightly said it is a background-image."
        lvl4Bg.style.backgroundColor= "lightgreen";

    } 
    else {
        ddMain.style.backgroundColor="white";
        help3.textContent = "What kind of background are we trying to apply?"
        lvl4Bg.style.backgroundColor = "lightcoral";
    }
}

//Code for Level 4 first box - expecting "px" for font size
lvlFourFontSize = () => {
    
    if (lvl4FontSize.value == "px") {
        ddNav.style.fontSize="20px";
        help4.textContent ="This CSS might be a bit new - but this is selecting any <a> element that is a child of the class .nav. No other link will be affected"
        lvl4FontSize.style.backgroundColor= "lightgreen";

    } else if (lvl4FontSize.value == "em" || lvl4FontSize.value == "%") {
        ddNav.style.fontSize="20"+lvl4FontSize.value;
        help4.textContent ="You've got the right idea! But not quite the right unit - try another and see how it works!"
        lvl4FontSize.style.backgroundColor= "lightcoral";

    } 
    else {
        ddNav.style.fontSize="14px";
        help4.textContent = "We've got a font size property - but 20 what? We need a unit!"
        lvl4FontSize.style.backgroundColor = "lightcoral";
    }
}

//Code for Level 4 first box - expecting "font-family"
lvlFourFontFamily = () => {
    
    if (lvl4FontFamily.value == "font-family") {
        ddCont.style.fontFamily="'Josefin Sans'";
        help4.textContent ="We imported our font at the top, but we still need to declare where we want to apply the font-family. In this instance, we've said the class \"content\" needs the font-family applied to it"
        lvl4FontFamily.style.backgroundColor= "lightgreen";

    } 
    else {
        ddCont.style.fontFamily="Times New Roman";
        help4.textContent = "Have a look at where else we see \"Josefin Sans\" in our CSS - does that give us any clues as to what it is?"
        lvl4FontFamily.style.backgroundColor = "lightcoral";
    }
}

fullCheckD = () => {
    if (lvl4FontFamily.value == "font-family" && lvl4FontSize.value == "px" && lvl4Bg.value == "image") {
        help4.textContent = "Amazing work! Congratulations! You've completed the CSS Challenge!"
    } else {
        help4.textContent = "Keep filling in those inputs until the page matches! The input boxes will go green if you've submitted the expected answer!"
    }
}

// Level 5 Variables
const help5 = document.getElementById("helptext5") //Helptext for Level 4 - same class, different ID

const eeNav = document.getElementsByClassName("eenavfix")[0]
const eeCont = document.getElementsByClassName("eecontentfix")[0]
const lvl5Flex = document.getElementById("levelFiveFlex") // first input box for flex
const lvl5Even = document.getElementById("levelFiveEven") // second input box for evenly
const lvl5Col = document.getElementById("levelFiveCol") // second input box for column

lvlFiveFlex = () => {
    
    if (lvl5Flex.value == "flex") {
        eeNav.style.display="flex";
        help5.textContent ="To be able to use the flex properties\"justify-content\" and \"align-items\", we need to first set this div to display: flex! Well done! By default, divs are set to block."
        lvl5Flex.style.backgroundColor= "lightgreen";
    } else if (lvl5Flex.value == "inline") {
        eeNav.style.display="inline";
        help5.textContent ="You're looking at the right set of values for the display property, but haven't found the right one yet! Inline makes it so things will be on the same line as the div, if they can be"
        lvl5Flex.style.backgroundColor= "lightcoral";
    } else if (lvl5Flex.value == "none") {
        eeNav.style.display="none";
        help5.textContent ="......errrrm! Not quite!"
        lvl5Flex.style.backgroundColor= "lightcoral";
    } 
    else {
        eeNav.style.display="block";
        help5.textContent = "By default, divs are set to block. What do we need to be able to use flex properties?"
        lvl5Flex.style.backgroundColor = "lightcoral";
    }
}

lvlFiveEven = () => {
    
    if (lvl5Flex.value !== "flex") {
        help5.textContent ="I'd recommend answering display first!"
        lvl5Even.style.backgroundColor= "lightcoral";
    } else if (lvl5Even.value == "evenly" && lvl5Flex.value == "flex") {
        console.log("right")
        eeNav.style.display="flex";
        eeNav.style.justifyContent="space-evenly";
        help5.textContent ="Flexbox lets use use these properties to make layout out our content much easier! Instead  of having to do maths to work out how much space each link should get, Flexbox does it for us. We can add or remove as many links as we like, or change the width of the navigation bar, and Flexbox will keep things even for us!"
        lvl5Even.style.backgroundColor= "lightgreen";
    } else if (lvl5Even.value == "evenly" && lvl5Flex.value !== "flex") {
        help5.textContent ="You've inputted the correct answer but try answering \"display\" first and then coming back to this"
        lvl5Even.style.backgroundColor= "lightcoral";
    } else if (lvl5Even.value == "around" && lvl5Flex.value == "flex") {
        eeNav.style.display="flex";
        eeNav.style.justifyContent="space-around";
        help5.textContent ="You've got the right set of values for this property, but not quite the right value! It can be a little tricky with flexbox to see the difference sometimes, but try another!"
        lvl5Even.style.backgroundColor= "lightcoral";
    } else if (lvl5Even.value == "between" && lvl5Flex.value == "flex") {
        eeNav.style.display="flex";
        eeNav.style.justifyContent="space-between";
        help5.textContent ="You've got the right set of values for this property, but not quite the right value! It can be a little tricky with flexbox to see the difference sometimes, but try another!"
        lvl5Even.style.backgroundColor= "lightcoral";
    } 
    else {
        help5.textContent = "Have a look on W3 Schools if you're stuggling! There are many values we can use for justify-content, but we've got a clue! Our value starts with \"space\" - so it can only be one of three!"
        lvl5Even.style.backgroundColor = "lightcoral";
    }
}

lvlFiveCol = () => {
    
    if (lvl5Col.value == "column") {
        eeCont.style.flexDirection="column";
        help5.textContent ="Flexbox can only display content in one direction at a time - either rows, or columns. If we want our content appearing below each other, we set our flex direction to column! Row is the default - we don't need to declare it if we want our conntent going across the page - like our navbar!"
        lvl5Col.style.backgroundColor= "lightgreen";
    } else if (lvl5Col.value == "row") {
        eeCont.style.flexDirection="row";
        help5.textContent ="By default, when we display:flex; flexbox will put the content it is working on in a row. Our content is on top of each other, so what is the other direction flexbox can display in?"
        lvl5Col.style.backgroundColor= "lightcoral";
    } else {
        eeCont.style.flexDirection="row";
        help5.textContent = "By default, flex will display in a row. What else can we declare?"
        lvl5Col.style.backgroundColor = "lightcoral";
    }
}