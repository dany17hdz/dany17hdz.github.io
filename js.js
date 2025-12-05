let llave = document.getElementById("llave");
let llavetrue = "contraseña"

let button = document.getElementById("button");
button.addEventListener("click", function() {
    
    if (llave === llavetrue) {
        window.location.href="pagina.html";   
    }else{
        window.location.href = "dos.webp";
    }})
;
