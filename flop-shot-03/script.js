let container = document.querySelector("#container");
let textarea = document.querySelector("#textarea");

let isVowel = function (key) {
  if (key === 'a' || key === 'e' || key === 'i' || key === 'o' || key === 'u'){
    return true;
  }
  return false;
}

container.addEventListener("keydown", function (event){
  container.querySelector("h1").textContent += event.key;
});

textarea.addEventListener('keydown', function(event){
  
  
  let key = event.key;
  vowel =isVowel(key);

  if(vowel === false){
    event.stopPropagation();
  }
  


  //using your knowledge  of event bubbling 
  //how can we  ensure only vowels are added to our h1 text content?
})

/*
the helper function was already defined, using event bubbling inside the text area,
we can define an instance of key, and pass that thought to a variable (named vowel, assigned to the function that takes the key);
as the function returns false for every other event other than the vowels stipulated above.
if false, we stop the bubbling to halt the rendering of letters that are not vowels.
*/