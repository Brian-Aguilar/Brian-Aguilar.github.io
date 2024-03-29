import { RiArchiveFill, RiContactsFill, RiHomeFill, RiUser2Fill } from "@remixicon/react"
import { Link } from "react-router-dom"
import Card from "./Card"

const MenuBar = () => {
    return (
        <div className="MenuBar">
            <Card>
                <ul>
                    <li className="actived">
                        <Link to={"/"}>
                            <RiHomeFill size={30} />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/proyectos"}>
                            <RiArchiveFill size={30} />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/sobre-mi"}>
                            <RiUser2Fill size={30} />
                        </Link>
                    </li>
                    <li>
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