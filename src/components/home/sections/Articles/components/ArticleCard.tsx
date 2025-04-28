interface ArticleCardProps {
    article: {
        id: number;
        company: string;
        logo: string;
        excerpt: string;
        url: string;
    };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    return (
        <div className="bg-white p-2 flex flex-col">
            <p className="text-gray-600 flex-grow">{article.excerpt}</p>
        </div>
    );
};

export default ArticleCard;