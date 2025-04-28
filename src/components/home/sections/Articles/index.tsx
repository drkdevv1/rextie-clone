"use client";
import { useState, useRef } from 'react';
import { styles } from '@/styles/styles';
import { articles } from '@/utils/consts/articles';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import YouTubeEmbed from './components/YoutubeEmbed';
import ArticleCard from './components/ArticleCard';

const Articles = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeArticle, setActiveArticle] = useState(articles[0]);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollActiveArticleIntoView = (index: number) => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const items = container.querySelectorAll('[data-article-item]');

        if (items[index]) {
            const item = items[index] as HTMLElement;
            const containerLeft = container.scrollLeft;
            const containerWidth = container.clientWidth;
            const itemLeft = item.offsetLeft;
            const itemWidth = item.offsetWidth;

            // Check if item is not fully visible
            if (itemLeft < containerLeft || itemLeft + itemWidth > containerLeft + containerWidth) {
                container.scrollTo({
                    left: itemLeft - (containerWidth - itemWidth) / 2, // Center the item
                    behavior: 'smooth'
                });
            }
        }
    };

    const navigateArticle = (direction: 'left' | 'right') => {
        const newIndex = direction === 'left'
            ? Math.max(0, activeIndex - 1)
            : Math.min(articles.length - 1, activeIndex + 1);

        setActiveIndex(newIndex);
        setActiveArticle(articles[newIndex]);

        scrollActiveArticleIntoView(newIndex);
    };

    return (
        <section className={`${styles.sectionContainer} py-16`}>
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-[#1143f8] text-3xl md:text-4xl font-bold mb-4">
                    Rextie en los medios
                </h2>
                <p className="text-gray-600 text-normal">
                    Encuentra artículos y noticias en medios que hablan de nuestra casa de cambio online.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {/* Video Section */}
                <div className="h-auto">
                    <YouTubeEmbed videoId="j3s5nfNl12Q" />
                </div>

                {/* Articles Section */}
                <div className="flex flex-col">
                    <div className="relative">
                        <div className="flex items-center">
                            <button
                                onClick={() => navigateArticle('left')}
                                disabled={activeIndex === 0}
                                className={`rounded-full p-2 mr-2 ${activeIndex > 0
                                    ? 'bg-[#1143f8] text-white'
                                    : 'bg-gray-200 text-gray-400'
                                    }`}
                                aria-label="Artículo anterior"
                            >
                                <IoIosArrowBack size={20} />
                            </button>

                            <div
                                ref={scrollRef}
                                className="flex-1 flex overflow-x-auto hide-scrollbar pb-4 gap-4"
                            >
                                {articles.map((article) => (
                                    <div
                                        key={article.id}
                                        data-article-item
                                        className={`flex-shrink-0 p-2 border-2 rounded-lg transition-all
                                        ${activeArticle.id === article.id
                                                ? 'border-[#1143f8] bg-blue-50'
                                                : 'border-gray-200'
                                            }`}
                                    >
                                        <div className="w-[100px] h-[40px] flex items-center justify-center">
                                            <img
                                                src={article.logo}
                                                alt={`${article.company} logo`}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => navigateArticle('right')}
                                disabled={activeIndex === articles.length - 1}
                                className={`rounded-full p-2 ml-2 ${activeIndex < articles.length - 1
                                    ? 'bg-[#1143f8] text-white'
                                    : 'bg-gray-200 text-gray-400'
                                    }`}
                                aria-label="Siguiente artículo"
                            >
                                <IoIosArrowForward size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Active Article Content */}
                    <div className="flex-grow flex flex-col">
                        <ArticleCard article={activeArticle} />
                        <div className="px-2 text-[#0133ff] font-bold">
                            <a href={activeArticle.url} target="_blank" rel="noopener noreferrer">
                                Ver noticia
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Articles;