import React, {useEffect, useState} from "react";

import MealItem from "./MealItem/MealItem";
import Card from "../CommonComponents/Card";

const DUMMY_MEALS:any = []

const AvailableMeals = () => {
  const [meals, updateMeals] = useState([]);

  const fetchData = async () => {
    fetch("https://fakestoreapi.com/products/category/electronics?limit=5").
    then((response) => response.json())
    .then((json)=> {
      json.forEach(function (i:any) {
        const a:any = {}
        a.id = i.id;
        a.name = i.title;
        a.description = i.description.slice(0, 90);
        a.price = i.price
        DUMMY_MEALS.push(a);
      });
      updateMeals(DUMMY_MEALS)
      console.log(DUMMY_MEALS)
    })
  }
  
  useEffect(() => {
  fetchData();
  },[])

  const mealsList = DUMMY_MEALS.map((meal:any) => (
    <MealItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="flex justify-center">
      <div className=" w-[75%] ">
        <Card>
          <ul>{meals.length > 0 &&  mealsList}</ul>
        </Card>
      </div>
    </section>
  );
};

export default AvailableMeals;
