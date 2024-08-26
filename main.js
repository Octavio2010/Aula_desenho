var classifier = ""

function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
}

function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyCanvas)
    synth = window.speechSynthesis
}
function draw(){
    strokeWeight(12);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}
function classifyCanvas(){
    classifier.classify(canvas, gotResult)
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }
 else{
    console.log(results)
    var result = results[0].label
    document.getElementById("nome_esboco").innerHTML = "nome: " + result.replace("_", " ")
 }
}

function limpar(){
    background("white")
}