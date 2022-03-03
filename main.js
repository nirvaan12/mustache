mustacheX =0;
mustacheY=0;
function preload() {
mustache = loadImage("https://clipground.com/images/transparent-mustache-clipart-7.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
   video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotResult);

}

function modelLoaded(){
    console.log("Posenet Is Initialized");

}

function gotResult(results){
    if(results.length>0){
    console.log(results);
    mustacheY=results[0].pose.upperLip.y-15;
    mustacheX=results[0].pose.upperLip.x-15;

    console.log("mustachex = "+mustacheX);
    console.log("mustachey ="+ mustacheY);
    }
}

function draw() {
image(video,0,0,300,300);
image(mustache,mustacheX,mustacheY,30,30)
}

function take_snapshot() {
    save("mustache.png");
}