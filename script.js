function mostrarAdicaoLivros() {
    const aside = document.getElementsByTagName("aside")[0]
    if (aside.style.display == "none") {
        aside.style.display = "block"
    } else {
        aside.style.display = "none"
    }
}   