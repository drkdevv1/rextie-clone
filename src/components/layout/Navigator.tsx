"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import Sidebar from './Sidebar';

const Navigator = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="py-2 sm:py-8 flex justify-between items-center">
            {/* Logo*/}
            <div className="flex items-center">
                <a href="#" className="flex items-center">
                    {/* Desktop Logo */}
                    <div className="hidden sm:block">
                        <Image
                            src="/assets/icons/rextie-icon-redesign.svg"
                            alt="Rextie"
                            width={120}
                            height={38}
                            priority
                        />
                    </div>

                    {/* Mobile Logo */}
                    <div className="sm:hidden">
                        <Image
                            src="/assets/icons/isotipo-rextie.svg"
                            alt="Rextie"
                            width={38}
                            height={38}
                            priority
                        />
                    </div>
                </a>
            </div>

            {/* Desktop Navigation and Auth Links */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
                <a href="#" className="text-white hover:text-white/80 font-medium">
                    Nosotros
                </a>
                <a href="#" className="text-white hover:text-white/80 font-medium">
                    Blog
                </a>
                <div className="relative">
                    <a
                        href="#"
                        ref={triggerRef}
                        className="text-white hover:text-white/80 font-medium flex items-center"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsServicesOpen(!isServicesOpen);
                        }}
                        onMouseEnter={() => setIsServicesOpen(true)}
                    >
                        Servicios
                        <IoIosArrowDown className="ml-1 text-[#fe6e01]" />
                    </a>

                    {isServicesOpen && (
                        <div
                            ref={dropdownRef}
                            className="absolute mt-0 pt-4 w-40 z-10"
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <div className="py-2 bg-white rounded-md shadow-xl">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Factoring
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Visa
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Empresas
                                </a>
                            </div>
                        </div>
                    )}
                </div>
                <span className="w-10 items-center justify-center text-gray-300 hidden min-[1025px]:flex">|</span>
                <a href="#" className="text-white hover:text-white/80 font-bold">
                    Iniciar Sesión
                </a>
                <a
                    href="#"
                    className="bg-[#0025b2] px-4 py-2.5 rounded-xl font-bold transition-colors text-white"
                >
                    Regístrate
                </a>
            </div>

            {/* Mobile Auth & Menu Buttons */}
            <div className="md:hidden flex items-center space-x-2">
                <a href="#" className="text-white text-sm font-bold px-2">
                    Iniciar Sesión
                </a>
                <a
                    href="#"
                    className="bg-[#0025b2] px-3 py-2 rounded-xl font-bold text-sm text-white"
                >
                    Regístrate
                </a>
                <button
                    className="text-white p-1"
                    onClick={() => setIsSidebarOpen(true)}
                    aria-label="Open menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            {/* Mobile Sidebar*/}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
        </nav>
    );
};

export default Navigator;