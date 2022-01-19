
//Notas de Matemática / Math Notes
function mat() {
    let mat1 = document.getElementById('mat1');
    let mat2 = document.getElementById('mat2');
    let mediaMat = document.getElementById('mediaMat');
    let mate1 = window.prompt("Qual é a sua primeira nota de Matemática? ");
    let mate2 = window.prompt("Qual é a sua segunda nota de Matemática? ");   
    mat1.innerHTML = Number(mate1)
    mat2.innerHTML = Number(mate2)
    let math1 = Number(mate1)
    let math2 = Number(mate2)
    let media = (math1 + math2) / 2
    mediaMat.innerHTML = media
}
mat()

//Notas de Física / Physics Notes
function fis() {
    let fis1 = document.getElementById('fis1');
    let fis2 = document.getElementById('fis2');
    let mediaFis = document.getElementById('mediaFis');
    let fisi1 = window.prompt("Qual é a sua primeira nota de Física? ");
    let fisi2 = window.prompt("Qual é a sua segunda nota de Física? ");   
    fis1.innerHTML = Number(fisi1)
    fis2.innerHTML = Number(fisi2)
    let fisic1 = Number(fisi1)
    let fisic2 = Number(fisi2)
    let media = (fisic1 + fisic2) / 2
    mediaFis.innerHTML = media
}
fis()

//Notas de Química / Chemistry Notes
function qui() {
    let qui1 = document.getElementById('qui1');
    let qui2 = document.getElementById('qui2');
    let mediaQui = document.getElementById('mediaQui');
    let quim1 = window.prompt("Qual é a sua primeira nota de Química? ");
    let quim2 = window.prompt("Qual é a sua segunda nota de Química? ");   
    qui1.innerHTML = Number(quim1)
    qui2.innerHTML = Number(quim2)
    let quimi1 = Number(quim1)
    let quimi2 = Number(quim2)
    let media = (quimi1 + quimi2) / 2
    mediaQui.innerHTML = media
}
qui()

//Notas de Biologia / Biology Notes
function bio() {
    let bio1 = document.getElementById('bio1');
    let bio2 = document.getElementById('bio2');
    let mediaBio = document.getElementById('mediaBio');
    let biol1 = window.prompt("Qual é a sua primeira nota de Biologia? ");
    let biol2 = window.prompt("Qual é a sua segunda nota de Biologia? ");   
    bio1.innerHTML = Number(biol1)
    bio2.innerHTML = Number(biol2)
    let biolo1 = Number(biol1)
    let biolo2 = Number(biol2)
    let media = (biolo1 + biolo2) / 2
    mediaBio.innerHTML = media
}
bio()

//Notas de História / History Notes
function his() {
    let his1 = document.getElementById('his1');
    let his2 = document.getElementById('his2');
    let mediaHis = document.getElementById('mediaHis');
    let hist1 = window.prompt("Qual é a sua primeira nota de História? ");
    let hist2 = window.prompt("Qual é a sua segunda nota de História? ");   
    his1.innerHTML = Number(hist1)
    his2.innerHTML = Number(hist2)
    let histo1 = Number(hist1)
    let histo2 = Number(hist2)
    let media = (histo1 + histo2) / 2
    mediaHis.innerHTML = media
}
his()

//Notas de Geografia / Geography Notes
function geo() {
    let geo1 = document.getElementById('geo1');
    let geo2 = document.getElementById('geo2');
    let mediaGeo = document.getElementById('mediaGeo');
    let geog1 = window.prompt("Qual é a sua primeira nota de Geografia? ");
    let geog2 = window.prompt("Qual é a sua segunda nota de Geografia? ");   
    geo1.innerHTML = Number(geog1)
    geo2.innerHTML = Number(geog2)
    let geogr1 = Number(geog1)
    let geogr2 = Number(geog2)
    let media = (geogr1 + geogr2) / 2
    mediaGeo.innerHTML = media
}
geo()