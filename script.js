var ver = document.getElementById('ver-mais');

ver.addEventListener("click", function () {
    var estilos = document.getElementById("estilos-div2")

    if (estilos.style.display === "flex") {
        estilos.style.display = "none";
        ver.innerHTML = `<span class="button_top">
                            VER MAIS!
                        </span>`
    }
    else {
        estilos.style.display = "flex";
        ver.innerHTML = `<span class="button_top">
                            VER MENOS
                        </span>`
    }
});