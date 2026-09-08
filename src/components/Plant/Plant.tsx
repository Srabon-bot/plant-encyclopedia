import { useState } from "react";
import type { PlantType } from "../../types";
import "./Plant.css";

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
        <div className="Plant-card">
            <h2>{plant.name}</h2>
            <p>Price: ${plant.price}</p>
            <img src={plant.image} alt={plant.name} />
            <p>{plant.description}</p>
             <button onClick={handleAddToCart}>
                {isAdded ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
}

export default Plant;
    
