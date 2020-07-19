# Animated Magic Cards
This content contains an example of letters (in the best card game style) applied within an html context.
Feel free to use this in your personal projects, be it a simple page or some digital game interface via the browser.

## HTML structure
For this content to be useful, some HTML elements must be placed within a specific structure. You will notice that not all elements are mandatory depending on how you are going to use the cards on your web site.
```html
<div class="magic-card-container">
    <div class="card-shadow"></div>

    <div class="magic-card" style="background-image: url(assets/card.jpg);">
        <div class="glow"></div>
    </div>

    <div class="magic-card-back" style="background-image: url(assets/back.jpg);">
        <div class="glow"></div>
    </div> 
</div>
```
With the help of our css this will create a playing card 240px high by 160px wide.

## CSS
To enable this CSS template in your project, insert the line below in the header of the html file.
```html
<link rel="stylesheet" href="css/magic-card.css" />
```

For the CSS to work properly, use the html structure described in the previous section as a basis.

Some class names can be added to add realism to the project. Others add animations that will make your interface much more attractive.
All of these class names must be added to the magic-card-container.
| Class Names | Efect |
| --- | --- |
| **animated** | Causes the card to lift up smoothly when the mouse is passed over it. |
| **fliped** | Causes the back of the card to be displayed. |
| **flip** | Triggers an animation when the object is rendered by the browser causing the card to turn itself. |
| **flip-over** | Triggers an animation when the object is rendered by the browser causing the card to turn itself off. |
| **turning** | Make the card rotate in a loop. |

> Note: You can combine the animated effect with flip, flip-over and fliped.

The example below shows application of some of these class names.
```html
<div class="magic-card-container flip-over animated">
    <div class="card-shadow"></div>

    <div class="magic-card" style="background-image: url(assets/card.jpg);">
        <div class="glow"></div>
    </div>

    <div class="magic-card-back" style="background-image: url(assets/back.jpg);">
        <div class="glow"></div>
    </div> 
</div>
```

## JS
The javascript file contains only one function. Use it only if you need to flip the card from an event triggered by the user.

Avoid using functions to add or remove class names if you simply want to cause the card to be flipped by an event triggered by the user. Animations in css are only triggered when the object is first rendered in the browser. Changing class names at run time should not trigger any animation. This can be frustrating.

So we created a function in javascript to solve this problem. To enable this function in your project, insert the line below at the end of your html file, before closing the body tag. No other dependencies are required.
```html
<script type="text/javascript" src="js/maigc-card.js" ></script>
```
The flipMe function is now available in your project. This function receives as parameter the DOM element that must be rotated, and a callback function that will be called up when the animation ends. The simplest way to use this function is directly in the click event of the container element.
```html
<div class="magic-card-container animated fliped" onClick="flipMe(this);">
    ...
</div>
```
| Function | Parameters | Description |
| --- | --- | --- |
| flipMe | DOM element, callback function | - |
