function startAd(){var rough=new RoughEase({strength:3,points:25,template:Strong.easeInOut,taper:"out",clamp:!0,randomize:!1}),bgtl=new TimelineLite;bgtl.from("#bradBackground2",.8,{opacity:0},10.6).to("#bradBackground2",.8,{opacity:0,scale:.7},13.8).from("#bradBackground3",.8,{scale:4,x:180,y:-40,opacity:0},13.8);var ctl=new TimelineLite;ctl.to("#bradBigCirc",1,{scale:0,x:-110,y:-50,ease:Power4.easeOut});var smctl=new TimelineLite;smctl.to("#bradSmCirc",1,{scale:.8,ease:Power1.easeOut}).to("#bradSmCirc",1,{scale:1.2,ease:Power1.easeOut},"+=.4").to("#bradSmCirc",1,{scale:.8,ease:Power1.easeOut},"+=.4").to("#bradSmCirc",1,{scale:1.2,ease:Power1.easeOut},"+=.4").to("#bradSmCirc",1,{scale:.8,ease:Power1.easeOut},"+=.4").to("#bradSmCirc",1,{scale:1.2,ease:Power1.easeOut},"+=.4").to("#bradSmCirc",1,{scale:1,ease:Power1.easeOut},"+=.4").to("#bradSmCirc",1.6,{rotationZ:121,transformOrigin:"67px 115px"},"+=.8").to("#bradBackground2",2,{x:-320,y:76}).to("#bradSmCirc",.6,{opacity:0},"-=.7");var ttl=new TimelineLite;ttl.from("#t4",.8,{scale:0,opacity:0,ease:Power3.easeOut},14).from("#t5",.8,{scale:0,opacity:0,ease:Power3.easeOut},14);var tbtl1=new TimelineLite;tbtl1.from("#t1",.6,{opacity:0,ease:rough}).to("#t1",.2,{opacity:0,ease:Power3.easeOut},3).to("#r1",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r2",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r3",.1,{scaleX:1.2,opacity:.1,ease:Power4.easeOut},3).to("#r4",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r5",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r6",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r1",.1,{opacity:.6,ease:Power4.easeOut},3.1).to("#r2",.1,{opacity:.5,ease:Power4.easeOut},3.1).to("#r3",.1,{opacity:.7,ease:Power4.easeOut},3.1).to("#r4",.1,{opacity:4,ease:Power4.easeOut},3.1).to("#r5",.1,{opacity:.6,ease:Power4.easeOut},3.1).to("#r6",.1,{opacity:.5,ease:Power4.easeOut},3.1).to("#r1",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r2",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r3",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r4",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r5",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r6",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r1",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r2",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r3",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r4",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r5",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r6",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3);var tbtl2=new TimelineLite;tbtl2.from("#t2",.6,{opacity:0,ease:rough}).to("#t2",.2,{opacity:0,ease:Power3.easeOut},3).to("#r1",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r2",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r3",.1,{scaleX:1.2,opacity:.1,ease:Power4.easeOut},3).to("#r4",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r5",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r6",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r1",.1,{opacity:.8,ease:Power4.easeOut},3.1).to("#r2",.1,{opacity:.6,ease:Power4.easeOut},3.1).to("#r3",.1,{opacity:.9,ease:Power4.easeOut},3.1).to("#r4",.1,{opacity:6,ease:Power4.easeOut},3.1).to("#r5",.1,{opacity:.8,ease:Power4.easeOut},3.1).to("#r6",.1,{opacity:.5,ease:Power4.easeOut},3.1).to("#r1",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r2",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r3",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r4",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r5",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r6",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r1",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r2",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r3",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r4",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r5",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r6",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3);var tbtl3=new TimelineLite;tbtl3.from("#t3",.6,{opacity:0,ease:rough}).to("#t3",.2,{opacity:0,ease:Power3.easeOut},3).to("#r1",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r2",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r3",.1,{scaleX:1.2,opacity:.1,ease:Power4.easeOut},3).to("#r4",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r5",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r6",.1,{scaleX:1.2,opacity:1,ease:Power4.easeOut},3).to("#r1",.1,{opacity:.7,ease:Power4.easeOut},3.1).to("#r2",.1,{opacity:.9,ease:Power4.easeOut},3.1).to("#r3",.1,{opacity:.8,ease:Power4.easeOut},3.1).to("#r4",.1,{opacity:8,ease:Power4.easeOut},3.1).to("#r5",.1,{opacity:.6,ease:Power4.easeOut},3.1).to("#r6",.1,{opacity:.7,ease:Power4.easeOut},3.1).to("#r1",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r2",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r3",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r4",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r5",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r6",.1,{opacity:1,ease:Power4.easeOut},3.2).to("#r1",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r2",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r3",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r4",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r5",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3).to("#r6",.1,{scaleX:2.5,opacity:0,ease:Power4.easeOut},3.3);var ctatl=new TimelineLite;ctatl.from("#bradFooter",.4,{opacity:0,ease:Power3.easeOut}).from("#bradFooterImageContainer",.8,{opacity:0,ease:Power3.easeOut},"-=.4").from("#bradFooterCTA",.8,{opacity:0,ease:Power3.easeOut},"-=.8"),tl.add(bgtl,0),tl.add(ctl,0),tl.add(smctl,.4),tl.add(tbtl1,.4),tl.add(tbtl2,3.8),tl.add(tbtl3,7.2),tl.add(ttl,.4),tl.add(ctatl,14.8),tl.totalDuration(15)}function addListeners(){document.getElementById("bradContent").addEventListener("click",clickthrough)}function clickthrough(){EB.clickthrough()}function animationComplete(evt){}function checkInit(){function onInit(){TweenLite.set("#bradContainer",{opacity:1}),addListeners(),startAd()}EB.isInitialized()?onInit():EB.addEventListener(EBG.EventName.EB_INITIALIZED,onInit)}function updateSlider(){$("#slider").slider("value",100*tl.progress())}window.addEventListener("load",checkInit);var tl=new TimelineLite({onUpdate:updateSlider});tl.eventCallback("onComplete",animationComplete),$("#play").click(function(){1!=tl.progress()?tl.play():tl.restart()}),$("#pause").click(function(){tl.pause()}),$("#restart").click(function(){tl.restart()}),$("#slider").slider({range:!1,min:0,max:100,step:.1,slide:function(event,ui){tl.pause(),tl.progress(ui.value/100)}});