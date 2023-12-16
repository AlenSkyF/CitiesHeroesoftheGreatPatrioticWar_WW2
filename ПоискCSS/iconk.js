function putsearch() {
var obj = window.document.getElementById("Поиск");
obj.value = obj.value.replace( /^\s+/g, '');
obj.value = obj.value.replace( /\s+$/g, '');

if(obj.value!="")
{
localStorage.setItem("searchkey",obj.value);
obj.value = "";
 document.location.href = "Поиск.html";
}
else
{
alert ("Вы ничего не ввели для поиска");
}
}

function prsearch() {
var word = localStorage.getItem("searchkey");

var obj = window.document.getElementById("text-to-find");
obj.value = word;
localStorage.removeItem("searchkey");
}
