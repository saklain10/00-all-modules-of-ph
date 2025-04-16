import { use, useState } from "react"
import Bottle from "../Bottle/bottle";
import './Bottles.css'
const Bottles = ({ bottlesPromise}) => {
    const bottles = use(bottlesPromise);

    const [cart, setCart] = useState([])
    const handleAddToCart = (bottle) => {
        console.log("Bottle will be added to the cart",  bottle)
    }
    // console.log(bottles)


    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    )
}

export default Bottles