import ProductCard from '../product-card/product-card.component'
import './category-preview.styles.scss'

const CategoryPreview = ({title, products }) => {
    return(
        <div className='category-preview-container'>
            <h1><span className='title'>{title}</span></h1>
            <div className='preview'>
                {products
                .filter((_, idx) => idx < 4)
                .map((product) => <ProductCard key={title} title={title} product={product}/>)
}
            </div>
        </div>
    )
}
export default CategoryPreview;