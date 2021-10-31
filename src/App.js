import "./App.css";
import { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./components/Navbar";
const App = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const history = useHistory();

  const getValues = (e) => {
    console.log(e.target.name);
    if (e.target.name === "Height") {
      setHeight(e.target.value);
    } else {
      setWeight(e.target.value);
    }
  };
  const calculate = (e) => {
    e.preventDefault();
    var bmi =
      Math.floor((weight / ((height / 100) * (height / 100))) * 10) / 10;
    var bmiCategory = "";
    var healthRisk = " ";
    if (bmi <= 18.4) {
      bmiCategory = "Underweight";
      healthRisk = "Malnutrition risk";
    } else if (bmi > 18.5 && bmi <= 24.9) {
      bmiCategory = "Normal Weight";
      healthRisk = "Low Risk";
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiCategory = "Overweight";
      healthRisk = "Enhanced risk";
    } else if (bmi >= 30 && bmi <= 34.9) {
      bmiCategory = "Moderately obese";
      healthRisk = "Medium risk";
    } else if (bmi >= 35 && bmi <= 39.9) {
      bmiCategory = "Severely Obese";
      healthRisk = "High risk";
    } else {
      bmiCategory = "Very Severely Obese";
      healthRisk = "Very High Risk";
    }
    history.push({
      pathname: "/display",
      state: {
        bmi,
        bmiCategory,
        healthRisk,
      },
    });
  };
  return (
    <div>
      <Navbar />
      <div className="card bg-light mx-auto">
        <div className="card-body">
          <h1 className="heading">BMI Calculator</h1>
          <p className="card-text">
            <form
              onSubmit={(e) => {
                calculate(e);
              }}
            >
              <input
                name="Height"
                id="height"
                required
                className="bg-light"
                type="number"
                placeholder="Height in cm"
                onChange={(e) => {
                  getValues(e);
                }}
              />
              <input
                name="Weight"
                id="weight"
                required
                className="bg-light"
                type="number"
                placeholder="Weight in kg"
                onChange={(e) => {
                  getValues(e);
                }}
              />
              <button
                name="BMI"
                id="button"
                type="submit"
                className="btn btn-primary"
              >
                Calculate
              </button>
            </form>
          </p>
        </div>
      </div>
      <div className="footer pb-2"> Built with ❤️ by Anju Priya V</div>
    </div>
  );
};

export default App;
