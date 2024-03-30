import { RiArchiveFill, RiContactsFill, RiHomeFill, RiUser2Fill } from "@remixicon/react"
import { Link } from "react-router-dom"
import Card from "./Card"
import React, { useRef } from "react"

const MenuBar = () => {
    const menu = useRef(null)

    const customActived = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const temp: HTMLElement = menu.current?.children
        if (temp != null) {
            for (const item of temp) {
                item.classList.remove("actived")
            }
            e.currentTarget.classList.add("actived")
        }
    }

    return (
        <div className="MenuBar">
            <Card>
                <ul ref={menu}>
                    <li className="actived" onClick={customActived}>
                        <Link to={"/"}>
                            <RiHomeFill size={30} />
                        </Link>
                    </li>
                    <li onClick={customActived}>
                        <Link to={"/proyectos"}>
                            <RiArchiveFill size={30} />
                        </Link>
                    </li>
                    <li onClick={customActived}>
                        <Link to={"/sobre-mi"}>
                            <RiUser2Fill size={30} />
                        </Link>
                    </li>
                    <li onClick={customActived}>
                        <Link to={"/contacto"}>
                            <RiContactsFill size={30} />
                        </Link>
                    </li>
                </ul>
            </Card>
        </div>
    )
}

export default MenuBar