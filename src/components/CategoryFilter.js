import React, { useState } from 'react';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleCategorySelect = (category) => {
        onSelectCategory(category);
        setDropdownOpen(false);
    };

    return (
        <div className="category-filter">
            <div className="dropdown">
                <button className="dropdown-toggle" onClick={handleDropdownToggle}>
                    Categories
                </button>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={selectedCategory === category ? 'active' : ''}
                            onClick={() => handleCategorySelect(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="button-group">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
