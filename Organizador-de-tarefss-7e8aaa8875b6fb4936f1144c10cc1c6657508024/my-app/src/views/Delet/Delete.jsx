import React from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Delet from "../../components/delete/Delet.jsx";
import "./index.scss";

const Delete = () => {
  return (
    <div className="delete">
      <Header />
      <Title />
      <div className="deleteScreenDiv">
        <Delet/>
      </div>
    </div>
  );
};

export default Delete;