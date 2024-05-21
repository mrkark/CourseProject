let container = document.querySelectorAll('.container')[0];
let header = document.getElementsByTagName('header')[0];
let main = document.getElementsByTagName('main')[0];

let totalHeight = header.offsetHeight + container.offsetHeight;
main.style.height = totalHeight + 'px';
