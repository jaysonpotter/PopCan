(function (PopCan) {
    'use strict';

    var canvas,
        ctx,
        baseWidth,
        baseHeight,
        args,
        delayThis = (function () {
    		var timer = 0;
    
    		return function (callback, ms) {
    			clearTimeout(timer);
    			timer = setTimeout(callback, ms || 2000);
    		};
    	}());

    PopCan.play = function (yoCanvas, yoContext) {

        // Canvas selection, size, and context
        canvas = yoCanvas;
        ctx = yoContext || canvas.getContext('2d');

        // full viewport
        // really shoud be optional
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // store initial canvas size to use when scaling the canvas for high dpi
        baseWidth = canvas.width;
        baseHeight = canvas.height;

        function setPixelDensity() {
            // Pixel density info gathering and ratio makin
            var pixelRatio = window.devicePixelRatio || 1,
                backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
                                    ctx.mozBackingStorePixelRatio    ||
                                    ctx.msBackingStorePixelRatio     ||
                                    ctx.oBackingStorePixelRatio      ||
                                    ctx.backingStorePixelRatio       || 1,
                ratio = pixelRatio / backingStoreRatio;
                
            canvas.width = baseWidth * ratio;
            canvas.height = baseHeight * ratio;
            canvas.style.width = baseWidth + 'px';
            canvas.style.height = baseHeight + 'px';
            
            ctx.scale(ratio, ratio);
        }
        
        function adjustOnResize() {
        	canvas.width = window.innerWidth;
        	canvas.height = window.innerHeight;
        	baseWidth = canvas.width;
        	baseHeight = canvas.height;

        	setPixelDensity();
        }

        function clearCanvas() {
            // Try and optimise this to only redraw changed areas
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

        function animate() {
            draw();
            requestAnimFrame(animate);
        }

        if (canvas && ctx) {
            setPixelDensity();
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

        window.addEventListener("resize", function(){
            delayThis(adjustOnResize, 100);
        }, false);
        
    };

    PopCan.drawings = function (drawThese) {
        args = arguments;
    };

    PopCan.gimmie = {
        baseheight: function () {
            return baseHeight;
        },
        basewidth: function () {
            return baseWidth;
        }
    };
    
}(window.PopCan = window.PopCan || {}));