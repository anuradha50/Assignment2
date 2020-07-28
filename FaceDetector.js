let outputWidth;
let outputHeight;

let faceTracker;// Face Tracking
let videoInput;

let imgSpidermanMask; // Spiderman Mask Filter
let imgDogEarRight,imgDogearLeft, imgDognose;// Dog Face filter

let selected = -1; //Default no filter

/*
* **p5.js** library automatically executes the 
'prelad()' function. Basically, it is used to load external
files. in our case, we'll use it to load the images for our filters 
and assign them to seperate variables for later use.
*/

function preload()
{
    //Spiderman mask Filter asset
    imageSpidermanMask = loadImage("http://i.ibb.co/9HB2sSv/spiderman-mask-1.png");
    
    // Dog Face Filter assets
    imgDogEarRight = loadImage("http://i.ibb.co/bFJf33z/dog-ear-right.png");
    imgDogEarLeft =
    loadImage("http://i.ibb.co/dggwZ1q/dog-ear-left.png");
    imgDogNose = 
    loadImage("http://i.ibb.co/PWYGkw1/dog-nose.png");
     
}

/**
* In p5.js, 'setup()' function is executed at the begining of our program, but after the 
'preload()' function.
*/

function setup()
{
    const maxWidth= Math.min(windowwidth,windowHeight);
    pixelDensity(1);
    outputWidth = maxWidth;
    outputHeight = maxWidth * 075; //4:3

    CreateCanvas(outputWidth,outputHeight);

    // webcam capture
    videoInput = createCapture(VIDEO);
    videoInput.size(outputWidth,outputHeight);
    videoInput.hide();

    // select filter
    const sel = createSelect();
    const selectList = ['Spiderman Mask','Dog Filter']; //List of filters
    sel.option('select Filter',-1);// Default no filter
    for (let i = 0; i < Selectlist.length; i++)
    {
        sel.option(selectList[i],i);
    }
    sel.changed(applyfilter);

    // tracker 
    faceTracker = new clm.tracker();
    faceTracker.init();
    faceTracker.start(videoInput.elt);
}

// callback function
function applyfilter()
{
    selected = this.selected; // change filter type
}

/* In p5.js draw() function is executed after setup().
This function runs inside a loop until the program 
is stopped.
*/

function draw()
