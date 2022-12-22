import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

export const About = () => {
  const {ref, inView} = useInView();
  console.log("in view", inView);
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce:0.3,
        },
        scale:1
        

      })
    }
    if (!inView) {
      animation.start({
       x:'-100vw',
       scale:0
      })
    }
    console.log("in view usefff", inView)
  }, [inView])
  
  return (
    // <section className='flex items-center min-h-screen justify-center bg-gradient-to-r from-sky-500 to-indigo-500'>
    <section className='bg-gradient-to-r from-cyan-500 to-blue-500'>
    <motion.div initial='first' animate='last' transition={{duration:0.3}}  whileHover={{
        position:'relative',
        zIndex: 1,
        transition: {
          duration: .1
        }
      }} variants={{
        first: {
          opacity:0,
        },
        last: {
          opacity:1,
        }
      }} className="w-full mx-auto px-40 pb-20">
  <div className="grid grid-cols-1">
    
    {/* <div className="col-span-1"></div> */}
    <div className="col-span-1 bg-slate-200 py-10 rounded-md lg:mx-60">
        <p className='content text-black lg:mx-20 '>
        As a software engineer, I am skilled in developing high-quality and efficient code to solve complex problems. I have experience working in a variety of programming languages, including Python, Java, and C++. I am also proficient in web development frameworks such as Flask and Django.
         In my previous roles, I have successfully delivered projects on time and within budget, and have consistently received positive feedback from my clients and colleagues. I am a problem-solver at heart and thrive in a fast-paced and collaborative work environment.
         In my free time, I enjoy staying up-to-date on the latest technology trends and exploring new programming languages and frameworks. I am also an avid traveler and enjoy experiencing new cultures and cuisines.
        </p>
    </div>
    {/* <div className="col-span-1 bg-slate-500">Column 3</div> */}
  </div>
</motion.div>
</section>
//     <motion.div
//     initial='first' animate='last' transition={{duration:0.3}}  whileHover={{
//       position:'relative',
//       zIndex: 1,
//       transition: {
//         duration: .1
//       }
//     }} variants={{
//       first: {
//         opacity:0,
//       },
//       last: {
//         opacity:1,
//       }
//     }}
//     className="container mx-auto py-9 md:py-12 px-4 md:px-6">

//   <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
//     <div className="flex flex-col md:flex-row items-strech justify-between bg-sky-400 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
//       <div className="flex flex-col justify-center md:w-1/2">
//         <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">01. About me</h1>
//         <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
//         As a software engineer, I am skilled in developing high-quality and efficient code to solve complex problems. I have experience working in a variety of programming languages, including Python, Java, and C++. I am also proficient in web development frameworks such as Flask and Django.
//         In my previous roles, I have successfully delivered projects on time and within budget, and have consistently received positive feedback from my clients and colleagues. I am a problem-solver at heart and thrive in a fast-paced and collaborative work environment.
//         In my free time, I enjoy staying up-to-date on the latest technology trends and exploring new programming languages and frameworks. I am also an avid traveler and enjoy experiencing new cultures and cuisines.
//         </p>
//       </div>
//       <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
//         <img src="" alt="xxxx" className="" />
//       </div>
//     </div>
//     <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-sky-400 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
//       <div className="flex flex-col justify-center">
//         <h1 className="text-center text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Lunes a Sabado</h1>
//         <p className="text-center lg:text-xl text-gray-800 dark:text-white">12:00 - <span className="font-bold">23:00</span></p>
//       </div>
     
//     </div>
//   </div>
// </motion.div> 

//   <motion.div className='container mx-auto py-9 md:py-12 px-4 md:px-6  bg-gradient-to-r from-sky-500 to-indigo-500' ref={ref}>
//     <motion.div animate={animation} className='w-1/3'>
//       <h1 className='font-bold text-2xl'>01. About me</h1>
//       {/* <div className='flex'>
//         <p className='text-md text-black text-justify flex-2'>
//           As a software engineer, I am skilled in developing high-quality and efficient code to solve complex problems. I have experience working in a variety of programming languages, including Python, Java, and C++. I am also proficient in web development frameworks such as Flask and Django.
//           In my previous roles, I have successfully delivered projects on time and within budget, and have consistently received positive feedback from my clients and colleagues. I am a problem-solver at heart and thrive in a fast-paced and collaborative work environment.
//           In my free time, I enjoy staying up-to-date on the latest technology trends and exploring new programming languages and frameworks. I am also an avid traveler and enjoy experiencing new cultures and cuisines.
//         </p>
//         <div className="aspect-square rounded-full flex-4 ">
//     <Image      src="https://storage.googleapis.com/dj-bucket-12/uploads/gafas1.webp"
//             alt="Picture of the author"
//             width={300}
//             height={300}


//         />  
// </div>

       
//       </div> */}
//       <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
//     <div className="flex flex-col md:flex-row items-strech justify-between bg-sky-400 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
//       <div className="flex flex-col justify-center md:w-1/2">
//         {/* <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">{ negocio.name }</h1> */}
//         <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2"> As a software engineer, I am skilled in developing high-quality and efficient code to solve complex problems. I have experience working in a variety of programming languages, including Python, Java, and C++. I am also proficient in web development frameworks such as Flask and Django.
//           In my previous roles, I have successfully delivered projects on time and within budget, and have consistently received positive feedback from my clients and colleagues. I am a problem-solver at heart and thrive in a fast-paced and collaborative work environment.
//           In my free time, I enjoy staying up-to-date on the latest technology trends and exploring new programming languages and frameworks. I am also an avid traveler and enjoy experiencing new cultures and cuisines.</p>
//       </div>
//       <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
//         <img src='' alt="xdsds" className="" />
//       </div>
//     </div>
//     <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-sky-400 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
//       <div className="flex flex-col justify-center">
//         <h1 className="text-center text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Lunes a Sabado</h1>
//         <p className="text-center lg:text-xl text-gray-800 dark:text-white">12:00 - <span className="font-bold">23:00</span></p>
//       </div>
     
//     </div>
//   </div>
      
//     </motion.div>
//   </motion.div>


  )
}
