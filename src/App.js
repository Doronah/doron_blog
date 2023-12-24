import {Header} from "./components/header";
import {Outlet} from "react-router-dom";
import "./App.css"

export function App() {
  return (
      <div>
        <Header />
        <Outlet />
      </div>
  )
}