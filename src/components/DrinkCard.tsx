import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({ drink } : DrinkCardProps) {
    return (
        <>
            <h2>{drink.strDrink}</h2>
        </>
    )
}
