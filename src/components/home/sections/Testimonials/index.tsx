import React from 'react';
import { styles } from '@/styles/styles';
import CommentList from './components/CommentList';

const Testimonials = () => {
    return (
        <section className={`${styles.sectionContainer} py-16`}>
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-[#1143f8] text-3xl md:text-4xl font-bold mb-4">
                    Descubre lo que dicen nuestros clientes
                </h2>
                <p className="text-gray-600 text-normal">
                    Conoce de primera mano lo que es cambiar dinero con Rextie.
                </p>
            </div>

            <CommentList />
        </section>
    );
};

export default Testimonials;