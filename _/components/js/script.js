function startAd(){  
    
    var bgtl = new TimelineLite();
        bgtl.to("#bradBackground1", .8, {opacity:0}, 9)
            .from("#bradBackground2", .8, {opacity:0}, 9)
            .to("#bradBackground2", .8, {opacity:0}, 12)
            .from("#bradBackground3", .8, {opacity:0}, 12);
    
    var ctl = new TimelineLite();
        ctl.to("#bradBigCirc", 1, {scale:0, x:-110, y:-50, ease: Power4.easeOut});
    

    var smctl = new TimelineMax();
        //ctl.to("#bradSmCirc", 1, {scale:.8, repeat: -1, yoyo: true, repeatDelay:.4, ease: Power1.easeOut});
    
 var ttl = new TimelineLite();
        ttl.from("#t4", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 12)
        .from("#t5", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 12);
    
    var tbtl1 = new TimelineLite();
    tbtl1.from("#t1", .8, {scale:0, opacity:0, ease: Power3.easeOut})
        .to("#t1", .4, {opacity:0, ease: Power3.easeOut}, 3)
        .to("#r1",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r2",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r3",.1, {scaleX:1.2, opacity:.1, ease: Power4.easeOut}, 3)
        .to("#r4",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r5",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r6",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r1",.1, {opacity:.4, ease: Power4.easeOut}, 3.1)
        .to("#r2",.1, {opacity:.5, ease: Power4.easeOut}, 3.1)
        .to("#r3",.1, {opacity:.7, ease: Power4.easeOut}, 3.1)
        .to("#r4",.1, {opacity:4, ease: Power4.easeOut}, 3.1)
        .to("#r5",.1, {opacity:.6, ease: Power4.easeOut}, 3.1)
        .to("#r6",.1, {opacity:.5, ease: Power4.easeOut}, 3.1)
        .to("#r1",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r2",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r3",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r4",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r5",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r6",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r1",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r2",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r3",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r4",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r5",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r6",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3);
    
    var tbtl2 = new TimelineLite();
    tbtl2.from("#t2", .8, {scale:0, opacity:0, ease: Power3.easeOut})
        .to("#t2", .4, {opacity:0, ease: Power3.easeOut}, 3)
        .to("#r1",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r2",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r3",.1, {scaleX:1.2, opacity:.1, ease: Power4.easeOut}, 3)
        .to("#r4",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r5",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r6",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r1",.1, {opacity:.8, ease: Power4.easeOut}, 3.1)
        .to("#r2",.1, {opacity:.6, ease: Power4.easeOut}, 3.1)
        .to("#r3",.1, {opacity:.9, ease: Power4.easeOut}, 3.1)
        .to("#r4",.1, {opacity:6, ease: Power4.easeOut}, 3.1)
        .to("#r5",.1, {opacity:.8, ease: Power4.easeOut}, 3.1)
        .to("#r6",.1, {opacity:.5, ease: Power4.easeOut}, 3.1)
        .to("#r1",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r2",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r3",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r4",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r5",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r6",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r1",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r2",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r3",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r4",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r5",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r6",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3);
    
    var tbtl3 = new TimelineLite();
    tbtl3.from("#t3", .8, {scale:0, opacity:0, ease: Power3.easeOut})
        .to("#t3", .4, {opacity:0, ease: Power3.easeOut}, 3)
        .to("#r1",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r2",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r3",.1, {scaleX:1.2, opacity:.1, ease: Power4.easeOut}, 3)
        .to("#r4",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r5",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r6",.1, {scaleX:1.2, opacity:1, ease: Power4.easeOut}, 3)
        .to("#r1",.1, {opacity:.7, ease: Power4.easeOut}, 3.1)
        .to("#r2",.1, {opacity:.9, ease: Power4.easeOut}, 3.1)
        .to("#r3",.1, {opacity:.8, ease: Power4.easeOut}, 3.1)
        .to("#r4",.1, {opacity:8, ease: Power4.easeOut}, 3.1)
        .to("#r5",.1, {opacity:.6, ease: Power4.easeOut}, 3.1)
        .to("#r6",.1, {opacity:.7, ease: Power4.easeOut}, 3.1)
        .to("#r1",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r2",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r3",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r4",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r5",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r6",.1, {opacity:1, ease: Power4.easeOut}, 3.2)
        .to("#r1",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r2",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r3",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r4",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r5",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3)
        .to("#r6",.1, {scaleX:2.5, opacity:0, ease: Power4.easeOut}, 3.3);
    
    tl.add(bgtl, 0);
    tl.add(ctl, 0);
    tl.add(smctl, .4);
    tl.add(tbtl1, .2);
    tl.add(tbtl2, 3.4);
    tl.add(tbtl3, 6.8);
    tl.add(ttl, .4);
    //tl.totalDuration(15);
};

function addListeners(){
    document.getElementById("bradContent").addEventListener("click", clickthrough);
};

function clickthrough() {
    EB.clickthrough();
}


function animationComplete(evt){
};

function checkInit() {
              if (!EB.isInitialized()) {
                 EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit); 
                 // This code checks whether the EB object is initialized, if the object is initialized, it
                     //launches the function "onInit", otherwise "EB_INITIALIZED" event. 
              }
              else {
                      onInit();
               }         
               function onInit() {
    
    TweenLite.set("#bradContainer", {opacity:1});
    addListeners();
    startAd();
              } 
     }

window.addEventListener('load', checkInit);

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);


$("#play").click(function() {
  //play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
  //if the timeline is not done then play() or else restart() (restart always restarts from the beginning).

  if(tl.progress() != 1){
    //carl just changed this again
		tl.play();
  } else {
    tl.restart();
  }
});
		
$("#pause").click(function() {
		tl.pause();
});
		
$("#restart").click(function() {
		tl.restart();
});		
	
$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    tl.pause();
    //adjust the timeline's progress() based on slider value
    tl.progress( ui.value/100 );
    }
});	
		
function updateSlider() {
  $("#slider").slider("value", tl.progress() *100);
} 	