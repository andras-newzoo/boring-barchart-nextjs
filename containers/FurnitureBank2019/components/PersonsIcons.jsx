import React from "react";
import { PersonsContainer } from "../styles";
import { useSelector } from "react-redux";
import {
  selectAdults,
  selectChildren
} from "../../../store/furnitureBankReducer/selectors";


const PersonsIcon = () => {
  const adults = useSelector(selectAdults);
  const children = useSelector(selectChildren);
  const adultsArray = Array.from(Array(Math.round(adults || 0)).keys());
  const childrenArray = Array.from(Array(Math.round(children || 0)).keys());
  
  return (
    <>
      <PersonsContainer>
        <div>
          {adultsArray.map(el => (
            <img
              key={el}
              className="adult"
              src="/static/icons/furnitureBank/person.svg"
              alt="adult person icon"
            />
          ))}
          {childrenArray.map(el => (
            <img
              key={el}
              className="child"
              src="/static/icons/furnitureBank/person.svg"
              alt="child person icon"
            />
          ))}
        </div>
      </PersonsContainer>
    </>
  );
};

export default PersonsIcon;
