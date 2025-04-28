import React from 'react';
import Image from 'next/image';
import { styles } from '@/styles/styles';

const Banks = () => {
    return (

        <div className={`${styles.sectionContainer} py-12`}>
            {/* Título de la sección */}
            <h2 className="text-[#01003c] text-center text-2xl md:text-3xl font-bold mb-8">
                Cambia al instante con todos los bancos en Perú
            </h2>

            {/* Cards de bancos*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Card izquierda: Transferencias inmediatas */}
                <div className="border border-[#d8dbe4] rounded-2xl p-5 min-[769px]:mt-[24.8px]">
                    <h3 className="text-lg font-bold mb-2 text-center">Transferencias inmediatas</h3>

                    <div className="mb-4 text-center">
                        <p className="font-bold text-[22px]">15 min.</p>
                        <p className="font-medium text-xs leading-4 mb-6">Todo el Perú</p>
                    </div>

                    {/* Logos de bancos */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <div className="flex gap-4">
                            <Image
                                src="/assets/images/banks/bcp.svg"
                                alt="Banco de Crédito del Perú"
                                width={60}
                                height={20}
                                className="object-contain"
                            />
                            <Image
                                src="/assets/images/banks/interbank.svg"
                                alt="Interbank"
                                width={60}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                        <div className="flex gap-4">
                            <Image
                                src="/assets/images/banks/banco-pichincha.svg"
                                alt="Banco Pichincha"
                                width={60}
                                height={20}
                                className="object-contain"
                            />
                            <Image
                                src="/assets/images/banks/banbif.svg"
                                alt="BanBif"
                                width={60}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Card derecha: Nuevo beneficio */}
                <div className="relative">
                    {/* Etiqueta de nuevo beneficio */}
                    <div className="bg-[#0025b2] text-white text-xs font-medium py-[6px] rounded-t-2xl text-center">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3 mr-1">
                                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                            </svg>
                            Nuevo beneficio
                        </div>
                    </div>

                    {/* Contenido del card */}
                    <div className="border border-[#d8dbe4] border-t-0 rounded-b-2xl p-5">
                        <h3 className="text-lg font-bold text-center mb-2">Transferencias inmediatas</h3>

                        {/* Tiempos de transferencia */}
                        <div className="mb-4 grid grid-cols-2 gap-2 text-center">
                            <div>
                                <p className="font-bold text-[22px]">30 min.</p>
                                <p className="text-gray-600 font-medium text-xs leading-4">Lima</p>
                            </div>
                            <div>
                                <p className="font-bold text-[22px]">24 horas</p>
                                <p className="text-gray-600 font-medium text-xs leading-4">Provincias</p>
                            </div>
                        </div>

                        {/* Logos de bancos*/}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <div className="flex gap-4">
                                <Image
                                    src="/assets/images/banks/bbva.svg"
                                    alt="BBVA"
                                    width={50}
                                    height={20}
                                    className="object-contain"
                                />
                                <Image
                                    src="/assets/images/banks/scotiabank.svg"
                                    alt="Scotiabank"
                                    width={77}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex gap-4">
                                <Image
                                    src="/assets/images/banks/banco-de-comercio-logo.svg"
                                    alt="Banco de Comercio"
                                    width={71}
                                    height={20}
                                    className="object-contain"
                                />
                                <Image
                                    src="/assets/images/banks/mibanco-logo.svg"
                                    alt="MiBanco"
                                    width={60}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <span className="text-[#0130f7] text-xs font-medium underline cursor-pointer">
                                Ver bancos disponibles
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banks;