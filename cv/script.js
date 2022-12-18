let menuVisible = false;
//funcion que oculta o muestra el menu
function showHideMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList ="";    
        menuVisible=false;   
    }else{
        document.getElementById("nav").classList="responsive"
        menuVisible=true;
    }
}

function select(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//Funcion que aplica las animaciones de las habilidades
function sKillsEffect(){
    var skills=document.getElementById("skills");
    var skills_distance=window.innerHeight-skills.getBoundingClientRect().top;
    if (skills_distance>=300) {
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("cSharp");      
        skills[1].classList.add("javascript");      
        skills[2].classList.add("htmlCss");      
        skills[3].classList.add("unity");      
        skills[4].classList.add("gitGithub");      
        skills[5].classList.add("photoshop");      
        skills[6].classList.add("adobeIllustrator");      
        skills[7].classList.add("toonBoon");      
        skills[8].classList.add("english");      
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll=function(){
    sKillsEffect();
}