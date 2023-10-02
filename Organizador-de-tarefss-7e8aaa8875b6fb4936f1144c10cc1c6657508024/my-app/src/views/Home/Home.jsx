import React from "react";
import Header from "../../components/Header/Header";

import Title from "../../components/Title/Title";
import "./index.scss";

import Tarefas from "../../components/TaskTarefas/Tarefas";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Title />
      <Tarefas />
    </div>
  );
};

export default Home;