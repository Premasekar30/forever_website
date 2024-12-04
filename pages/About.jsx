import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore dicta qui corrupti voluptatum nihil, quas vel impedit quia totam laboriosam, quos nisi, tenetur minima? Unde ex porro enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore id totam ipsam architecto molestiae libero corrupti possimus? Repudiandae magni iusto corrupti autem perferendis ex nobis quibusdam at dolore fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem esse, itaque voluptate odio dicta tempora voluptatibus corporis temporibus neque! Hic cum expedita asperiores nulla delectus omnis corrupti aut ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sint, autem nostrum dicta id esse natus harum repellat molestiae et ipsam, ut nesciunt dolores. Inventore ullam quaerat quae quibusdam quam!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sint, autem nostrum dicta id esse natus harum repellat molestiae et ipsam, ut nesciunt dolores. Inventore ullam quaerat quae quibusdam quam!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sint, autem nostrum dicta id esse natus harum repellat molestiae et ipsam, ut nesciunt dolores. Inventore ullam quaerat quae quibusdam quam!</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
