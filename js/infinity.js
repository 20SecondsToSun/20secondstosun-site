function renderSketch()
{
    var mainCanvas = document.getElementById('infinity');
    var mainContext = mainCanvas.getContext('2d');

    var canvasWidth = mainCanvas.width;
    var canvasHeight = mainCanvas.height;

    var angle = 0;

    var requestAnimationFrame = window.requestAnimationFrame ||
                                window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame;


    var frameCount = 1;

    // Converts from degrees to radians.
    Math.radians = function (degrees) {
        return degrees * Math.PI / 180;
    };

    // Converts from radians to degrees.
    Math.degrees = function (radians) {
        return radians * 180 / Math.PI;
    };

    function drawCircle() {
        mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

        // color in the background
        mainContext.fillStyle = "#f5f3e4";
        mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

        var k = 0;
        var val = 2;
        for (var i = -90; i < 90; i++)
        {
            var q =1;         
            var x = Math.sin(Math.radians(i + frameCount * val)) * 170;
            var y = Math.sin(Math.radians(i + frameCount * val)) * Math.cos(Math.radians(i + frameCount * val)) * 105;
            var s = k * q * 0.04;
            k+=1;          

            mainContext.beginPath();
            mainContext.arc(canvasWidth * 0.5 + x * q, canvasHeight * 0.5 + y * q, s, 0, Math.PI * 2, false);
            mainContext.closePath();

            // color in the circle
            mainContext.fillStyle = "#000000";
            mainContext.fill();    
        }

        frameCount++;

        requestAnimationFrame(drawCircle);
    }

  


    drawCircle();
}
