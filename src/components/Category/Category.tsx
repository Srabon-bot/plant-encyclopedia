import type { CategoryType } from "../../types";

export interface CategoryProps {
    category: CategoryType;
    isSelected: boolean;
    onSelect: (id: number | null) => void;
}

const Category = ({ category, isSelected, onSelect }: CategoryProps) => {
    const handleClick = () => {
        onSelect(isSelected ? null : category.id);
    };

    return (
        <div
            className={`border-2 rounded-sm bg-surface p-5 flex flex-col transition-colors ${isSelected ? "border-accent" : "border-border"
                }`}
        >
            <h3 className="font-display text-lg text-text">
                {category.category_name}
            </h3>
            <p className="text-muted text-sm mt-2 flex-1">
                {category.small_description}
            </p>
            <button
                onClick={handleClick}
                className={`mt-4 px-4 py-2 text-sm font-medium rounded-sm self-start cursor-pointer transition-colors ${isSelected
                    ? "bg-accent text-bg hover:bg-accent-hover"
                    : "bg-text text-bg hover:bg-accent-hover"
                    }`}
            >
                {isSelected ? "Close category" : "Show plants"}
            </button>
        </div>
    );
}

export default Category;