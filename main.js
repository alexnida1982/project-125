function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(600, 500)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotposes()
{
    gotposes(600, 500);
    
    if (results > 0) {
        leftwristx - rightwristx
    }
}


function draw() 
{
    background("blue");
    textsize(5);
    fill(255, 204, 0);
    text('Abem', 50, 50);
}
