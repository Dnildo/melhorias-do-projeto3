import React from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Alterar from "../../components/Alterar/alterar.jsx";
import "./index.scss";

const Edit = () => {
  return (
    <div className="edit">
      <Header />
      <Title />
      <div className="deleteScreenDiv">
        <Alterar/>
      </div>
    </div>
  );
};

export default Edit;