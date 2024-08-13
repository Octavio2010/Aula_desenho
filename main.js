function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    background("white")
}
function draw(){
    strokeWeight(12);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function limpar(){
    background("white")
}