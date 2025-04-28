import React from 'react';

interface UserTypeSelectorProps {
    className?: string;
}

const UserTypeSelector = ({ className }: UserTypeSelectorProps) => {
    return (
        <div className={`flex space-x-6 ${className}`}>
            <div className="relative">
                <span className="pb-1 font-bold">
                    Personas
                </span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#fe6e01]"></div>
            </div>

            <div className="relative">
                <span className="pb-1 font-medium">
                    Empresas
                </span>
            </div>
        </div>
    );
};

export default UserTypeSelector;