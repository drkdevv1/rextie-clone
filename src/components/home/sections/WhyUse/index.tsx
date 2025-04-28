"use client";
import React from 'react';
import CustomButton from '@/components/ui/CustomButton';
import { styles } from '@/styles/styles';
import ExchangeRateTable from './components/ExchangeRateTable';

const WhyUse = () => {
    return (
        <div className={`${styles.sectionContainer} py-12`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* Columna izquierda - Tabla comparativa (visible solo en desktop) */}
                <div className="hidden lg:block">
                    <ExchangeRateTable />
                </div>

                {/* Columna derecha */}
                <div className="flex flex-col">
                    <div className="flex items-center space-x-3 justify-center lg:justify-start">
                        <div className="w-3 h-3 rounded-full bg-[#00c8ff]"></div>
                        <h2 className="text-xl font-bold text-[#0032ff]">REXTIE BUSINESS</h2>
                    </div>

                    <h3 className="flex justify-center text-center lg:text-start lg:block font-bold text-[#0032ff] text-[27.2px] lg:text-[34px] px-5 lg:pr-5 lg:pl-0 mt-1 leading-10">
                        Tenemos un tipo de cambio exclusivo
                    </h3>

                    {/* Tabla comparativa (visible solo en móvil*/}
                    <div className="block lg:hidden mt-2">
                        <ExchangeRateTable />
                    </div>

                    <p className="flex justify-center lg:block text-gray-600 font-medium lg:text-[14px] text-[11.2px] px-[30px] lg:pr-[80px] lg:pl-0 my-4">
                        Cambia tus dólares a soles de forma segura, rápida y confiable con nuestra casa de cambio online.
                    </p>
                    <div className='flex justify-center lg:block'>
                        <CustomButton
                            text="Conocer más"
                            variant="primary"
                            onClick={() => console.log('Conocer más clicked')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUse;