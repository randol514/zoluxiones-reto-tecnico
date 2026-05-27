import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import Terms from "../pages/Terms/Terms";
import Summary from "../pages/Summary/Summary";
import Plans from "../pages/Plans/Plans";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planes" element={<Plans />} />
      <Route path="/resumen" element={<Summary />} />
      <Route path="/terminos" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesConfig;
