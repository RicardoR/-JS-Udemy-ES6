/*Using Default Arguments*/

/*Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.*/

function sum(a = 0, b = 0) {
  return a + b;
}

sum();


/*Dumping Unused Code*/

/*Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.*/
function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}

addOffset();