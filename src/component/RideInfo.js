import mapView from "../mapView.png";

import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import { faker } from "@faker-js/faker";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import {AiFillStar} from "react-icons/ai"
const ride = {
  info: {
    avatarUrl:
      "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg",
    name: faker.name.firstName(),
    gender: "gender",
    from: "Markham",
    to: "18 York Street",
    workday: "Mon - Fri",
    eta: "9:00 am",
    rating: 4,
  },
  carInfo: {
    model: "model",
    make: "Toyota",
    number: "CXR004",
    seats: 4,
    freeSeats: 2,
  },
};

const passengers = [
  {
    avatarUrl: faker.image.avatar(),
    name: faker.name.firstName(),
    gender: "gender",
    from: "Markham",
    to: "18 York Street",
    workday: "Mon - Fri",
    eta: "9:00 am",
    rating: 4,
  },
  {
    avatarUrl: faker.image.avatar(),
    name: faker.name.firstName(),
    gender: "gender",
    from: "700 Markham Road",
    to: "25 York Street",
    workday: "Mon, Tue, Thu, Fri",
    eta: "9:10 am",
    rating: 5,
  },
];
const myAvatarUrl = "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/851.jpg";

const RideInfo = () => {
    const displayRating = (score) => {
        let output = [];
        for(let i = 0; i< score; i++) {
            output.push(<AiFillStar/>)
        }
        return <>{output}</>;
    }
    return (
  <>
    <p className="subHeading rideInfo__Subheading">Your Ride Info</p>
    <Card>
      <CardHeader
        avatar={<Avatar src={ride.info.avatarUrl} />}
        title={ride.info.name}
        subheader={"From: " + ride.info.from + " To: " + ride.info.to}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <p>
            {ride.info.workday} | {ride.info.eta}
          </p>
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <p>
            Car Info: {ride.carInfo.make} | {ride.carInfo.number}
          </p>
          <p>
            Available Seats: {ride.carInfo.freeSeats - 1} / {ride.carInfo.seats}
          </p>
        </Typography>
      </CardContent>
    </Card>
    <p className="subHeading rideInfo__Subheading">Passengers</p>
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={faker.image.avatar()} />
        </ListItemAvatar>
        <ListItemText primary={"You"} />
      </ListItem>
      {passengers.map((passenger, index) => {
        return (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar src={passenger.avatarUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={passenger.name}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Rating
                  </Typography>
                  {displayRating(passenger.rating)}
                </>
              }
            />
          </ListItem>
        );
      })}
    </List>
    <img src={mapView} className="rideInfo__Img" alt="maps view" />
    <Stack className="action__Btn" spacing={2} direction="row">
      <Button variant="text">Share Your Ride</Button>
      <Button variant="text">Export to Calendar</Button>
    </Stack>
  </>
)};

export default RideInfo;

/* 

wokring backward to build solution
1. listen - list the customer statements, narrow the target group, 
2. define our own the problem statement (smart)
3. choose from top 3-5 ideas, state the pros and cons
4. think of different option user to reach the goal 
5. How to test it? find the KPI: gas usage? cost? comun time?

from the end consumer
how benefit bring to consumers

*/
