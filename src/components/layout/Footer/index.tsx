import React from 'react';
import Image from 'next/image';
import { styles } from '@/styles/styles';
import Rights from './components/Rights';
import { FaLinkedin, FaFacebookSquare, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-[#1E1E1E] text-xs">
            <div className={`${styles.sectionContainer} py-10 grid grid-cols-1 md:grid-cols-5 gap-8`}>
                {/* Logo + RUC */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        {/* Logo de Rextie SVG */}
                        <Image
                            src="/assets/icons/logo-rextie.svg"
                            alt="Rextie Logo"
                            width={90}
                            height={28}
                        />
                    </div>
                    <p className="text-gray-600">Rextie S.A.C.</p>
                    <p className="font-bold text-gray-600">RUC 20601030013</p>
                    {/* Redes sociales con React Icons */}
                    <div className="flex gap-4 mt-4">
                        <FaLinkedin className="text-gray-600 text-xl hover:text-[#0133ff] cursor-pointer" />
                        <FaFacebookSquare className="text-gray-600 text-xl hover:text-[#0133ff] cursor-pointer" />
                        <FaYoutube className="text-gray-600 text-xl hover:text-[#0133ff] cursor-pointer" />
                        <FaTiktok className="text-gray-600 text-xl hover:text-[#0133ff] cursor-pointer" />
                        <FaInstagram className="text-gray-600 text-xl hover:text-[#0133ff] cursor-pointer" />
                    </div>
                </div>

                {/* Servicios */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold mb-2 text-sm">Servicios</h4>
                    <a href="#" className="text-gray-600 hover:underline">Rextie Business</a>
                    <a href="#" className="text-gray-600 hover:underline">Rextie Factoring</a>
                    <a href="#" className="text-gray-600 hover:underline">Confirming</a>
                    <div className="flex items-center gap-1">
                        <a href="#" className="text-gray-600 hover:underline">Visa</a>
                        <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded">Nuevo</span>
                    </div>
                </div>

                {/* Recursos */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold mb-2 text-sm">Recursos</h4>
                    <a href="#" className="text-gray-600 hover:underline">Blog</a>
                    <a href="#" className="text-gray-600 hover:underline">Tipo de cambio</a>
                    <a href="#" className="text-gray-600 hover:underline">App para cambiar dolares</a>
                    <a href="#" className="text-gray-600 hover:underline">Cambio de Dólar a Soles</a>
                    <a href="#" className="text-gray-600 hover:underline">Precio del Dólar</a>
                </div>

                {/* Soporte */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold mb-2 text-sm">Soporte</h4>
                    <a href="#" className="text-gray-600 hover:underline">Preguntas frecuentes</a>
                    <a href="#" className="text-gray-600 hover:underline">Cómo cambiar dolares con REXTIE</a>
                    <a href="#" className="text-gray-600 hover:underline">Términos y Condiciones</a>
                    <a href="#" className="text-gray-600 hover:underline">Política de Cookies</a>
                    <a href="#" className="text-gray-600 hover:underline">Política de Privacidad</a>
                    <a href="#" className="text-gray-600 hover:underline">Mapa del sitio</a>
                </div>

                {/* Contacto */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold mb-2 text-sm">Contacto</h4>
                    <a href="mailto:info@rextie.com" className="text-[#0133ff] font-bold hover:underline">info@rextie.com</a>
                    <p className="text-gray-600">T. 01 700 3301</p>
                    <p className="text-gray-600">C. 963 896 793</p>
                    <p className="text-gray-600 mt-2 font-semibold">Lunes a Viernes:</p>
                    <p className="text-gray-600">8:30 am. – 7:00 pm.</p>
                    <p className="text-gray-600 font-semibold mt-2">Sábados:</p>
                    <p className="text-gray-600">9:00 am. – 3:00 pm.</p>
                    <p className="mt-2 text-gray-600">Av. José Gálvez</p>
                    <p className="text-gray-600">Barrenechea 566, Of. 101,</p>
                    <p className="text-gray-600">Urb. Corpac, San Isidro, Lima.</p>
                    <div className="mt-4 cursor-pointer">
                        <Image
                            src="/assets/images/footer/book.png"
                            alt="Libro de Reclamaciones"
                            width={180}
                            height={45}
                            className="hover:opacity-90"
                        />
                    </div>
                </div>
            </div>

            {/* Derechos reservados */}
            <Rights />
        </footer>
    );
};

export default Footer;