import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
    return (
        <div className="article-list">
        {articles.map((article) => (
            <Article key={article.title} article={article} />
        ))}
        </div>
    );
};

export default ArticleList;


