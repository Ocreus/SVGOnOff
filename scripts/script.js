const btn = document.querySelectorAll("button");

for(let i = 0; i<btn.length; i++)
    btn[i].addEventListener("click", swape);

function swape(){
    document.getElementById(this.value).classList.toggle("hidden");
}

