import Category from '../category-item/category-item.component';
import './category-main.styles.scss'



  const CategoryMain = ({categories}) => {
    return (
        <div className='categories-container'>
            {categories.map((category) => 
                <Category key={categories.id} categories={category}/>)}
        </div>
    )
  }

  export default CategoryMain;