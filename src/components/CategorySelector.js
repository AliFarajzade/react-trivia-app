import React from 'react';
import categories from '../categories';

export default function CategorySelector({ changeQuestionType }) {
    const handleTypeChange = e => {
        changeQuestionType(e.target.value);
    };

    return (
        <div className="category-selector">
            <p>Select Category</p>
            <select onChange={handleTypeChange}>
                {categories.map((category, index) => (
                    <option key={index} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
