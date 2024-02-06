import React from "react";
import { styled } from "@mui/material";

const GradientText = (props) => {
  const { children } = props;
  return <StyledGradientTitle>{children}</StyledGradientTitle>;
};

const StyledGradientTitle = styled("span")(({ theme }) => ({
  background:
    "linear-gradient(37deg, rgba(25,118,210,1) 35%, rgba(150,185,219,1) 100%);",
  backgroundClip: "text",
  webkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export default GradientText;