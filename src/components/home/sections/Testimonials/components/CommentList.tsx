"use client";
import React, { useState, useRef, useEffect } from 'react';
import Comment from './Comment';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { testimonials } from '@/utils/consts/testimonials';

const CommentList = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollable = () => {
        if (!scrollRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            checkScrollable();
            currentRef.addEventListener('scroll', checkScrollable);
            window.addEventListener('resize', checkScrollable);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', checkScrollable);
            }
            window.removeEventListener('resize', checkScrollable);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;

        const { clientWidth } = scrollRef.current;
        // Scroll exactly one card width
        const scrollAmount = clientWidth;

        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Desktop view - Grid layout */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id}>
                        <Comment
                            text={testimonial.text}
                            author={testimonial.author}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile view - Carousel */}
            <div className="md:hidden relative">
                {/* Carousel navigation buttons */}
                <div className="flex justify-end gap-2 mb-4">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`rounded-full p-2 ${canScrollLeft ? 'bg-[#1143f8] text-white' : 'bg-gray-200 text-gray-400'}`}
                        aria-label="Anterior testimonio"
                    >
                        <IoIosArrowBack size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`rounded-full p-2 ${canScrollRight ? 'bg-[#1143f8] text-white' : 'bg-gray-200 text-gray-400'}`}
                        aria-label="Siguiente testimonio"
                    >
                        <IoIosArrowForward size={20} />
                    </button>
                </div>

                {/* Scrollable comment container - Show one full card at a time */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="w-full flex-shrink-0 snap-center px-1"
                        >
                            <Comment
                                text={testimonial.text}
                                author={testimonial.author}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CommentList;