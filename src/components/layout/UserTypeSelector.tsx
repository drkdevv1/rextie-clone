import React from 'react';

const UserTypeSelector = () => {
    // Versión estática sin estado ni funcionalidad
    return (
        <div className="flex space-x-6">
            <div className="relative">
                <span className="pb-1 text-white font-bold">
                    Personas
                </span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#fe6e01]"></div>
            </div>

            <div className="relative">
                <span className="pb-1 text-white font-medium">
                    Empresas
                </span>
            </div>
        </div>
    );
};

export default UserTypeSelector;