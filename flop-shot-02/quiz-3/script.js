// how do we set this timer to trigger every minute?

setInterval(function(){
alert("now wait just a minute...")
},60000) //<--- add milliseconds here 


/*
setInterval() takes two params, the first being a function with a function 
body, or block of code that will execute.
The second param seperated by a comma is the time you wish to execute the interval
in milliseconds. 

additionally, we can set interval inside a function to a varible, so we can call  clearInterval and exit
an infinite loop.(either after a set period of time, or once conditons are met)
*/