import React, { useEffect } from "react";
import "./_icons-navigation.scss";
import { Link, withRouter } from "react-router-dom";
import {
  Home,
  PlanePrivate,
  Car,
  Bus,
} from "@carbon/react/icons";
import { Restaurant } from "@carbon/icons-react";
import useHouseCalculation from "../HousePage/House_FootprintsButton";
import useConsumptionCalculation from "../ConsumptionPage/Consumption_FootprintsButton";
import useBusCalculation from "../BusRailPage/BusRail_FootprintsButton";


const IconsNavigationBottom = ({ location }) => {
  const { calculateAllHouseFootprint } = useHouseCalculation();
  const { showFootprintResultsFoodDiet } = useConsumptionCalculation();
  const { calculateAllBusRailFootprint } = useBusCalculation();

  useEffect(() => {
    // This code will run after the component mounts
    calculateAllHouseFootprint();
    showFootprintResultsFoodDiet();
    calculateAllBusRailFootprint();

    // Clean-up function
    return () => {
      // This code will run before the component unmounts
      console.log("Component unmounted");
    };
  }, [location.pathname]);

  return (
    <>
      {/* ------------------------------------------------------------------- */}
      <div className="top-header-sec">
        <div className="container">
        
          <div className="progress-bar-container fixed-navigation">
        
            <Link
              to="/house"
              className={location.pathname === "/house" ? "active" : ""}
            >
              <Home
                className={
                  location.pathname === "/house"
                    ? "iconClass active"
                    : "iconClass"
                }
                size="32px"
              />
            </Link>
            <Link
              to="/car"
              className={location.pathname === "/car" ? "active" : ""}
            >
              <Car
                className={
                  location.pathname === "/car"
                    ? "iconClass active"
                    : "iconClass"
                }
                size="32px"
              />
            </Link>
            <Link
              to="/bus-rail"
              className={location.pathname === "/bus-rail" ? "active" : ""}
            >
              <Bus
                className={
                  location.pathname === "/bus-rail"
                    ? "iconClass active"
                    : "iconClass"
                }
                size="32px"
              />
            </Link>
            <Link
              to="/flight"
              className={location.pathname === "/flight" ? "active" : ""}
            >
              <PlanePrivate
                className={
                  location.pathname === "/flight"
                    ? "iconClass active"
                    : "iconClass"
                }
                size="32px"
              />
            </Link>
            <Link
              to="/consumption"
              className={location.pathname === "/consumption" ? "active" : ""}
            >
              <Restaurant
                className={
                  location.pathname === "/consumption"
                    ? "iconClass active"
                    : "iconClass"
                }
                size="32px"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(IconsNavigationBottom);