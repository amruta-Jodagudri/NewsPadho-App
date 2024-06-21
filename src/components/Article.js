import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const Article = ({ article }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.some(fav => fav.title === article.title));
    }, [article.title]);

    const handleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            const updatedFavorites = favorites.filter(fav => fav.title !== article.title);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            favorites.push(article);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="article-card">
            <img src={!article.urlToImage ? "https://www.mining.com/wp-content/uploads/2023/06/mining-moon-nasa.jpeg" : article.urlToImage} alt={article.title} />
            <div className="article-info">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p className="article-source">{article.source.name}</p>
                <p className="card-text"><small>By {!article.author?"Unknown":article.author}</small></p>
                <div className="article-footer">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                    <button onClick={handleFavorite}>
                        {isFavorite ? <FaHeart color='red'/> : <FaHeart color='gray'/>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Article;
