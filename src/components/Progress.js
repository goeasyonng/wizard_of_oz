import React from 'react';
import '../CSS/progress.css';

export default function Progress() {
   return (
      <>
         <div className='loading-bar'>
            <div className='loading-bar--progress'>
               <span className='first'></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span className='last'></span>
            </div>
         </div>
      </>
   );
}
