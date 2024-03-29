import Card from "./Card"

const MenuBar = () => {
    return (
        <div className="MenuBar">
            <Card>
                <ul>
                    <li>Inicio</li>
                    <li>Proyectos</li>
                    <li>Sobre mi</li>
                    <li>Contacto</li>
                </ul>
            </Card>
        </div>
    )
}

export default MenuBar