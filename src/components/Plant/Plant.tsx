import { useState } from "react";
import type { PlantType } from "../../types";

export interface PlantProps {
    plant: PlantType;
    addToCart: (plant: PlantType) => void;
}

const Plant = ({ plant, addToCart }: PlantProps) => {
    const [isAdded, setIsAdded] = useState<boolean>(false);

    const handleAddToCart = () => {
        setIsAdded(!isAdded);
        addToCart(plant);
    };

    return (
        <div className="border border-border bg-surface p-4 flex flex-col">
            <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-40 object-cover mb-4"
            />
            <h2 className="font-display text-lg text-text">{plant.name}</h2>
            <p className="text-muted text-sm mt-1 flex-1">{plant.description}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                <span className="text-accent font-medium">${plant.price}</span>
                <button
                    onClick={handleAddToCart}
                    className={`px-3 py-1.5 text-sm border transition-colors ${isAdded
                            ? "bg-accent border-accent text-bg"
                            : "border-border text-text hover:border-accent"
                        }`}
                >
                    {isAdded ? "Remove" : "Add to cart"}
                </button>
            </div>
        </div>
    );
}

export default Plant;

