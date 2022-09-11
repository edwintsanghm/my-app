import { useState } from "react";
import { GoLocation } from "react-icons/go";
import { MdClose } from "react-icons/md";

import { useNavigate } from "react-router";

import Citywalk from "../imgs/cityWalk.svg";

import Loading from "./Loading";

const Form = () => {
  const [userInput, setUserInput] = useState({
    startLocation: "",
    endLocation: "",
    userMode: "",
  });
  const [showLoading, setShowLoading] = useState(false);


  const navigate = useNavigate();
  const onSubmit = (e) => {

    e.preventDefault();
    
    setShowLoading(true);
    
    setTimeout(() => {
      navigate("/list");
    }, 1000)

  };
  return (
    
    <>
      {showLoading && <Loading/>}
      {!showLoading && <>
      <section className="formHeader">
        <p className="formHeader__title">Find your RideAway</p>
        <img src={Citywalk} alt="city walk" className="formHeader__Img" />
      </section>
      <section className="DriverSection">
        <form className="passengerLocation" onSubmit={onSubmit}>
          <div className="LocationFinder">
            <div className="paggengerLocation__input">
              <GoLocation className="paggengerLocation__inputImg" />
              <input
                type="text"
                className="paggengerLocation__inputText"
                value={userInput.startLocation}
                placeholder="Starting location"
                onChange={(e) =>
                  setUserInput({ ...userInput, startLocation: e.target.value })
                }
                required
              />
              <MdClose className="paggengerLocation__inputClose" />
            </div>
            <div className="paggengerLocation__input">
              <GoLocation className="paggengerLocation__inputImg" />
              <input
                type="text"
                className="paggengerLocation__inputText"
                value={userInput.endLocation}
                placeholder="Ending Location"
                onChange={(e) =>
                  setUserInput({ ...userInput, endLocation: e.target.value })
                }
                required
              />
              <MdClose className="paggengerLocation__inputClose" />
            </div>
          </div>

          <div className="drivingMode">
            <button type="submit" className="drivingMode__Btn">Driver</button>
            <button type="submit" className="drivingMode__Btn">Passenger</button>
          </div>
          {/* <input type="submit" className="submitBtn" value="Continue" /> */}
        </form>
      </section>
      </>
      }
    </>
  );
};

export default Form;
