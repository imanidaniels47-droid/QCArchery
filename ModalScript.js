
var modalButton = document.querySelectorAll('button.modalButton');

var modals = document.querySelectorAll('.modal');

var spans = document.getElementsByClassName("close");

for(var i = 0; i < modalButton.length; i++)
{
    modalButton[i].onclick = function(e)
    {
        e.preventDefault();
        modals = document.querySelector(e.target.getAttribute("href"));
        modals.style.display = "block";
    }
}

for(var i = 0; i < spans.length; i++)
{
    spans[i].onclick = function()
    {
        this.closest('.modal').style.display = "none";
    }
}

window.onclick = function(event){
    if(event.target.classList.contains('modal'))
    {
        event.target.style.display = "none";  
    }
}