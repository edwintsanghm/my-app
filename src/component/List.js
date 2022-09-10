import { Link } from "react-router-dom";
import React, { useState } from 'react';
/*
    List in Driver View
    - Your Ride
        - Your Profile Info
        - Avaiable seats
        
    List in Passenger View
*/
const data = [{
    profile:{
        info: {name: "Edwin", gender:"gender", from: "Markham", To: "18 York Street", workday:[1,2,3,4,5], eta: "9:00 am"},
        carInfo: {model: "model", make: "make", number: "CXR004", seats: 4, freeSeats: 4},
    },
    passengerList:[
        {name: "Edwin", gender:"gender", from: "Markham", To: "18 York Street", workday:[1,2,3,4,5], eta: "9:00 am"},
        {name: "Gordon", gender:"gender", from: "High Park", To: "18 York Street", workday:[1,2,3,4,5], eta: "9:00 am"},
        {name: "Nonso", gender:"gender", from: "Scarborough Town Centre", To: "Don Mills Station", workday:[1,2,3,4,5], eta: "9:00 am"},
        {name: "Char", gender:"gender", from: "Markham", To: "18 York Street", workday:[1,2,3,4,5], eta: "9:00 am"},
    ]
}
    ];

const List = () => {
    const [showFilter, setShowFilter] = useState(false);
return (
    <>
        <button type="button" onClick={()=> setShowFilter(!showFilter)}>Filter Results</button>
        {
            showFilter && <>
            <div >
                <h6>Days</h6>

                <label> Mon
                <input
                    name="monday"            
                    type="checkbox"
                    />
                </label>
                <br/>
                <label> Tue
                <input
                    name="tuesday"            
                    type="checkbox"
                    />
                </label>
                <br/>
                <label> Wed
                <input
                    name="wednesday"            
                    type="checkbox"
                    />
                </label>
                <br/>
                <label> Thu
                <input
                    name="thursday"            
                    type="checkbox"
                    />
                </label>
                <br/>
                <label> Fri
                <input
                    name="friday"            
                    type="checkbox"
                    />
                </label>
                <br/>
                <label> Sat
                <input
                    name="saturaday"            
                    type="checkbox"
                    />
                </label>
                <br/>
                <label> Sun
                <input
                    name="sunday"            
                    type="checkbox"
                    />
                </label>
                <br/>
            </div>
            <div >
            <h6>Time</h6>
            <label> 
                ETA
            <input
                name="eta"            
                type="number"
                />
            </label>
            
            <br/>
        </div>
        </>
        }

        <>
        <h4>Your Request</h4>
        <div>
            <p>
                <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" width="50px"/>
            </p>
            <div>
                <p>Name: Edwin</p>
                <p>From: 1800 Richmond Hill</p>  
                <p>To: 18 York Street</p>
            </div>
        </div>

        <h4>Available Rides</h4>
        <div>
            <p>
                <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" width="50px"/>
            </p>
            <div>
                <p>Name: Edward</p>
                <p>From: 1800 Markham Road</p>  
                <p>To: 25 York Street</p>
            </div>
            <div>
                <p>Driver's Rating: ****</p>
                <p>Car Model: Toyota</p>  
                <p>Number: CVR 001</p>
            </div>
            <button><Link to="/ride">Request</Link></button>
        </div>
        <div>
            <p>
                <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" width="50px"/>
            </p>
            <div>
                <p>Name: Peter</p>
                <p>From: 1800 Richmond Hill</p>  
                <p>To: 900 King Street</p>
            </div>
            <div>
                <p>Driver's Rating: ****</p>
                <p>Car Model: Honda</p>  
                <p>Number: CVR 011</p>
            </div>
            <button><Link to="/ride">Request</Link></button>
        </div>
        <div>
            <p>
                <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" width="50px"/>
            </p>
            <div>
                <p>Name: Mary</p>
                <p>From: North York</p>  
                <p>To: 30 York Street</p>
            </div>
            <div>
                <p>Driver's Rating: ****</p>
                <p>Car Model: Toyota</p>  
                <p>Number: CXV 111</p>
            </div>
            <button><Link to="/ride">Request</Link></button>
        </div>

    </>

</>

)
}


export default List;
