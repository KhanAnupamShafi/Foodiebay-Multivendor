import styled from "styled-components";

export const Form = styled.form`
  min-height: 250px;
  padding: 15px 30px 0px 30px;
  margin-right: auto;
  margin-left: auto;
`;
export const FormBody = styled.div`
  padding: 1.5rem 1.5rem;
  flex: 1 1 auto;
  border-radius: 10px;
`;
export const FormContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0px;
  transition: 0.5s;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px 0 rgb(82 63 105 / 5%);
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const Container = styled.div`
  @media (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  div {
    text-align: left;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    padding-right: 15px;
    padding-left: 15px;
    label {
      display: inline-block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      font-size: 1.1rem;
    }
  }
  textarea {
    overflow: auto;
    resize: vertical;
    border-radius: 10px;
    box-shadow: none;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-color: #86a4c3;
    outline: none;
    display: block;
    width: 100%;
    padding: 20px;
  }
`;
export const Box = styled.div`
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  div {
    text-align: left;
    label {
      display: inline-block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      font-size: 1.1rem;
    }
  }
`;
export const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  div {
    margin-bottom: 1rem;
    text-align: left;
    label {
      display: inline-block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      font-size: 1.1rem;
    }
    input {
      appearance: none;
      display: block;
      width: 100%;
      /* height: calc(1.5em + 0.75rem + 2px); */
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      border-radius: 5px;
      box-shadow: none;
      border-color: #86a4c3;
      height: auto;
      &:active,
      &:focus {
        border-color: #fd683e;
        box-shadow: none;
        outline: none;
      }
      &:disabled {
        color: #555;
        background-color: #f0f0f0;
        border-color: #eee;
      }
    }
  }
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;
export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  div {
    border-radius: 5px 0px 0px 5px;
    background-color: #ffffff;
    font-weight: 300;
    padding: 0.425rem 0.75rem;
    border: 1px solid #86a4c3;
    line-height: 1.25;
    color: #172b4c;
    text-align: center;
    margin-bottom: 0;
    font-size: 1rem;
  }
  input {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    position: relative;
    flex: 1 1 auto;
    width: 1% !important;
    min-width: 0;
    margin-bottom: 0;
  }
`;
export const FileInput = styled.div`
  div {
    background-color: #4630be;
    border-color: #4630be;
    color: #ffffff;
    cursor: pointer;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 1.1rem;
  }
  @media (min-width: 768px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
