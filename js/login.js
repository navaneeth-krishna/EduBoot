function login(){
var name = document.getElementById('username').value;
alert(name);
window.localStorage.setItem("name",name)
}
