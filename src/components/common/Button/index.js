import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #1818f6;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;

export const ButtonStyleTwo = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 0.6rem 2.5rem;
  margin: 0px 0px;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #1818f6;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  &:hover {
    background: black;
  }
`;

export const ButtonStyleThree = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 0.6rem 2.5rem;
  margin: 0px 0px;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #1818f6;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  &:hover {
    background: black;
  }
  a {
    color: white !important;
  }
`;
