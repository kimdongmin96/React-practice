import React from 'react';
import styled, {css} from 'styled-components';

let categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비지니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 9 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        over-flow-x: auto;
    }`;

const Category = styled.div`
        font-size: 1.125rem;
        cursor: pointer;
        white-space: pre;
        text-decoration: none;
        color: inherit;
        padding-botton: 0.25rem;

        &:hover {
            color: #495057;
        }

        ${props =>
            props.active && css`
                font-weight: 600;
                border-botton: 2px solid #22b8cf;
            color: #22b8cf;
            &:hover {
                color: #3bc9db;
            }`
        }

        & + & {
            margin-left: 1rem;
        }`;

const Categories = ({onSelect, category}) => {

    return (
        <CategoriesBlock>
            {categories.map(c => {
                <Category key={c.name} 
                active={category === c.name} 
                onClick={() => onSelect(c.name)}>
                    {c.text}
                </Category>
            })}
        </CategoriesBlock>
    );
};

export default Categories;