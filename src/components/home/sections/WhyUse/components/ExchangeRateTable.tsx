import React from 'react';
import Image from 'next/image';
import { BsBank } from 'react-icons/bs';

const ExchangeRateTable = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm max-w-[400px] w-full">
                    {/* Encabezado de la tabla */}
                    <div className="bg-[#0032ff] text-white p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/assets/icons/rextie-icon-redesign.svg"
                                alt="Rextie"
                                width={100}
                                height={32}
                            />
                        </div>
                        <div className="flex space-x-6 text-xs font-normal">
                            <div className="text-center">
                                <span>Compra:</span>
                                <br />
                                <div className="font-bold">s/ 3.6515</div>
                            </div>
                            <div className="text-center">
                                <span>Venta:</span>
                                <br />
                                <div className="font-bold">s/ 3.6815</div>
                            </div>
                        </div>
                    </div>

                    {/* Cuerpo de la tabla */}
                    <div className="divide-y divide-gray-200">
                        {/* Fila SUNAT */}
                        <div className="flex items-center justify-between p-4 font-medium text-xs">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src="/assets/images/banks/sunat.svg"
                                    alt="SUNAT"
                                    width={80}
                                    height={24}
                                />
                            </div>
                            <div className="flex space-x-8">
                                <div className="w-16 text-center text-gray-500">s/ 3.6620</div>
                                <div className="w-16 text-center text-gray-500">s/ 3.6720</div>
                            </div>
                        </div>

                        {/* Fila Bancos */}
                        <div className="flex items-center justify-between p-4 font-medium text-xs">
                            <div className="flex items-center space-x-2">
                                <BsBank className="text-gray-700 text-lg" />
                                <span className="font-medium text-gray-800">Bancos**</span>
                            </div>
                            <div className="flex space-x-8">
                                <div className="w-16 text-center text-gray-500">s/ 3.6740</div>
                                <div className="w-16 text-center text-gray-500">s/ 3.7120</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="flex justify-center lg:block mt-3 text-sm text-gray-500 max-w-[400px] w-full">
                    **Precios referenciales
                </div>
            </div>
        </>
    );
};

export default ExchangeRateTable;