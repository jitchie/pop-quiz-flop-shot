// what 3 ways can we select paragraph 6

    var p6_1 = document.querySelector('#find-me');
    var p6_2 = document.body.children[1].children[2];
    var p6_3 = document.querySelectorAll('p');
    p6_3 = p6_3[5];


if ( p6_1 ===  p6_2 &&  p6_1 ===  p6_3){
  alert("you found me :)")
}

/* p6_1 used css selector and querySelector method to assign

p6_2 used classic DOM tranversal for assignment, the body had 2 children, as querys return 0 based
indexed arrays the 2nd child of the body element is position 1, the nested paragraphs within the parent node require a children call again
paragraph 6 was the 3rd element(index of 2)

p6_3 used query select all, returning and array with paragraph 6 at an index of 5 
*/