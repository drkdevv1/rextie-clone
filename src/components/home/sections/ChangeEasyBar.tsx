"use client";
import React from 'react';
import { styles } from '@/styles/styles';
import CustomButton from '@/components/ui/CustomButton';

const ChangeEasyBar = () => {
    return (
        <div className="w-full bg-[#0133ff] py-6">
            <div className={`${styles.sectionContainer}`}>
                <div className="flex lg:flex-row flex-col items-center justify-between gap-4 lg:gap-6">
                    <h2 className="text-white font-bold text-xl md:text-2xl text-center">
                        Cambia tu dinero rápido y seguro
                    </h2>

                    <div className="">
                        <CustomButton
                            text="Cambia aquí"
                            variant="secondary"
                            className="whitespace-nowrap"
                            onClick={() => console.log('Cambia aquí clicked')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeEasyBar;