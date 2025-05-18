let add = document.getElementById("add");
let reset = document.getElementById("reset");
let sub = document.getElementById("sub");
let counter = document.getElementById("cound");
let cound = 0;

add.onclick = function(){
  cound ++;
  counter.textContent = cound;
}
reset.onclick = function(){
  cound = 0;
  counter.textContent = cound;
}
sub.onclick = function(){
  cound --;
  counter.textContent = cound;
}