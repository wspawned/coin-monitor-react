import { useState } from "react";
import Result from "./Result";

const Monitor = () => {

    const [param, setParam] = useState("")

    return(
        <div className="monitor" >
            <h1>Coin Monitor</h1>

            <div className="search" >
                <input 
                placeholder="Search a Coin"
                value= {param}
                onChange= { (e) => setParam(e.target.value)}
                ></input>

            </div>

            <div className="table" >
                <Result
                param= {param} />
            </div>
        </div>
    )
}

export default Monitor;