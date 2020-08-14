import React from 'react';

import { FaMedium, FaDev, FaLinkedin } from 'react-icons/fa';

export default function ArticleThumbnail(props) {
    const components = {
        medium: FaMedium,
        dev: FaDev,
        linkedin: FaLinkedin,
    };

    const Provider = components[props.provider];

    return (
        <div>
            <div>
                <div className='absolute ml-2 mt-2 bg-gray-100 rounded-lg z-20'>
                    {Provider && <Provider size={64} />}
                </div>
                <div className='w-full pt-16x9 relative overflow-hidden'>
                    <img
                        className='h-full w-full object-cover object-center absolute inset-0'
                        src='https://source.unsplash.com/random/'
                        alt='Article'
                    />
                </div>
            </div>
            <div>
                <p className='text-2xl text-bold'>An article title</p>
                <p className='text-xl'>An article subtitle</p>
            </div>
        </div>
    );
}
