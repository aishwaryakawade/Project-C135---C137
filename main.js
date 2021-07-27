video = "";

function preload()
{
    video = createCapture("video.mp4");
    video.hide();
}

function setup()
{
    canvas = createCanvas(400, 300);
    canvas.center();
}

function draw()
{
    image(image, 0, 0, 400, 300);
}