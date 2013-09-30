# PopCan
--------

This allows you to push drawings to a canvas and kick off the animation cycle.

* Author: Jayson Potter (c) 2013
* License: CC BY-SA 3.0


## Demo

*View a demo of [PopCan](http://projects.jaysonpotter.com/PopCan/)!*
*Advanced usage of PopCan ... [JoiStyk](http://projects.jaysonpotter.com/JoiStyk/)!*


## Feature Overview

- Kicks off full viewport canvas animations by passing in your canvas and drawing context; like so PopCan.play(yourCanvas, yourContext)
- Accepts unlimited drawings as functions via parameter; like so PopCan.drawings(drawThis, andThis, thenThis, andMore)
- Adapts the canvas for hi-resolution displays
- exposes the canvas style dimensions that PopCan sets
- Starts animation loop


# How to use PopCan

```html
<canvas id="PopCan">
	<p>Awe Snap! Your browser does not support canvas, thus not able to support PopCan.</p>
	<p>For that I am sorry, but you may be in luck by upgrading your browser.</p>
	<a href="http://browsehappy.com/">browsehappy.com</a>
</canvas>
```

```css
body,
#PopCan {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
```

```javascript
window.onload = function () {
    
    // store canvas and context
    var canvas = document.getElementById('PopCan'),
        ctx = canvas.getContext('2d'),

    // stored drawing in an anonymous function variable
    // not limited to this method. see JoiStyk demo.
        lilBox = function () {
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect (10, 10, 55, 50);
        };

    if(canvas && ctx) {
    
        // tell PopCan where to draw
        PopCan.play(canvas, ctx);
        
        // tell PopCan what to draw
        PopCan.drawings(lilBox);
    }
}
```

## World Premier of PopCan

Sunday April 14, 2013
