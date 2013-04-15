# PopCan
--------

This allows you to push drawings to your canvas and kick off the animation cycle.


## Feature Overview

- Kicks off full screen canvas animations by passing in your canvas and drawing context; like so PopCan.play(yourCanvas, yourContext)
- Accepts unlimited drawings as functions via parameter; like so PopCan.drawings(drawThis, andThis, thenThis, andMore)
- Adapts the canvas for hi-resolution displays


## In Development 
- fix issue with iPad with hi-res screen in landscape. In portrait it works fine. 
- fix issue to resize canvas when orientation has changed, or viewport size changes.


## Demo

*View a demo of [PopCan](http://projects.jaysonpotter.com/PopCan/)!*


# How to use PopCan

    window.onload = function () {
        
        // store canvas and context
        var canvas = document.getElementById('PopCan'),
            ctx = canvas.getContext('2d');

        // make a drawing a function
        var popCanDrawing = function () {
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect (10, 10, 55, 50);
        }

        if(canvas && ctx) {
            // 
            PopCan.play(canvas, ctx);
            PopCan.drawings(popCanDrawing);
        }
    }


## History

Sunday April 14, 2013
* The World Premier of PopCan
