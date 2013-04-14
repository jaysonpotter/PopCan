(function (PopCan) {
    'use strict';
// needs to be smarter like change on device orientation change and desktop resize

    var canvas,
        ctx,
        baseWidth,
        baseHeight,
        args;

    PopCan.play = function (yoCanvas, yoContext) {

        // Canvas selection, size, and context
        canvas = yoCanvas;
        ctx = yoContext || canvas.getContext('2d');

        // full viewport
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // store initial canvas size to use when scaling the canvas for high dpi
        baseWidth = canvas.width;
        baseHeight = canvas.height;

        // Pixel density info gathering and ratio makin
        var pixelRatio = window.devicePixelRatio || 1,
            backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
                                    ctx.mozBackingStorePixelRatio    ||
                                    ctx.msBackingStorePixelRatio     ||
                                    ctx.oBackingStorePixelRatio      ||
                                    ctx.backingStorePixelRatio       || 1,
            ratio = pixelRatio / backingStoreRatio;

        // If there are double or more pixels, scale the drawing times that ratio and stuff it back into the original dimensions
        if (pixelRatio > 1) {
            canvas.width = baseWidth * ratio;
            canvas.height = baseHeight * ratio;
            canvas.style.width = baseWidth + 'px';
            canvas.style.height = baseHeight + 'px';
            ctx.scale(ratio, ratio);
        }

        function clearCanvas() {
            // This resets the canvas to draw the next "frame"
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function draw() {
            clearCanvas();

            if (args) {
                var i = 0;
                while (i < args.length) {
                    args[i]();
                    i += 1;
                }
            }

        }

        //START Animation
        function animate() {
            draw();
            requestAnimFrame(animate);
        }

        if (canvas && ctx) {
            // requestAnim shim layer by Paul Irish <- Crafty devil
            window.requestAnimFrame = (function() {
                return window.requestAnimationFrame       || 
                       window.webkitRequestAnimationFrame || 
                       window.mozRequestAnimationFrame    || 
                       window.oRequestAnimationFrame      || 
                       window.msRequestAnimationFrame     || 
                       function (callback, element) {
                           window.setTimeout(callback, 1000 / 60);
                       };
            }()); // <-- tucked in the, as Crockford says it, dog balls

            animate();
        }

    }

    PopCan.drawings = function (drawThese) {
        args = arguments;
    }

}(window.PopCan = window.PopCan || {}));