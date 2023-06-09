import React from 'react'
import FooterBottom from './FooterBottom'
import FooterMid from './FooterMid'
import FooterTop from './FooterTop'

const Footer = ({setNewTop}) => {

    const scroll = () => {
            setNewTop(3)            
    }

    
var touchesInAction = {};
var mobileDirection;

function touchStartHandler(event) {
    var touches = event.changedTouches;

    for(var j = 0; j < touches.length; j++) {

         /* store touch info on touchstart */
         touchesInAction[ "$" + touches[j].identifier ] = {

            identifier : touches[j].identifier,
            pageX : touches[j].pageX,
            pageY : touches[j].pageY
         };
    }
}

function touchEndHandler(event) {
    var touches = event.changedTouches;

    for(var j = 0; j < touches.length; j++) {

        /* access stored touch info on touchend */
        var theTouchInfo = touchesInAction[ "$" + touches[j].identifier ];
        theTouchInfo.dx = touches[j].pageX - theTouchInfo.pageX;  /* x-distance moved since touchstart */
        theTouchInfo.dy = touches[j].pageY - theTouchInfo.pageY;  /* y-distance moved since touchstart */  
        mobileDirection = theTouchInfo.dy      
    }

    if (mobileDirection < 0){
        scroll()
    }
    /* determine what gesture was performed, based on dx and dy (tap, swipe, one or two fingers etc. */

}

  return (
    <div className='overflow-hidd pb-4 h-full' onWheel={scroll} onTouchStart={(e) => {                    
        touchStartHandler(e)            	
    }}
    onTouchEnd={(e)=> {
        touchEndHandler(e)
    }}>
        <FooterTop />
        <FooterMid />
        <FooterBottom/>
    </div>
  )
}

export default Footer