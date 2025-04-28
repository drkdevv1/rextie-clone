import React from 'react';
import Image from 'next/image';
import { styles } from '@/styles/styles';

const DownloadApp = () => {
    return (
        <section className="py-16">
            <div className="w-full px-4 md:px-6 mx-auto max-w-5xl relative">
                <div className="bg-[#eff3fe] rounded-3xl xl:px-20 py-6 overflow-hidden">
                    <div className="grid grid-cols-1 xl:grid-cols-[65%_35%] gap-8 items-center">
                        {/* Left content */}
                        <div className="flex flex-col">
                            {/* Logo and rating */}
                            <div className="flex items-center justify-center xl:justify-start mb-6">
                                <Image
                                    src="/assets/images/download/rextie-logo.png"
                                    alt="Rextie Logo"
                                    width={38}
                                    height={38}
                                    className="mr-4"
                                />
                                <div className="flex flex-col">
                                    <div className='flex flex-row items-center'>
                                        <Image
                                            src="/assets/images/download/star-icon.svg"
                                            alt="Star Rating"
                                            width={18}
                                            height={18}
                                            className="mr-1 h-[100%]"
                                        />
                                        <span className="font-bold text-lg">4.8</span>
                                    </div>
                                    <div className='flex flex-row'>
                                        <p className="text-gray-600 text-sm">Rextie en App Store</p>
                                    </div>
                                </div>
                            </div>

                            {/* Heading */}
                            <h2 className="text-[#01003c] text-center xl:text-start md:text-xl lg:text-2xl font-bold mb-4">
                                ¡Cambia dinero desde cualquier lugar!
                            </h2>

                            {/* App store buttons */}
                            <div className="flex flex-wrap justify-center xl:justify-start gap-4">
                                <a href="#" className="hover:opacity-90 transition-opacity">
                                    <Image
                                        src="/assets/images/download/app-store.png"
                                        alt="Download on App Store"
                                        width={135}
                                        height={40}
                                    />
                                </a>
                                <a href="#" className="hover:opacity-90 transition-opacity">
                                    <Image
                                        src="/assets/images/download/google-play.png"
                                        alt="Get it on Google Play"
                                        width={135}
                                        height={40}
                                    />
                                </a>
                                <a href="#" className="hover:opacity-90 transition-opacity">
                                    <Image
                                        src="/assets/images/download/app-gallery.png"
                                        alt="Explore it on AppGallery"
                                        width={135}
                                        height={40}
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Right content - App image */}
                        <div className="hidden xl:flex relative md:absolute md:right-[12%] justify-center">
                            <Image
                                src="/assets/images/download/apps-rextie.png"
                                alt="Rextie"
                                width={190}
                                height={320}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;