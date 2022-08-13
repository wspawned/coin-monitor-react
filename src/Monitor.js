import Result from "./Result";

const Monitor = () => {


    return(
        <div className="monitor" >
            <h1>Coin Monitor</h1>

            <div className="search" >
                <p>search input goes here</p>
            </div>

            <div className="table" >
                <Result />
            </div>
        </div>
    )
}

export default Monitor;