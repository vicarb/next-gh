import React from 'react'
import { motion } from "framer-motion"

export const Name = () => {
  return (
<section className="py-24 flex items-center min-h-screen justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
  <motion.div className="mx-auto max-w-[43rem]" initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
    <div className="text-center">
    <p className="text-lg font-medium leading-8 text-white">Hi, my name is</p>
      <h1 className="mt-3 text-[4.5rem] font-bold leading-tight tracking-tight text-black">Víctor Cárdenas Bahamonde</h1>
      <p className="mt-3 text-lg font-semibold text-black">I&apos;m a commercial engineer who decided to became a software developer, currently focused on developing cloud native projects</p>
    </div>

    <div className="mt-6 flex items-center justify-center gap-4">
      <a href="#" className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Get started for free</a>
      <a href="#" className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"> Request a demo </a>
    </div>
  </motion.div>
</section>
  )
}