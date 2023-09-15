function Juliette() {
    const myJSON_participantes = ["Juliette", "33 anos", "3 de dezembro de 1989", "Campina Grande, Paraíba", "Advogada, maquiadora, cantora e empresária"];

    const array_participantes = JSON.parse(JSON.stringify(myJSON_participantes));

document.getElementById("informações").innerHTML =
    "<p>Nome: " + array_participantes[0] + "</p>" +
    "<p>Idade: " + array_participantes[1] + "</p>" + 
    "<p>Nascimento: " + array_participantes[2] + "</p>"+
    "<p>Local de Nascimento: " + array_participantes[3] + "</p>"+
    "<p>Profissão: " +  array_participantes[4] + "</p>" +
    "<p><img src='img/juliette-removebg-preview.png' alt='' "+ array_participantes[5] + "</p>"
}

function Gil() {
    const myJSON_participantes = ["Gil do Vigor", "32 anos", "22 de junho de 1991","Jaboatão dos Guararapes, Pernambuco", "Economista e celebridade de internet"];

    const array_participantes = JSON.parse(JSON.stringify(myJSON_participantes));

document.getElementById("informações").innerHTML =
    "<p>Nome: " + array_participantes[0] + "</p>" +
    "<p>Idade: " + array_participantes[1] + "</p>" + 
    "<p>Nascimento: " + array_participantes[2] + "</p>"+
    "<p>Local de Nascimento: " + array_participantes[3] + "</p>"+
    "<p>Profissão: " +  array_participantes[4] + "</p>" +
    "<p><img src='img/gildovigor-removebg-preview.png' alt='' " + array_participantes[5] + "</p>"
}


function Sarah() {
    const myJSON_participantes = ["Sarah", "32 anos", "14 de julho de 1991", "Brasília, Distrito Federal", "Empresária"];

    const array_participantes = JSON.parse(JSON.stringify(myJSON_participantes));

document.getElementById("informações").innerHTML =
    "<p>Nome: " + array_participantes[0] + "</p>" +
    "<p>Idade: " + array_participantes[1] + "</p>" + 
    "<p>Nascimento: " + array_participantes[2] + "</p>"+
    "<p>Local de Nascimento: " + array_participantes[3] + "</p>"+
    "<p>Profissão: " +  array_participantes[4] + "</p>"+
    "<p><img src='img/Sarah.png' alt='' " + array_participantes[5] + "</p>"
}

function ViihTube() {
    const myJSON_participantes = ["Viih Tube", "23 anos", "18 de agosto de 2000", "Socorocaba, São Paulo", "Atriz, youtuber e celebridade de internet"];

    const array_participantes = JSON.parse(JSON.stringify(myJSON_participantes));

document.getElementById("informações").innerHTML =
    "<p>Nome: " + array_participantes[0] + "</p>" +
    "<p>Idade: " + array_participantes[1] + "</p>" + 
    "<p>Nascimento: " + array_participantes[2] + "</p>"+
    "<p>Local de Nascimento: " + array_participantes[3] + "</p>"+
    "<p>Profissão: " +  array_participantes[4] + "</p>"+
    "<p><img src='img/viihtube-removebg-preview.png' alt='' " + array_participantes[5] + "</p>"
}

function KarolConka() {
    const myJSON_participantes = ["Karol Conká", "37 anos", "1 de janeiro de 1986", "Curitiba, Paraná", "Cantora, atriz, rapper, produtora, compositora"];
    const array_participantes = JSON.parse(JSON.stringify(myJSON_participantes));

document.getElementById("informações").innerHTML =
    "<p>Nome: " + array_participantes[0] + "</p>" +
    "<p>Idade: " + array_participantes[1] + "</p>" + 
    "<p>Nascimento: " + array_participantes[2] + "</p>"+
    "<p>Local de Nascimento: " + array_participantes[3] + "</p>"+
    "<p>Profissão: " +  array_participantes[4] + "</p>"+
    "<p><img src='img/karolconka-removebg-preview.png' alt='' " + array_participantes[5] + "</p>"
}

