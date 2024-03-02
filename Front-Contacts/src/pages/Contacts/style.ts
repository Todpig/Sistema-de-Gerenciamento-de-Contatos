import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
`;

export const Form = styled.form`
  margin-bottom: 20px;

  label {
    margin-right: 10px;
  }

  input {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  input[type="submit"] {
    background-color: green;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

