import { Link } from "react-router-dom";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
/*
    List in Driver View
    - Your Ride
        - Your Profile Info
        - Avaiable seats
        
    List in Passenger View
*/

const availableRides = [
  {
    info: {
      avatarUrl:
        "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg",
      name: faker.name.firstName(),
      gender: "gender",
      from: "Markham",
      to: "18 York Street",
      workday: [1, 2, 3, 4, 5],
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
    price: 10,
  },
  {
    info: {
      avatarUrl: faker.image.avatar(),
      name: faker.name.firstName(),
      gender: "gender",
      from: "700 Markham Road",
      to: "25 York Street",
      workday: [1, 2, 4, 5],
      eta: "9:10 am",
      rating: 5,
    },
    carInfo: {
      model: "model",
      make: "Honda",
      number: "XVE999",
      seats: 5,
      freeSeats: 2,
    },
    price: 14,
  },
  {
    info: {
      avatarUrl: faker.image.avatar(),
      name: faker.name.firstName(),
      gender: "gender",
      from: "900 Markham Road",
      to: "30 York Street",
      workday: [2, 4, 5],
      eta: "9:30 am",
      rating: 5,
    },
    carInfo: {
      model: "model",
      make: "Subaru",
      number: "VZP204",
      seats: 4,
      freeSeats: 3,
    },
    price: 18,
  },
  {
    info: {
      avatarUrl: faker.image.avatar(),
      name: faker.name.firstName(),
      gender: "gender",
      from: "900 Markham Road",
      to: "30 King Street",
      workday: [2, 4, 5, 6, 7],
      eta: "8:40 am",
      rating: 5,
    },
    carInfo: {
      model: "model",
      make: "Subaru",
      number: "VZP804",
      seats: 4,
      freeSeats: 1,
    },
    price: 10,
  },
];

const ResultList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const myAvatarUrl =
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/851.jpg";

  let navigate = useNavigate();

  function handleJoinClick() {
    setShowLoading(true);
    setTimeout(() => {
      navigate("/ride");
    }, 2000);
  }

  const displayWorkday = (workdaysArr) => (
    <Stack direction="row" spacing={1}>
      {workdaysArr.map((workday) => {
        switch (workday) {
          case 1:
            return <span>Mon</span>;
          case 2:
            return <span>Tue</span>;
          case 3:
            return <span>Wed</span>;
          case 4:
            return <span>Thu</span>;
          case 5:
            return <span>Fri</span>;
          case 6:
            return <span>Sat</span>;
          case 7:
            return <span>Sun</span>;
          default:
            return <></>;
        }
      })}
    </Stack>
  );

  return (
    <>
      {showLoading && <Loading />}

      {!showLoading && (
        <>
          <button type="button" onClick={() => setShowFilter(!showFilter)}>
            Filter Results
          </button>
          {showFilter && (
            <>
              <div>
                <h6>Days</h6>
                <Stack direction="row" spacing={2}>
                  <label>
                    Mon
                    <input name="monday" type="checkbox" />
                  </label>
                  <label>
                    Tue
                    <input name="tuesday" type="checkbox" />
                  </label>
                  <label>
                    Wed
                    <input name="wednesday" type="checkbox" />
                  </label>
                  <label>
                    Thu
                    <input name="thursday" type="checkbox" />
                  </label>
                  <label>
                    Fri
                    <input name="friday" type="checkbox" />
                  </label>
                  <label>
                    Sat
                    <input name="saturaday" type="checkbox" />
                  </label>
                  <label>
                    Sun
                    <input name="sunday" type="checkbox" />
                  </label>
                </Stack>
              </div>
              <div>
                <h6>Time</h6>
                <label>
                  ETA
                  <input name="eta" type="number" />
                </label>

                <br />
              </div>
            </>
          )}

          <h4 className="subHeading">Your Request</h4>
          <Card>
            <CardHeader
              avatar={<Avatar src={myAvatarUrl} />}
              title={
                <>
                  <Typography variant="body2" color="text.secondary">
                    800 Markham Road
                  </Typography>{" "}
                  to
                  <Typography variant="body2" color="text.secondary">
                    18 York Street
                  </Typography>
                </>
              }
            />
          </Card>
          <List>
            <div className="RiderInfo__Items">
              <h4 className="subHeading">Available Rides</h4>
              {availableRides.map((ride, index) => {
                return (
                  <ListItem key={index} className="listItem">
                    <Avatar
                      src={ride.info.avatarUrl}
                      className="listItem__Img"
                    />
                    <ListItemText
                      primary={ride.info.from + " to " + ride.info.to}
                      secondary={
                        <>
                          <p>{ride.info.eta}</p>
                          <p>{displayWorkday(ride.info.workday)}</p>
                          <p>CAD$ {ride.price}</p>
                        </>
                      }
                    />
                    <ListItemButton
                      className="listItem__Btn"
                      onClick={handleJoinClick}
                    >
                      Join
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </div>
          </List>
        </>
      )}
    </>
  );
};

export default ResultList;
