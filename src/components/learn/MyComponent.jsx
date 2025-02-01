import './style.css';

const MyComponent = () => {

    // const sosnune = 'sos nu 1';
    // const sosnune = 25;
    // const sosnune = true;
    // const sosnune = undefined;
    // const sosnune = null;
    // const sosnune = [1, 2, 3];
    const sosnune = {
        name: "sosnu ne",
        age: "24"
    }



    return (

        <>
            <div> {JSON.stringify(sosnune)} sos nu ne
            </div>
            <div>
                {console.log("SOS NU")}
            </div>
            <div className="child" style={{ borderRadius: "10px" }}>
            </div>
        </>
    );
}

export default MyComponent;