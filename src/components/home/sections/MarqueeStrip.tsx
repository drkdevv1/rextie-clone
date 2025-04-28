"use client";
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

// Array of partner images for the marquee
const partnerImages = [
    'ADEX.png',
    'CCL.png',
    'FINTECH PERU.png',
    'iabMIXX.png',
    'Ministerio.png',
    'SEEDSTARSWORLD.png',
    'STARTUP.png',
    'VISA.png',
    'ASEP.png',
    'ISO.png'
];

const MarqueeStrip = () => {
    return (
        <div className="w-full bg-[#0133ff] py-2">

            <div className="flex-1 overflow-hidden">
                <Marquee
                    gradient={false}
                    speed={40}
                    pauseOnHover={true}
                    direction="left"
                >
                    <div className="flex items-center space-x-12 px-4">
                        <div className="flex-shrink-0 h-12 flex items-center">
                            <h3 className="font-bold text-2xl text-white px-8">Somos asociados</h3>
                        </div>

                        {/* Images */}
                        {partnerImages.map((image, index) => (
                            <div key={index} className="flex-shrink-0 h-12 flex items-center">
                                <Image
                                    src={`/assets/images/marquee/${image}`}
                                    alt={`Partner ${index + 1}`}
                                    width={200}
                                    height={48}
                                    style={{
                                        objectFit: 'contain',
                                        height: '100%',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeStrip;