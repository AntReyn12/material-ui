import React from "react";
import CoffeeCard from "./CoffeeCard";
import {Grid} from "@material-ui/core";
import coffeeMakerList from "./constants";

const Content = () => {
  const getCoffeeMakerCard = (coffeeMakerObj) => {
    return (
      <Grid item sx={12} sm={4} alignItems="center" justifyContent="center">
        <CoffeeCard {...coffeeMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {coffeeMakerList.map((coffeeMakerObj) =>
        getCoffeeMakerCard(coffeeMakerObj)
      )}
    </Grid>
  );
};

export default Content;
