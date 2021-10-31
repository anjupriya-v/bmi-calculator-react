import Navbar from "./Navbar";
import { useHistory } from "react-router";
const Display = (props) => {
  const history = useHistory();

  const home = () => {
    history.push({
      pathname: "/",
    });
  };
  return (
    <div>
      <Navbar />

      <div className="card text-center  mx-auto pt-5 pb-5">
        <h5>Your BMI : {props.location?.state.bmi}</h5>
        <h5>BMI Category :{props.location?.state.bmiCategory}</h5>
        <h5>Health Risk :{props.location?.state.healthRisk}</h5>
        <button className="btn btn-primary ml-5 mr-5 mt-3" onClick={home}>
          Calculate Again
        </button>
      </div>

      <div className="footer pb-2"> Built with ❤️ by Anju Priya V</div>
    </div>
  );
};
export default Display;
