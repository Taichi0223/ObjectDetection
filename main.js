var img = "";
var objects = [];
var my_status = "";
function setup(){

    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    
}

function preload(){
    img = loadImage('IMG_7231.JPG');
}
  

function draw(){


    image(img,0,0,640,420);

    if (my_status == "true"){

        for(i = 0; i < objects.length; i++)
        {
            fill("#8f52eb");
            //text("text", x_pos, y_pos);
            text(objects[i].label, objects[i].x, objects[i].y);
            noFill();
            stroke("#e0b816");
            //rect(x_pos, y_pos, width, height);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

        /* 
        fill("#8f52eb");
        text("text  ")
        
        */
       console.log(objects);
    }
    
}


function modelLoaded(){
    console.log("cocoSSD initialized");

    my_status = "true";
    document.getElementById("status").innerHTML = "Status : Model is loaded";
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        objects = results;
    }
}