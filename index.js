let Openmenuitems = false;
let menuitems = document.getElementById("dropitems_maybe");
menuitems.hidden = true; 
function openmenuitems(){
Openmenuitems = !openmenuitems;
menuitems.hidden = !menuitems.hidden;
}
function openprofileenter(){
    window.open("enterinpr.html")
}