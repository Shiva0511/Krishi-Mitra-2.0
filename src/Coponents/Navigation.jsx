import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/Navigation.css";
// import axiosInstance from "../HelperFiles/axiosInstance";
// import Loading from "../Components/loading";
export default function Navigation({ home, dasbord, addequipment, profile }) {
  //   let [loading, setLoading] = useState(null);

  let logout = () => {
    console.log("loged outr");
  };
  return (
    <>
      {/* {loading} */}
      <div className="bottom-navgation">
        <ul className="links">
          <Link className="link" to="/">
            <div className={home ? "link-visited" : "not-visited"}>
              <i
                className={
                  home ? "fa-solid fa-house fa-xl" : "fa-regular fa-house fa-xl"
                }
              ></i>
            </div>
            Home
          </Link>
          <Link className="link" to="/Dashbord">
            <div className={dasbord ? "link-visited" : "not-visited"}>
              <i
                className={
                  dasbord
                    ? "fa-solid fa-table-columns fa-xl"
                    : "fa-light fa-table-columns fa-xl"
                }
              ></i>
            </div>
            Dashboard
          </Link>
          <Link className="link" to="/AddEquipment">
            <div className={addequipment ? "link-visited" : "not-visited"}>
              <i
                className={
                  addequipment
                    ? "fa-solid fa-square-plus fa-xl"
                    : "fa-regular fa-square-plus fa-xl"
                }
              ></i>
            </div>
            Equipment
          </Link>
          <Link className="link" to="/Profile">
            <div className={profile ? "link-visited" : "not-visited"}>
              <i
                className={
                  profile
                    ? "fa-solid fa-user fa-xl"
                    : "fa-regular fa-user fa-xl"
                }
              ></i>
            </div>
            Profile
          </Link>
        </ul>
      </div>
    </>
  );
}
