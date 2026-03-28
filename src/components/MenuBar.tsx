import { Link } from "react-router-dom";
import Card from "./Card";
import React, { useRef } from "react";

import { RiHome6Line } from "react-icons/ri";
import { VscFileSubmodule } from "react-icons/vsc";
import { LuContact } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";


const MenuBar = () => {
    const menu = useRef<HTMLUListElement>(null);

    const customActived = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const temp: HTMLCollection | undefined = menu.current?.children;

        if (temp != undefined) {
            for (const item of temp) {
                item.classList.remove("actived");
            }
            e.currentTarget.classList.add("actived");
        }
    }

    return (
        <div className="MenuBar">
            <Card>
                <div className="d-flex justify-between">
                    <ul ref={menu}>
                        <li className="actived" onClick={customActived}>
                            <Link to={"/"}>
                                <RiHome6Line size={30} />
                            </Link>
                        </li>
                        <li onClick={customActived}>
                            <Link to={"/proyectos"}>
                                <VscFileSubmodule size={30} />
                            </Link>
                        </li>
                        <li onClick={customActived}>
                            <Link to={"/sobre-mi"}>
                                <LuContact size={30} />
                            </Link>
                        </li>
                    </ul>
                    <MdOutlineDarkMode size={30} />
                </div>
            </Card>
        </div>
    )
}

export default MenuBar