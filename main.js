nosex=0;
nosey=0;
difference=0;

function setup()
{
    canvas = createCanvas(550 , 500);
    video =createCapture(VIDEO);
    video.size(550,500);
    canvas.position(600,110);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() 
{
    console.log("poseNet is Initialized !!")
}

function draw()
{
    background("#ff69b4");
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    fill("#dc143c");
    stroke("#dc143c");
    square(nosex , nosey , difference);

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = Math.floor(leftWristX-rightWristX);
        console.log(difference);
    }
}