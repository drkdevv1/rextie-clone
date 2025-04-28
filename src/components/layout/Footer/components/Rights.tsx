import React from 'react';
import { styles } from '@/styles/styles';

const Rights = () => {
    return (
        <footer className="bg-[#000197] py-4">
            <div className={`${styles.sectionContainer}`}>
                <div className="flex justify-center">
                    <p className="text-white text-sm text-center">
                        ©2025 Rextie: La casa de cambio online, Líder del Perú. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Rights;