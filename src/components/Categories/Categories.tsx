import { use } from 'react'
import type { CategoryType } from '../../types'
import Category from '../Category/Category';

export interface CategoriesProps {
    categoriesPromise: Promise<CategoryType[]>;
    selectedCategoryId: number | null;
    onSelectCategory: (id: number | null) => void;
}

export default function Categories({ categoriesPromise, selectedCategoryId, onSelectCategory }: CategoriesProps) {
    const categories = use(categoriesPromise);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
                <Category
                    key={category.id}
                    category={category}
                    isSelected={category.id === selectedCategoryId}
                    onSelect={onSelectCategory}
                />
            ))}
        </div>
    )
}