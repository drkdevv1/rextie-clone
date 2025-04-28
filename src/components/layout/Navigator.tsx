"use client";
import React from 'react';
import Image from 'next/image';

const Navigator = () => {
    return (
        <nav className="py-8 flex justify-between items-center">
            <div className="flex items-center">
                <a href="#" className="flex items-center">
                    <Image
                        src="/assets/icons/rextie-icon-redesign.svg"
                        alt="Rextie"
                        width={120}
                        height={38}
                        priority
                    />
                </a>
            </div>

            <div className="hidden md:flex items-center space-x-6 text-sm">
                <a href="#" className="text-white  hover:text-white/80 font-medium">
                    Nosotros
                </a>
                <a href="#" className="text-white hover:text-white/80 font-medium">
                    Blog
                </a>
                <a href="#" className="text-white hover:text-white/80 font-medium">
                    Servicios
                </a>
                <span className="w-10 items-center justify-center text-gray-300 hidden min-[1025px]:flex">|</span>
                <a href="#" className="text-white hover:text-white/80 font-bold">
                    Iniciar Sesión
                </a>
                <a
                    href="#"
                    className="bg-[#0025b2] px-4 py-2.5 rounded-xl font-bold transition-colors"
                >
                    Regístrate
                </a>
            </div>

            <button className="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </nav>
    );
};

export default Navigator;