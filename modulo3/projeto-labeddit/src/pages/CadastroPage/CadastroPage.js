import React from "react";
import CadastroForm from "./CadastroForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

const CadastroPage = ({setRightButton}) => {
  useUnprotectedPage();

  return (
    <div>
      <CadastroForm setRightButton={setRightButton}/>
    </div>
  );
};

export default CadastroPage;
