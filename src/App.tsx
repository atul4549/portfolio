import { useState } from "react";
import "./App.css";
import { Home } from "./page/Home";
import Header from "./page/Header";
function App() {
  const [activeComponent, setActiveComponent] = useState("Home");

  // const handleComponentChange = (componentName: any) => {
  //   setActiveComponent(componentName);
  // };

  return (
    <>
      <header className="">
        {/* <Admin_L/> */}
        <Header />
        {/* <AsideMenu handleComponentChange={handleComponentChange} /> */}
        <main className="flex-1 p-6 bg-gray-100">
          {activeComponent === "Home" && <Home />}
        </main>
      </header>
    </>
  );
}

export default App;
