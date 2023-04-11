# server-side-api
## Technology Used 

| Technology Used         | Resource URL            | 
| ------------- |:-------------:| 
| HTML    | [https://github.com/eogbeide424/server-side-api/blob/main/index.html]
| CSS     | [https://github.com/eogbeide424/server-side-api/tree/main/assets/CSS]
| Javascript | [https://github.com/eogbeide424/server-side-api/tree/main/assets/JS] 
   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    

## Description 

[Visit the Deployed Site]: [https://eogbeide424.github.io/server-side-api/]

On this particular project we had to access openweather.org API server and pull the data into our project 
-----
## Code Snippet
< // savBtn.on('click',function saveBtnHandler() {
  var timeBlock= $(this).closest('.time-block');
   var whatHour= timeBlock.attr('id');
  var text = textArea.val();
  var data = {
    hourId: whatHour,
    text : text,};
    
    console.log(data);
    console.log(text);


  
  localStorage.setItem("hourID",JSON.stringify(data));
});
----
 On the code above I basically set the event to save the information to the actual save button and passed the information to the local storage.
-----
## Troubles I faced
The biggest issue I faced that took most of my time to figure out was the fact that the button label didn't have a specific ID so I decided to target the attribute of aria-label, even though at first I thought that was reffering to a font type lol. My second issues was trying to target everything that interacted with the DOM in jquery so that the page could load before the script so no variable will come back undefined.
## Code Snippett

var savBtn= $('#hour-9').siblings().children('[aria-label="save"]');

var textArea = $('#hour-9').siblings().children('.description');
var hour = $('#hour- 9');
var stored="";
var today =dayjs().format('L LT');
console.log(savBtn);
console.log(textArea);
    
Side note: I realized 
## Author Info

```md
### Eugene Ogbeide


* [LinkedIn]https://www.linkedin.com/in/eugene-ogbeide-385087219/
* [Github](https://github.com/eogbeide424?tab=repositories)
```
## Credits

https://api.jquery.com/contents/#example-0
https://www.w3schools.com/jsref/prop_node_nodetype.asp
https://api.jquery.com/category/manipulation/style-properties/
---https://www.w3schools.com/js/js_htmldom_eventlistener.asp
https://day.js.org/docs/en/display/format
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
https://day.js.org/docs/en/display/calendar-time

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.