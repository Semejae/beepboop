Describe: beepboop()
test:beepboop(1) 
Expected Output: 'beep'
test:beepboop(2)
Expected Output: 'beep','boop'
test: beepboop(3)
Expected Output: 'bee','boop','wont you be my neighbor?'

Describe: inputNum
test: "take a string and make it a number"
code: 
const input = $('#numbers').val();
const inputNum = parseInt(input);
Expected Output: 1

Describe: roboBeep(input)
test:'it should take 1,2,3 and place it with beep, boop, wont you be my neighbor'
Code: 
for (let i = 0; i <= inputNum; i++) {let numberImLookingAt = i.toString();
if (numberImLookingAt.includes('3')) {arrayNumber.push('Wont you be my neighbor?')} else if (numberImLookingAt.includes('2')) {arrayNumber.push('boop')} else if (numberImLookingAt.includes('1')) {arrayNumber.push('beep')} else {arrayNumber.push(i)}} return arrayNumber
Expected Output: 'beep'

Describe: outputArray
test: 'displays roboBeep'
code: 
const outputArray = roboBeep(inputNum);
$('#results').text(outputArray)
Expected Output: 'bee','boop','wont you be my neighbor?'

## BeepBoop

### by_**{Anthony-Gladden}**_

### _{this is a page that turns numbers into words}_

## technologies used 
* _VScode_ 
* _gitBash_
* _github_
* _html_
* _javascript_
* _css_

## Description 
_this page replaces 1,2,3 with a message_


## Setup/Installation Requirements
* _within your terminal, navigate to your desktop_
* _Use 'git clone [instert my repository's http link] to add my code to your device_
* _navigate to the file within your file explorer_
* _Open index.html in your browser, prefferably use Chrome_
* _Open file in your VS Code to edit_
* _To edit but not make perminant changes, create a new branch using 'git branch [new-branch-name]'_
* _Switch to that branch and edit away by using 'git checkout [branch-you'd-like-to-change-to]'_
* _also you can view the website @ https://github.com/Semejae/beepboop.git

## known bugs
* _N/A_

## License
_refresh page if issues occur or conatact me a.gladden360@outlook.com_


_Copyright (c) 02/16/2022 Anthony Gladden_


