import { useState } from "react"

export default function Batsman() {
    const[runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0)

    const handleSingle = () =>{
        const updatedRuns = runs+1;
        // runs = updatedRuns;
        setRuns(updatedRuns);
    }
    const handleFour = () =>{
        const updatedRuns4 = runs + 4;
        setRuns(updatedRuns4);
    }
    const handleSix = () =>{
        const updatedRuns6 = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes)
        setRuns(updatedRuns6);
    }

    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs > 50 && <p>Your score: 50</p>
            }
            <h2>Score: {runs}</h2>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}