import { createContext, useState } from "react";
import { formData } from "./formData";

export const Mycontext = createContext(null);

export const ContextProvider = (props) => {
  const [expanded, setExpanded] = useState(true);
  const [campData, setCampData] = useState(formData);
  return (
    <Mycontext.Provider value={{ expanded, setExpanded, campData, setCampData }}>
      {props.children}
    </Mycontext.Provider>
  );
};
