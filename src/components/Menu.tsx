//@ts-ignore
import { ReactNode, useState, useContext } from "react";
import "./menus.css";
import { UserContext } from "./ContentMenu";




export default function Menu() {


  const tabs = useContext(UserContext)


  
  const [content, setContent] = useState(tabs?.[0]?.label); // este es una buena nota (Gran tipo de contenido)

  const classType = (name: string) => { 
    return content === name;
  };

  const menuCont = (cont: string)=> {
    return content === cont
  }

  return (
    <section className="menuSection">
      <div className="buttons">
        {tabs?.map((tab:any) => ( 
            <button
                key={tab.label}
                className={classType(tab.label) ? "activeClass" : "inactiveClass"}
                onClick={() => setContent(tab.label)}
              >
              {tab.label}
            </button>
        ))}
      </div>
      <div className="content">
          {tabs?.find((tab:any) => menuCont(tab.label))?.menuContent}
        </div>
    </section>
  );
}




