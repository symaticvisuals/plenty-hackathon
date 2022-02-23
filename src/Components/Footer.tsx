import React, { useState } from 'react'
import {FaDiscord} from 'react-icons/fa'
import {FaTelegramPlane}  from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
function Footer() {
    const [socials] = useState([
        {
            icon: <FaDiscord/>,
            link: 'https://discord.gg/y6qQZyX',
            name: 'Discord'
        },
        {
            icon: <FaTelegramPlane/>,
            link: 'https://t.me/plenty_bot',
            name: 'Telegram'
        },
        {
            icon: <BsTwitter/>,
            link: 'https://twitter.com/plenty_bot',
            name: 'Twitter'
        }
    ])
  return (
    <div className='flex flex-col items-center justify-center mt-4 pb-14'>
        <div className='flex items-center'>
            {
                socials.map((social, index) => (
                    <a href={social.link} target='_blank' rel='noopener noreferrer' className='mx-2 text-skin-inverted-dark text-2xl'>
                        {social.icon}
                    </a>
                ))
            }
            </div>
        <p className='text-skin-inverted-dark text-xs mt-2'>
            Made with ♥️ by Tezsure
        </p>
    </div>
  )
}

export default Footer