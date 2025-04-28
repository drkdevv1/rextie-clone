import React from 'react';
import Image from 'next/image';

interface CardProps {
    iconSrc: string;
    iconAlt: string;
    title: string;
    description: string;
}

const Card = ({ iconSrc, iconAlt, title, description }: CardProps) => {
    return (
        <div className="bg-[#eff3fe] rounded-2xl py-10 flex flex-col items-center text-center">
            <div className="mb-6 h-[43px]">
                <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={52}
                    height={43}
                />
            </div>
            <h3 className="text-[#1143f8] text-lg font-bold">{title}</h3>
            <p className="text-[#1143f8] text-lg text-center px-8">{description}</p>
        </div>
    );
};

export default Card;