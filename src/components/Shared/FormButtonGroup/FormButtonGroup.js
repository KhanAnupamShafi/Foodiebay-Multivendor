import React from "react";
import styled from "styled-components";
import { Cross } from "styled-icons/entypo";

import { Check } from "styled-icons/material-rounded";

const FormButtonGroup = (props) => {
  const { btn1, btn2, btnType1, btnType2 } = props;

  return (
    <FormAction>
      <ButtonSubmit type={btnType1}>
        <Check className="mr-1" width={24} />
        {btn1}
      </ButtonSubmit>
      <ButtonCancel type={btnType2}>
        <Cross className="mr-1" width={24} />
        {btn2}
      </ButtonCancel>
    </FormAction>
  );
};

export default FormButtonGroup;
const FormAction = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const ButtonSubmit = styled.button`
  cursor: pointer;
  background-color: #fd683e;
  border-color: #fd683e;
  color: #ffffff;

  border-radius: 4px;
  box-shadow: none;
  border: 1px solid transparent;
  line-height: inherit;
  padding: 8px 16px;
  font-size: 1.1rem;
  transition: all 0.5s ease-in-out;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  &:hover {
    background-color: #fc410c;
    border-color: #fc410c;
  }
`;
const ButtonCancel = styled.button`
  cursor: pointer;
  background-color: #2d9bda;
  border-color: #2d9bda;
  color: #ffffff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid transparent;
  line-height: inherit;
  padding: 8px 16px;
  font-size: 1.1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #207eb4;
    border-color: #207eb4;
  }
`;
