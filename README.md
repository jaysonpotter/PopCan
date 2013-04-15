# PopCan
--------

This allows you to push drawings to your canvas and kick off the animation cycle. Why clutter your delicous code with 2d contexts, move to's, and bla bla bla's when you can just call uppon PopCan to get you started?


## Feature Overview

- Kicks off full screen canvas animations
- Accepts unlimited drawings via parameter


## Demo

*View a demo of [PopCan](http://projects.jaysonpotter.com/PopCan/)!*


# How to use PopCan

    window.onload = function () {
        
        // store canvas and context
        var canvas = document.getElementById('PopCan'),
            ctx = canvas.getContext('2d');

        // make a drawing
        var popCanDrawing = function () {
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect (10, 10, 55, 50);
        }

        if(canvas && ctx) {
            PopCan.play(canvas, ctx);
            PopCan.drawings(popCanDrawing);
        }
    }


## History

Sunday April 14, 2013
* The World Premier of PopCan
