import React from 'react';
import { styles } from '@/styles/styles';
import Card from './components/Card';

const Amounts = () => {
    return (
        <section className={`${styles.sectionContainer} py-16`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left column - Text */}
                <div className="flex flex-col lg:max-w-md justify-center">
                    <h2 className="text-[#1143f8] text-3xl md:text-4xl text-center lg:text-start font-bold mb-6">
                        Somos la casa de cambio online líder del Perú
                    </h2>
                    <p className="text-gray-700 text-sm md:text-lg">
                        ¡Tenemos el más alto volumen de dólares cambiados! Las personas consideran a Rextie como la casa de cambio online más confiable.
                    </p>
                </div>

                {/* Right column - Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card
                        iconSrc="/assets/images/amounts/money-blue-icon.svg"
                        iconAlt="Dólares negociados"
                        title="+ 6 mil millones"
                        description="de dólares negociados"
                    />

                    <Card
                        iconSrc="/assets/images/amounts/user-blue-icon.svg"
                        iconAlt="Clientes"
                        title="+ 200 mil clientes"
                        description="confían en nosotros"
                    />

                    <Card
                        iconSrc="/assets/images/amounts/save-money-blue-icon.svg"
                        iconAlt="Soles ahorrados"
                        title="+ 282 millones"
                        description="de soles ahorrados"
                    />
                </div>
            </div>
        </section>
    );
};

export default Amounts;