// react-router-dom
import { BrowserRouter } from "react-router-dom";
// routes
import AllRoutes from "./route/AllRoutes";
// react hook
import { useState } from "react";
// context
import Context  from "./context/Context";


function App() {
  const body = document.body;
  const [menu, setMenu] = useState()
  const [dark, setDark] = useState()

  const handleDark = () => setDark(!dark)
  dark ? (body.className = 'dark') : (body.className = '')
  const Contextprovider = {
    menu,
    setMenu,
    handleDark
  }

  return (
    <div className="App">
      <Context.Provider value={Contextprovider}>
        <BrowserRouter>
          <AllRoutes/>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
