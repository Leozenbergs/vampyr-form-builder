import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Rolls from "../pages/RollsPage"
import CreateCharacter from "../pages/character/CreateCharacter"
import Characters from "../pages/character/Characters"
import Campaigns from "../pages/campaign/Campaigns"
import Documentation from "../pages/Documentation"
import NotFound from "../pages/NotFound"


export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />}  />
      <Route path="/characters" element={<Characters />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/rolls" element={<Rolls />} />
      <Route path="/characters/create" element={<CreateCharacter />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}