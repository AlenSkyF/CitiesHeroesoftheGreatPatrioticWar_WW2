 function search2() {
var textToFind = localStorage.getItem("search");
if(textToFind != null)
{
document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<span name="+textToFind+" style=' background:blue;'>"+textToFind+"</span>");
localStorage.removeItem("search");
}
}

function search() {
var ix = 1;
while(ix<40)
{

 var header = document.querySelector('.texxt p:nth-child('+ix+')');
if(header!=null)
{
  var word = localStorage.getItem("search");
    regexp = new RegExp(word, 'i');
 
    var reg = new RegExp(word, 'g');
    header.innerHTML = header.innerHTML.replace(reg, '<span style="font-weight: bold; background:pink;">' + word + '</span>');
 } 
ix = ix+1;
}
ix=1;
while(ix<40)
{

 var header = document.querySelector('.texxt p:nth-child('+ix+')');
if(header!=null)
{
  var word = localStorage.getItem("search2");
    regexp = new RegExp(word, 'i');
 
    var reg = new RegExp(word, 'g');
    header.innerHTML = header.innerHTML.replace(reg, '<span style="font-weight: bold; background:pink;">' + word + '</span>');
 } 
ix = ix+1;
}






 

localStorage.removeItem("search");
localStorage.removeItem("search2");

}