import { React, useState } from "react";

function UseStateTask() {
    const [count, setCount] = useState(0);
    return (
        <div className="w-100 vh-100 text-center d-flex justify-content-center align-items--center">
            <div className="w-50 m-auto row gap-2 d-flex justify-content-center align-items--center">
                <div className="col-3 bg-light rounded-5"><h1 className=" w-100  p-2">{count}</h1></div>
                <div className="col-sm-12 col-lg-12 col-md-12"><button className="btn btn-success w-100 p-2" onClick={() => { setCount(count + 1)}}>Add</button></div>
                <div className="col-sm-12 col-lg-12 col-md-12"><button className="btn btn-danger w-100 p-2" onClick={() => { setCount(count - 1)}}>Sub</button></div>
                <div className="col-sm-12 col-lg-12 col-md-12"><button className="btn btn-info w-100 p-2" onClick={() => { setCount(0)}}>Clear</button></div>
            </div>
        </div>
    );
}
export default UseStateTask;