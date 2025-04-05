import { useState } from "react";
import React from "react";

const List = (props) => {
  const [showList, setShowList] = useState(true);
  const handleShowList = () => {
    setShowList(!showList);
  };
  return (
    // console.log(props)
    <div>
      <div
        onClick={handleShowList}
        style={{ cursor: "pointer", fontWeight: "bold", marginBottom: "10px" }}
      >
        {showList ? "Hide List" : "Show List"} User
      </div>
      {showList && (
        <div>
          <ul>
            {props.user.map((item) => (
              <li key={item.id}>
                ID:{item.id}
                {item.name}
                {item.age}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default List;
