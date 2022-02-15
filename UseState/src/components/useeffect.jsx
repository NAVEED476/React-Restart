import React, { useEffect } from 'react';
const Tutorials=(props)=>{
   useEffect( ()=>{
      console.log('hello');
      setTimeout( ()=>{ alert('hello'); }, 2000);
      return ( ()=>{
         console.log('cleanup on change of player props');
      });
   }, [props.player]);

   
   return (
         <div></div>
   )
}

export default Tutorials;