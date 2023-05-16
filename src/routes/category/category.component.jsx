import { useParams } from 'react-router-dom';
import { CategoryContainer } from './category.styles'
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';


const Category = () => {
    const { category } = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducs] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducs(categoriesMap[category])
    }, [Category, categoriesMap]);

    return (
        <CategoryContainer>
            {products &&
                products.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </CategoryContainer>
    )
}
export default Category;