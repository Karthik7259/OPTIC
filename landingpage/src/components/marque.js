import React from 'react'
import { motion }  from "framer-motion"
function Marque() {

  return (
    // bg-[#004D43]
   
<div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-2 rounded-tl-0xl rounded-tr-0xl bg-zinc-500 text-black'> 
  <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
    <motion.h1 
      initial={{x:"0"}} 
      animate={{x:"-100%"}} 
      transition={{repeat: Infinity, ease:"linear", duration: 8}} 
      className='text-[100px] leading-none font-[FoundersGroteskX-Condensed] -mb-[5vw] pr-10 uppercase font-semibold drop-shadow-[0_1px_8px_rgba(0,255,200,0.25)] bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 bg-clip-text text-transparent text-gradient'>
      OPTIC AI • Empowering Workplaces
    </motion.h1>
    <motion.h1 
      initial={{x:"0"}} 
      animate={{x:"-100%"}} 
      transition={{repeat: Infinity, ease:"linear", duration: 8}} 
      className='text-[100px] leading-none font-[FoundersGroteskX-Condensed] -mb-[5vw] pr-10 uppercase font-semibold drop-shadow-[0_1px_8px_rgba(0,255,200,0.25)] bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 bg-clip-text text-transparent text-gradient'>
      OPTIC AI • Empowering Workplaces
    </motion.h1>
  </div>        
</div>
  )
}

export default Marque;