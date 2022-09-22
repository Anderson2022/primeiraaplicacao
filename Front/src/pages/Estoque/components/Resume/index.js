import React from "react";
import ResumeItem from "../Resumeitem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} 
from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Quantidade de produtos no estoque" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;
