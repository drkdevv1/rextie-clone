import React from 'react';

interface CustomButtonProps {
    text: string;
    variant: 'primary' | 'secondary';
    onClick?: () => void;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    text,
    variant = 'primary',
    onClick,
    className = ''
}) => {
    const baseStyles = "py-[14px] px-6 rounded-xl font-bold text-[16px] transition-colors duration-200 ease-in-out flex items-center justify-center";

    const variantStyles = {
        primary: "bg-[#0032ff] text-white hover:bg-[#002bd9]",
        secondary: "bg-white text-[#0032ff] border border-[#0032ff] hover:bg-gray-50"
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default CustomButton;