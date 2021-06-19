function preload(){

}

function setup(){
    canvas = createCanvas( 640 , 480);
    canvas.position(350,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function  draw(){
 image(video , 175 , 150 , 300 , 240);
 tint(tint_color);
 let c = color(255,0,0);
 fill(c);

 ellipse(30, 30, 70, 70);
 ellipse(30, 450, 70, 70);
 ellipse(610, 30, 70, 70);
 ellipse(610, 450, 70, 70);

 rect(65,20,510,20);
 rect(20,65,20,350);
 rect(600,65,20,350);
 rect(65,440,510,20);
}

function take_snapshot(){
    save("Filtered.png");
}

function filterTint(){
    tint_color = document.getElementById("color_name").value;
}