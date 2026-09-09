import { use, useState } from 'react'
import type { PlantType } from '../../types'
import Plant from '../Plant/Plant'

export interface PlantsProps {
    plantsPromise: Promise<PlantType[]>;
}

export default function Plants({ plantsPromise }: PlantsProps) {
    const plants = use(plantsPromise);
    const [cartPlants, setCartPlants] = useState<PlantType[]>([]);

    const addToCart = (plant: PlantType) => {
        const newCartPlants = [...cartPlants];
        const index = newCartPlants.findIndex((p) => p.id === plant.id);
        if (index === -1) {
            newCartPlants.push(plant);
        } else {
            newCartPlants.splice(index, 1);
        }
        setCartPlants(newCartPlants);
    }

    return (
        <div className="mt-10">
            <div className="flex items-baseline justify-between border-b border-border pb-3 mb-6">
                <h2 className="font-display text-xl">{plants.length} plants</h2>
                <span className="text-muted text-sm">Cart: {cartPlants.length}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {plants.map((plant) => (
                    <Plant key={plant.id} plant={plant} addToCart={addToCart} />
                ))}
            </div>
        </div>
    )
}