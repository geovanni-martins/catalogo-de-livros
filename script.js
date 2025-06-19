function mostrarAdicaoLivrosTelasPequenas() {
    const aside = document.getElementsByTagName("aside")[0]
    if (aside.style.display == "none") {
        aside.style.display = "block"
    } else {
        aside.style.display = "none"
    }
}  

function mostrarAdicaoLivrosTelasMaiores() {
    let setaRight = document.getElementById("setaRight")
    let setaLeft = document.getElementById("setaLeft")
    const aside = document.getElementsByTagName("aside")[0]
    
    if (aside.style.display == "none") {
        aside.style.display = "block"
        setaRight.style.display = "none"
        setaLeft.style.display = "block"
    } else {
        aside.style.display = "none"
        setaLeft.style.display = "none"
        setaRight.style.display = "block"
    }
}