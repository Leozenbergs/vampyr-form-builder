import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import RollsPage from "../pages/RollsPage"
import CreationPage from "../pages/character/CreationPage"


export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rolls" element={<RollsPage />} />
      <Route path="/create" element={<CreationPage />} />
    </Routes>
  )
}