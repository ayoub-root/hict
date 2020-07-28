import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const slideImages = [
  'studio-1.jpg',
  '../../images/studio-2.jpg',
  'images/studio-3.jpg',
  'images/studio-4.jpg',
  'images/studio-5.jpg'
];

export default function Slideshow () {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div  alt='ddd' style={{'backgroundImage': `url(`+require('../../images/s1.jpg')+`)`,backgroundSize:'100% 100%', width:'100%',height:'710px'}}>
            </div>
          </div>
          <div className="each-slide">
             <div style={{'backgroundImage': `url(`+require('../../images/s2.jpg')+`)`,backgroundSize:'100% 100%', width:'100%',height:'710px'}}>
            </div>
          </div>
          <div className="each-slide">
             <div style={{'backgroundImage': `url(`+require('../../images/s3.jpg')+`)`,backgroundSize:'100% 100%', width:'100%',height:'710px'}}>
            </div>
          </div>
              <div className="each-slide">
             <div style={{'backgroundImage': `url(`+require('../../images/s4.jpg')+`)`,backgroundSize:'100% 100%', width:'100%',height:'710px'}}>
            </div>
          </div>
               <div className="each-slide">
             <div style={{'backgroundImage': `url(`+require('../../images/s5.jpg')+`)`,backgroundSize:'100% 100%', width:'100%',height:'710px'}}>
            </div>
          </div>
               <div className="each-slide">
             <div style={{'backgroundImage': `url(`+require('../../images/s9.jpg')+`)`,backgroundSize:'100% 100%', width:'100%',height:'710px'}}>
            </div>
          </div>
               <div className="each-slide">
                 <div style={{'backgroundImage': `url(`+require('../../images/s10.jpg')+`)`,backgroundSize:'100% 100%', width:'100%',height:'710px'}}>
            </div>
          </div>
        </Slide>
      </div>
    );
}