import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

/*
    List in Driver View
    - Your Ride
        - Your Profile Info
        - Avaiable seats
        
    List in Passenger View
*/

const availableRides = [
    {
        info: {avatarUrl: faker.image.avatar(), name: faker.name.firstName(), gender:"gender", from: "Markham", to: "18 York Street", workday:[1,2,3,4,5], eta: "9:00 am", rating: 4},
        carInfo: {model: "model", make: "Toyota", number: "CXR004", seats: 4, freeSeats: 4},  
    },
    {
        info: {avatarUrl: faker.image.avatar(), name: faker.name.firstName(), gender:"gender", from: "700 Markham Road", to: "25 York Street", workday:[1,2,4,5], eta: "9:10 am", rating: 5},
        carInfo: {model: "model", make: "Honda", number: "XVE999", seats: 5, freeSeats: 2},  
    },
    {
        info: {avatarUrl: faker.image.avatar(), name: faker.name.firstName(), gender:"gender", from: "900 Markham Road", to: "30 York Street", workday:[2,4,5], eta: "9:30 am", rating: 5},
        carInfo: {model: "model", make: "Subaru", number: "VZP204", seats: 4, freeSeats: 3},  
    },
    {
        info: {avatarUrl: faker.image.avatar(), name: faker.name.firstName(), gender:"gender", from: "900 Markham Road", to: "30 King Street", workday:[2,4,5,6,7], eta: "8:40 am", rating: 5},
        carInfo: {model: "model", make: "Subaru", number: "VZP804", seats: 4, freeSeats: 1},  
    }
];

const ResultList = () => {
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
        <ListItem>
            <Avatar src={faker.image.avatar()} />
            <div>
                <p>Name: Edwin</p>
                <p>From: 1800 Richmond Hill</p>  
                <p>To: 18 York Street</p>
            </div>
        </ListItem>

        <h4>Available Rides</h4>

        <List>
        {
            availableRides.map((ride, index) => {
                return <ListItem key={index}>
                    <Avatar src={ride.info.avatarUrl} />
                    <div>
                        <p>{ride.info.name}</p>
                        <p>{ride.info.from}</p>  
                        <p>{ride.info.to}</p>
                        <p>{ride.info.workday}</p>
                        <p>{ride.info.eta}</p>
                    </div>
                    <div>
                        <p>{ride.carInfo.make}</p>
                        <p>{ride.carInfo.number}</p>
                        <p>{ride.carInfo.freeSeats} / {ride.carInfo.seats}</p>
                    </div>
                    <ListItemButton><Link to="/ride">Request</Link></ListItemButton>
                </ListItem>
            })
        }
        </List>
    </>

</>

)
}


export default ResultList;
