import React, { createContext, useState } from "react";
import "./App.css";
import Wrapper from "./routes/routerWrapper";
interface AppThemeContext{
  mode: string;
  setMode: (mode: string) => void;
}
const changeMode = createContext<AppThemeContext|null>(null);
function App() {
  const [mode, setMode] = useState("");

  return (
    <div className={`App ${mode}`}>
      <changeMode.Provider value={{mode, setMode}}>
        <Wrapper />
      </changeMode.Provider>
    </div>
  );
}

export { App, changeMode };
