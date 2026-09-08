import {use, useState} from 'react'
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
        <div>
            <div>
                <h2>Plants: {plants.length}</h2>
                <h2>Cart: {cartPlants.length}</h2>
            </div>
            <div>
                {plants.map((plant) => (
                    <Plant key={plant.id} plant={plant} addToCart={addToCart} />
                ))}
            </div>
        </div>
    )


}