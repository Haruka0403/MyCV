import { NavLink, Routes, Route, useParams, Outlet } from "react-router-dom";

export default function Tab(){

    return(<>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? "tab-active" : ""} to="/" end>
                        Work X
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({isActive}) => isActive ? "tab-active" : ""} to="/education">
                        Education
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({isActive}) => isActive ? "tab-active" : ""} to="/qualifications">
                        Qualifications
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({isActive}) => isActive ? "tab-active" : ""} to="/skills">
                        Skills
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({isActive}) => isActive ? "tab-active" : ""} to="/portfolio">
                        Portfolio
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({isActive}) => isActive ? "tab-active" : ""} to="/interests">
                        Interests
                    </NavLink>
                </li>
            </ul>

        <Outlet />
    </>)           

};
