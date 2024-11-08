import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Root() {
  return (
    <div className="w-10/12 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}
