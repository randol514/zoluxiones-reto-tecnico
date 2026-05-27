import "./styles/main.sass";

import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "@/router/RoutesConfig";
import MainLayout from "@/layouts/MainLayout";

function App() {
  return (
    <div className={`site-wrapper`}>
      <BrowserRouter>
        <MainLayout>
          <RoutesConfig />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
