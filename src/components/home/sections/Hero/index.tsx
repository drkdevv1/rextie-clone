import React from 'react';
import Image from 'next/image';
import { styles } from '@/styles/styles';
import Navigator from '@/components/layout/Navigator';
import UserTypeSelector from '@/components/layout/UserTypeSelector';
import ExchangeCalculator from './components/ExchangeCalculator';


const Hero = () => {
    return (
        <section className="relative text-white overflow-hidden min-h-[713px]">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/banner-person.webp"
                    alt="Hero background"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>

            {/* Contenido principal */}
            <div className="relative z-10">
                <div className={`${styles.sectionContainer} pt-4`}>
                    <div className='hidden sm:block'>
                        <UserTypeSelector className='text-white' />
                    </div>
                    <Navigator />
                </div>

                {/* Contenido del hero */}
                <div className={`${styles.sectionContainer} pt-12 pb-16`}>
                    <div className="flex flex-col gap-6">
                        {/* Grid para contenido principal */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-48 items-center">
                            <div className="flex flex-col gap-5">
                                <h1 className="text-3xl md:text-5xl text-center xl:text-start font-bold leading-tight">
                                    La casa de cambio online líder del Perú
                                </h1>

                                <p className="text-[16px] text-center xl:text-start">
                                    Celebramos un nuevo récord: 6 mil millones de dólares cambiados para nuestros clientes
                                </p>

                                {/* Logos*/}
                                <div className="flex flex-wrap items-center justify-center xl:justify-start gap-6 mt-8">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src="/assets/images/hero/visa-logo.svg"
                                            alt="Visa"
                                            width={87}
                                            height={28}
                                        />
                                        <span className="text-xs font-medium">
                                            Aliado <br /> Estratégico
                                        </span>
                                    </div>

                                    <Image
                                        src="/assets/images/hero/citi-white.svg"
                                        alt="Citi"
                                        width={50}
                                        height={32}
                                    />

                                    <div className="flex items-center gap-2">
                                        <Image
                                            src="/assets/images/hero/rpp-home.svg"
                                            alt="RPP"
                                            width={48}
                                            height={48}
                                        />
                                        <span className="text-xs font-medium">
                                            Inversionistas <br />  estratégicos
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 xl:mt-6">
                                        <Image
                                            src="/assets/images/hero/iso-white.png"
                                            alt="ISO 27001"
                                            width={71}
                                            height={40}
                                        />
                                        <span className="text-xs font-medium">
                                            Certificados con ISO 27001
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center mt-4 xl:justify-end xl:mt-0">
                                <ExchangeCalculator />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;