import { useState } from "react";
import { GoLocation } from "react-icons/go";
import { MdClose } from "react-icons/md";

import { useNavigate } from "react-router";

const Form = () => {
  const [userInput, setUserInput] = useState({
    startLocation: "",
    endLocation: "",
  });
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/list");
  };
  return (
    <section className="DriverSection">
      <p className="title">Find your RideAway</p>
      <form className="passengerLocation" onSubmit={onSubmit}>
        <div className="LocationFinder">
          <div className="paggengerLocation__input">
            <GoLocation className="paggengerLocation__inputImg" />
            <input
              type="text"
              className="paggengerLocation__inputText"
              value={userInput.startLocation}
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
              onChange={(e) =>
                setUserInput({ ...userInput, endLocation: e.target.value })
              }
              required
            />
            <MdClose className="paggengerLocation__inputClose" />
          </div>
        </div>
        <input type="submit" className="submitBtn" value="Continue" />
      </form>
    </section>
  );
};

export default Form;
