import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("../pages/home/index.jsx"))
const PricingCheckList = React.lazy(() => import("../pages/PricingCheckList.jsx"))
const Commercial = React.lazy(() => import("../pages/Commercial.jsx"))
const Pricing = React.lazy(() => import("../pages/Pricing.jsx"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/checklist",
    element: <PricingCheckList />
  },
  {
    path: "/commercial",
    element: <Commercial />
  },
  {
    path: "/pricing",
    element: <Pricing />
  }
]

export default routes;