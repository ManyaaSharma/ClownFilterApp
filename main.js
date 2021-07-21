noseX=0;
noseY=0;

function preload(){
 clown_nose=loadImage("https://i.postimg.cc/qMCKWrYt/3641-sticker-of-clown-nose.jpg");
}
function setup(){
 canvas=createCanvas(300,300);
 canvas.center();
 video=createCapture(VIDEO);
 video.size(300,300);
 video.hide();
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',got_poses);
}
function draw(){
 image(video,0,0,300,300)
 circle(noseX,noseY,20);
 console.log(noseX);
 console.log(noseY);
 
}
function take_snapshot(){
    save('selfie.png');
}

function modelLoaded(){
    console.log("poseNet is initialized")
}

function got_poses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose X="+results[0].pose.nose.x);
        console.log("nose Y="+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        fill(156, 3, 3);
        stroke(255,0,0)
        }
}