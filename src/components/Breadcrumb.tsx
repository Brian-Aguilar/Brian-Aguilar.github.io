import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { RiHome6Line } from "react-icons/ri";

const breadcrumbFormat = (path: string) => {
    let listPath = path.split("/")
    listPath = listPath.splice(1)
    if (listPath[0] === "") {
        listPath[0] = "Inicio"
    }
    return listPath.join("-/-").split('-')
}

const Breadcrumb = () => {
    const [breadcrumString, setBreadcrumString] = useState<string[]>([])

    const location = useLocation()

    useEffect(() => {
        setBreadcrumString(breadcrumbFormat(location.pathname))
    }, [location])
    return (
        <ul className="breadcrumb">
            <ol><RiHome6Line size={20} /></ol>
            <ol>/</ol>
            {breadcrumString.map((item) => (<ol key={`b${item}`}>{item}</ol>))}
        </ul>
    )
}

export default Breadcrumb