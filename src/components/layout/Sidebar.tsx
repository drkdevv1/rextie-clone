import React from 'react';
import Image from 'next/image';
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import UserTypeSelector from './UserTypeSelector';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const [isServicesOpen, setIsServicesOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 100);
    };

    // Add/remove body scroll lock when sidebar is open/closed
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
            <div
                className={`fixed inset-y-0 right-0 w-full max-w-full bg-white p-6 flex flex-col ${isClosing ? 'animate-slideout' : 'animate-slidein'
                    }`}
            >
                {/* Header with close button and logo */}
                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={handleClose}
                        className="text-gray-800 p-1"
                        aria-label="Close sidebar"
                    >
                        <IoMdClose size={24} />
                    </button>
                    <Image
                        src="/assets/icons/isotipo-rextie.svg"
                        alt="Rextie"
                        width={38}
                        height={38}
                        priority
                    />
                </div>

                {/* User Type Selector */}
                <div className="mb-8">
                    <UserTypeSelector className='text-gray-800' />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-6 text-lg">
                    <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">
                        Nosotros
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">
                        Blog
                    </a>
                    <div>
                        <button
                            className="text-gray-800 hover:text-gray-600 font-medium flex items-center w-full text-left justify-between"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                            Servicios
                            <IoIosArrowDown className={`text-[#fe6e01] transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isServicesOpen && (
                            <div className="mt-3 ml-4 flex flex-col space-y-4">
                                <a href="#" className="text-gray-600 text-base">
                                    Factoring
                                </a>
                                <a href="#" className="text-gray-600 text-base">
                                    Visa
                                </a>
                                <a href="#" className="text-gray-600 text-base">
                                    Empresas
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;