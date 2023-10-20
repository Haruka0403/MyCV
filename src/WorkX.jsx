import { NavLink, Routes, Route, useParams, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function WorkX(){

    const{t} = useTranslation();
    const arrWorkX = t("workX",{ returnObjects: true });

    return(
    <>
        <div className="contents">
            {arrWorkX.map(workX=>
                <div>
                    <h3>{workX.title}</h3>
                    <p>{workX.content}</p>
                </div>
            )}
        </div>
       
    </>);
};