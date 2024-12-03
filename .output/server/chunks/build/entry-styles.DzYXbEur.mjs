const a=["/*!\n * animate.css - https://animate.style/\n * Version - 4.1.1\n * Licensed under the Hippocratic License 2.1 - http://firstdonoharm.dev\n *\n * Copyright (c) 2022 Animate.css\n */:root{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.animate__animated{animation-duration:1s;animation-duration:var(--animate-duration);animation-fill-mode:both}.animate__animated.animate__infinite{animation-iteration-count:infinite}.animate__animated.animate__repeat-1{animation-iteration-count:1;animation-iteration-count:var(--animate-repeat)}.animate__animated.animate__repeat-2{animation-iteration-count:2;animation-iteration-count:calc(var(--animate-repeat)*2)}.animate__animated.animate__repeat-3{animation-iteration-count:3;animation-iteration-count:calc(var(--animate-repeat)*3)}.animate__animated.animate__delay-1s{animation-delay:1s;animation-delay:var(--animate-delay)}.animate__animated.animate__delay-2s{animation-delay:2s;animation-delay:calc(var(--animate-delay)*2)}.animate__animated.animate__delay-3s{animation-delay:3s;animation-delay:calc(var(--animate-delay)*3)}.animate__animated.animate__delay-4s{animation-delay:4s;animation-delay:calc(var(--animate-delay)*4)}.animate__animated.animate__delay-5s{animation-delay:5s;animation-delay:calc(var(--animate-delay)*5)}.animate__animated.animate__faster{animation-duration:.5s;animation-duration:calc(var(--animate-duration)/2)}.animate__animated.animate__fast{animation-duration:.8s;animation-duration:calc(var(--animate-duration)*.8)}.animate__animated.animate__slow{animation-duration:2s;animation-duration:calc(var(--animate-duration)*2)}.animate__animated.animate__slower{animation-duration:3s;animation-duration:calc(var(--animate-duration)*3)}@media (prefers-reduced-motion:reduce),print{.animate__animated{animation-duration:1ms!important;animation-iteration-count:1!important;transition-duration:1ms!important}.animate__animated[class*=Out]{opacity:0}}@keyframes bounce{0%,20%,53%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{transform:translateZ(0) scaleY(.95);transition-timing-function:cubic-bezier(.215,.61,.355,1)}90%{transform:translate3d(0,-4px,0) scaleY(1.02)}}.animate__bounce{animation-name:bounce;transform-origin:center bottom}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.animate__flash{animation-name:flash}@keyframes pulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}.animate__pulse{animation-name:pulse;animation-timing-function:ease-in-out}@keyframes rubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}.animate__rubberBand{animation-name:rubberBand}@keyframes shakeX{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}.animate__shakeX{animation-name:shakeX}@keyframes shakeY{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)}20%,40%,60%,80%{transform:translate3d(0,10px,0)}}.animate__shakeY{animation-name:shakeY}@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}.animate__headShake{animation-name:headShake;animation-timing-function:ease-in-out}@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}.animate__swing{animation-name:swing;transform-origin:top center}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}.animate__tada{animation-name:tada}@keyframes wobble{0%{transform:translateZ(0)}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:translateZ(0)}}.animate__wobble{animation-name:wobble}@keyframes jello{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animate__jello{animation-name:jello;transform-origin:center}@keyframes heartBeat{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}.animate__heartBeat{animation-duration:1.3s;animation-duration:calc(var(--animate-duration)*1.3);animation-name:heartBeat;animation-timing-function:ease-in-out}@keyframes backInDown{0%{opacity:.7;transform:translateY(-1200px) scale(.7)}80%{opacity:.7;transform:translateY(0) scale(.7)}to{opacity:1;transform:scale(1)}}.animate__backInDown{animation-name:backInDown}@keyframes backInLeft{0%{opacity:.7;transform:translateX(-2000px) scale(.7)}80%{opacity:.7;transform:translateX(0) scale(.7)}to{opacity:1;transform:scale(1)}}.animate__backInLeft{animation-name:backInLeft}@keyframes backInRight{0%{opacity:.7;transform:translateX(2000px) scale(.7)}80%{opacity:.7;transform:translateX(0) scale(.7)}to{opacity:1;transform:scale(1)}}.animate__backInRight{animation-name:backInRight}@keyframes backInUp{0%{opacity:.7;transform:translateY(1200px) scale(.7)}80%{opacity:.7;transform:translateY(0) scale(.7)}to{opacity:1;transform:scale(1)}}.animate__backInUp{animation-name:backInUp}@keyframes backOutDown{0%{opacity:1;transform:scale(1)}20%{opacity:.7;transform:translateY(0) scale(.7)}to{opacity:.7;transform:translateY(700px) scale(.7)}}.animate__backOutDown{animation-name:backOutDown}@keyframes backOutLeft{0%{opacity:1;transform:scale(1)}20%{opacity:.7;transform:translateX(0) scale(.7)}to{opacity:.7;transform:translateX(-2000px) scale(.7)}}.animate__backOutLeft{animation-name:backOutLeft}@keyframes backOutRight{0%{opacity:1;transform:scale(1)}20%{opacity:.7;transform:translateX(0) scale(.7)}to{opacity:.7;transform:translateX(2000px) scale(.7)}}.animate__backOutRight{animation-name:backOutRight}@keyframes backOutUp{0%{opacity:1;transform:scale(1)}20%{opacity:.7;transform:translateY(0) scale(.7)}to{opacity:.7;transform:translateY(-700px) scale(.7)}}.animate__backOutUp{animation-name:backOutUp}@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.animate__bounceIn{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*.75);animation-name:bounceIn}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;transform:translate3d(0,25px,0) scaleY(.9)}75%{transform:translate3d(0,-10px,0) scaleY(.95)}90%{transform:translate3d(0,5px,0) scaleY(.985)}to{transform:translateZ(0)}}.animate__bounceInDown{animation-name:bounceInDown}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(25px,0,0) scaleX(1)}75%{transform:translate3d(-10px,0,0) scaleX(.98)}90%{transform:translate3d(5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}.animate__bounceInLeft{animation-name:bounceInLeft}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(-25px,0,0) scaleX(1)}75%{transform:translate3d(10px,0,0) scaleX(.98)}90%{transform:translate3d(-5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}.animate__bounceInRight{animation-name:bounceInRight}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}75%{transform:translate3d(0,10px,0) scaleY(.95)}90%{transform:translate3d(0,-5px,0) scaleY(.985)}to{transform:translateZ(0)}}.animate__bounceInUp{animation-name:bounceInUp}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}.animate__bounceOut{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*.75);animation-name:bounceOut}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,2000px,0) scaleY(3)}}.animate__bounceOutDown{animation-name:bounceOutDown}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(-2000px,0,0) scaleX(2)}}.animate__bounceOutLeft{animation-name:bounceOutLeft}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(2000px,0,0) scaleX(2)}}.animate__bounceOutRight{animation-name:bounceOutRight}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,-2000px,0) scaleY(3)}}.animate__bounceOutUp{animation-name:bounceOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.animate__fadeIn{animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInDown{animation-name:fadeInDown}@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInDownBig{animation-name:fadeInDownBig}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInLeftBig{animation-name:fadeInLeftBig}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInRight{animation-name:fadeInRight}@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInRightBig{animation-name:fadeInRightBig}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInUp{animation-name:fadeInUp}@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInUpBig{animation-name:fadeInUpBig}@keyframes fadeInTopLeft{0%{opacity:0;transform:translate3d(-100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInTopLeft{animation-name:fadeInTopLeft}@keyframes fadeInTopRight{0%{opacity:0;transform:translate3d(100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInTopRight{animation-name:fadeInTopRight}@keyframes fadeInBottomLeft{0%{opacity:0;transform:translate3d(-100%,100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInBottomLeft{animation-name:fadeInBottomLeft}@keyframes fadeInBottomRight{0%{opacity:0;transform:translate3d(100%,100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInBottomRight{animation-name:fadeInBottomRight}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animate__fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}.animate__fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}.animate__fadeOutDownBig{animation-name:fadeOutDownBig}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}.animate__fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}.animate__fadeOutLeftBig{animation-name:fadeOutLeftBig}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}.animate__fadeOutRight{animation-name:fadeOutRight}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}.animate__fadeOutRightBig{animation-name:fadeOutRightBig}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}.animate__fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}.animate__fadeOutUpBig{animation-name:fadeOutUpBig}@keyframes fadeOutTopLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,-100%,0)}}.animate__fadeOutTopLeft{animation-name:fadeOutTopLeft}@keyframes fadeOutTopRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,-100%,0)}}.animate__fadeOutTopRight{animation-name:fadeOutTopRight}@keyframes fadeOutBottomRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,100%,0)}}.animate__fadeOutBottomRight{animation-name:fadeOutBottomRight}@keyframes fadeOutBottomLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,100%,0)}}.animate__fadeOutBottomLeft{animation-name:fadeOutBottomLeft}@keyframes flip{0%{animation-timing-function:ease-out;transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)}40%{animation-timing-function:ease-out;transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)}50%{animation-timing-function:ease-in;transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)}80%{animation-timing-function:ease-in;transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)}to{animation-timing-function:ease-in;transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)}}.animate__animated.animate__flip{animation-name:flip;backface-visibility:visible}@keyframes flipInX{0%{animation-timing-function:ease-in;opacity:0;transform:perspective(400px) rotateX(90deg)}40%{animation-timing-function:ease-in;transform:perspective(400px) rotateX(-20deg)}60%{opacity:1;transform:perspective(400px) rotateX(10deg)}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}.animate__flipInX{animation-name:flipInX;backface-visibility:visible!important}@keyframes flipInY{0%{animation-timing-function:ease-in;opacity:0;transform:perspective(400px) rotateY(90deg)}40%{animation-timing-function:ease-in;transform:perspective(400px) rotateY(-20deg)}60%{opacity:1;transform:perspective(400px) rotateY(10deg)}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}.animate__flipInY{animation-name:flipInY;backface-visibility:visible!important}@keyframes flipOutX{0%{transform:perspective(400px)}30%{opacity:1;transform:perspective(400px) rotateX(-20deg)}to{opacity:0;transform:perspective(400px) rotateX(90deg)}}.animate__flipOutX{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*.75);animation-name:flipOutX;backface-visibility:visible!important}@keyframes flipOutY{0%{transform:perspective(400px)}30%{opacity:1;transform:perspective(400px) rotateY(-15deg)}to{opacity:0;transform:perspective(400px) rotateY(90deg)}}.animate__flipOutY{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*.75);animation-name:flipOutY;backface-visibility:visible!important}@keyframes lightSpeedInRight{0%{opacity:0;transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translateZ(0)}}.animate__lightSpeedInRight{animation-name:lightSpeedInRight;animation-timing-function:ease-out}@keyframes lightSpeedInLeft{0%{opacity:0;transform:translate3d(-100%,0,0) skewX(30deg)}60%{opacity:1;transform:skewX(-20deg)}80%{transform:skewX(5deg)}to{transform:translateZ(0)}}.animate__lightSpeedInLeft{animation-name:lightSpeedInLeft;animation-timing-function:ease-out}@keyframes lightSpeedOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) skewX(30deg)}}.animate__lightSpeedOutRight{animation-name:lightSpeedOutRight;animation-timing-function:ease-in}@keyframes lightSpeedOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0) skewX(-30deg)}}.animate__lightSpeedOutLeft{animation-name:lightSpeedOutLeft;animation-timing-function:ease-in}@keyframes rotateIn{0%{opacity:0;transform:rotate(-200deg)}to{opacity:1;transform:translateZ(0)}}.animate__rotateIn{animation-name:rotateIn;transform-origin:center}@keyframes rotateInDownLeft{0%{opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:translateZ(0)}}.animate__rotateInDownLeft{animation-name:rotateInDownLeft;transform-origin:left bottom}@keyframes rotateInDownRight{0%{opacity:0;transform:rotate(45deg)}to{opacity:1;transform:translateZ(0)}}.animate__rotateInDownRight{animation-name:rotateInDownRight;transform-origin:right bottom}@keyframes rotateInUpLeft{0%{opacity:0;transform:rotate(45deg)}to{opacity:1;transform:translateZ(0)}}.animate__rotateInUpLeft{animation-name:rotateInUpLeft;transform-origin:left bottom}@keyframes rotateInUpRight{0%{opacity:0;transform:rotate(-90deg)}to{opacity:1;transform:translateZ(0)}}.animate__rotateInUpRight{animation-name:rotateInUpRight;transform-origin:right bottom}@keyframes rotateOut{0%{opacity:1}to{opacity:0;transform:rotate(200deg)}}.animate__rotateOut{animation-name:rotateOut;transform-origin:center}@keyframes rotateOutDownLeft{0%{opacity:1}to{opacity:0;transform:rotate(45deg)}}.animate__rotateOutDownLeft{animation-name:rotateOutDownLeft;transform-origin:left bottom}@keyframes rotateOutDownRight{0%{opacity:1}to{opacity:0;transform:rotate(-45deg)}}.animate__rotateOutDownRight{animation-name:rotateOutDownRight;transform-origin:right bottom}@keyframes rotateOutUpLeft{0%{opacity:1}to{opacity:0;transform:rotate(-45deg)}}.animate__rotateOutUpLeft{animation-name:rotateOutUpLeft;transform-origin:left bottom}@keyframes rotateOutUpRight{0%{opacity:1}to{opacity:0;transform:rotate(90deg)}}.animate__rotateOutUpRight{animation-name:rotateOutUpRight;transform-origin:right bottom}@keyframes hinge{0%{animation-timing-function:ease-in-out}20%,60%{animation-timing-function:ease-in-out;transform:rotate(80deg)}40%,80%{animation-timing-function:ease-in-out;opacity:1;transform:rotate(60deg)}to{opacity:0;transform:translate3d(0,700px,0)}}.animate__hinge{animation-duration:2s;animation-duration:calc(var(--animate-duration)*2);animation-name:hinge;transform-origin:top left}@keyframes jackInTheBox{0%{opacity:0;transform:scale(.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}.animate__jackInTheBox{animation-name:jackInTheBox}@keyframes rollIn{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:translateZ(0)}}.animate__rollIn{animation-name:rollIn}@keyframes rollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}.animate__rollOut{animation-name:rollOut}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.animate__zoomIn{animation-name:zoomIn}@keyframes zoomInDown{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}}.animate__zoomInDown{animation-name:zoomInDown}@keyframes zoomInLeft{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0)}}.animate__zoomInLeft{animation-name:zoomInLeft}@keyframes zoomInRight{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0)}}.animate__zoomInRight{animation-name:zoomInRight}@keyframes zoomInUp{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}}.animate__zoomInUp{animation-name:zoomInUp}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.animate__zoomOut{animation-name:zoomOut}@keyframes zoomOutDown{40%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}to{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0)}}.animate__zoomOutDown{animation-name:zoomOutDown;transform-origin:center bottom}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0)}}.animate__zoomOutLeft{animation-name:zoomOutLeft;transform-origin:left center}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0)}}.animate__zoomOutRight{animation-name:zoomOutRight;transform-origin:right center}@keyframes zoomOutUp{40%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}to{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0)}}.animate__zoomOutUp{animation-name:zoomOutUp;transform-origin:center bottom}@keyframes slideInDown{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInDown{animation-name:slideInDown}@keyframes slideInLeft{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInRight{animation-name:slideInRight}@keyframes slideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInUp{animation-name:slideInUp}@keyframes slideOutDown{0%{transform:translateZ(0)}to{transform:translate3d(0,100%,0);visibility:hidden}}.animate__slideOutDown{animation-name:slideOutDown}@keyframes slideOutLeft{0%{transform:translateZ(0)}to{transform:translate3d(-100%,0,0);visibility:hidden}}.animate__slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{0%{transform:translateZ(0)}to{transform:translate3d(100%,0,0);visibility:hidden}}.animate__slideOutRight{animation-name:slideOutRight}@keyframes slideOutUp{0%{transform:translateZ(0)}to{transform:translate3d(0,-100%,0);visibility:hidden}}.animate__slideOutUp{animation-name:slideOutUp}",":root{--fc-1d:#1d2129;--fc-4e:#4e5969;--fc-86:#86909c}body,html{color:#333;font-size:14px;margin:0;min-height:100vh;overflow-x:hidden;padding:0}.flex{display:flex}.flexalignCenter{align-items:center}.flexalignEnd{align-items:flex-end}.flexalignStart{align-items:flex-start}.flexalignBetween{flex-direction:column;justify-content:space-between}.flexAround{justify-content:space-around}.flexBetween{justify-content:space-between}.flexEnd{justify-content:flex-end}.flexjustifyCenter{justify-content:center}.flexwarp{flex-wrap:wrap}.line_ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.line2_ellipsis{display:-webkit-box;overflow:hidden;text-overflow:-o-ellipsis-lastline;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.contentCenter{margin:0 auto;width:1200px}.warpTitleBox{padding:44px 0;text-align:center}.warpTitleBox h2{font-size:32px;font-weight:700;margin:0}.warpTitleBox h2:has(+.desc){margin:0}.warpTitleBox .desc{font-size:16px;margin-top:12px}.desc{color:#4e5969}.banner{background:linear-gradient(90deg,#f4f8ff,#e0e6ef 47.77%,#dfe6ee 80.58%,#dee6ee);height:440px;min-width:1200px;width:100%}.banner .innerBox{height:100%;justify-content:space-between;margin:0 auto;width:1200px}.banner img{height:100%;-o-object-fit:contain;object-fit:contain;width:674px}.banner .title{color:#333;font-size:32px;font-weight:600;line-height:48px}.banner .line{height:3px;margin:24px 0;width:61px}.banner .desc{color:#4e5969;font-size:18px;line-height:160%;margin-top:12px}.flbc{justify-content:space-between}.flbc,.flcc{align-items:center;display:flex}.flcc{justify-content:center}.flsc{justify-content:flex-start}.flec,.flsc{align-items:center;display:flex}.flec{justify-content:flex-end}.flac{align-items:center;display:flex;justify-content:space-around}.fl-col{flex-direction:column}.fs-b{font-weight:700}.fc-1d{color:var(--fc-1d)}.fc-4e{color:var(--fc-4e)}.fc-86{color:var(--fc-86)}.fs-16{font-size:16px}a{text-decoration:none}a:link,a:visited{color:currentColor}@media screen and (max-width:1200px){.contentCenter{margin:0 auto!important;overflow:hidden!important;width:calc(100% - 16px)!important}.banner{min-width:100%}.warpTitleBox{padding:24px!important}.warpTitleBox h2{font-size:24px!important}}.linear-gb{background:linear-gradient(180deg,#fbfdff,#f0f7ff)}.customer-service-box{bottom:50%;position:fixed;right:10px;z-index:9999}.customer-service-box .hover{opacity:1!important;right:80px!important}.customer-service-box .customer-service-box-content{background-color:#fff;border:10px solid #fff;bottom:50%;opacity:0;overflow:hidden;position:fixed;right:-180px;transition:all .2s;width:100px;z-index:8888}.customer-service-box .customer-service-box-content img{width:100%}.customer-service-box .customer-service-box-content p{font-weight:700;margin:0;text-align:center}.customer-service-box .customer-service-box-title{align-items:center;background:linear-gradient(180deg,#eaf2ff,#f8fbff);border:3px solid #fff;border-radius:80px;display:flex;flex-direction:column;height:120px;padding-top:2px;position:relative;width:36px;z-index:8889}.customer-service-box .customer-service-box-title .customer-service-box-title-icon{background:#fff;border-radius:80px;height:32px;width:32px}.customer-service-box .customer-service-box-title .customer-service-box-title-icon img{width:100%}.customer-service-box .customer-service-box-title .customer-service-box-title-text{align-items:center;color:#2c67ff;cursor:pointer;display:flex;font-weight:700;letter-spacing:3px;margin-top:12px;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;writing-mode:vertical-lr}"];export{a as default};
