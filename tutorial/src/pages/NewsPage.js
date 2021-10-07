import React, {useState, useCallback} from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({match}) => {
    const [category, setCategory] = useState(match.params.category || 'all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <div>
            <Categories onSelect={onSelect} category={category} />
            <NewsList category={category} />
        </div>
    );
};

export default NewsPage;