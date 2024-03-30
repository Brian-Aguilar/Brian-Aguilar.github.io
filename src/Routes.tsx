import { HashRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Profile from "./components/Profile"
import MenuBar from "./components/MenuBar"
import Card from "./components/Card"
import ErrorPage from "./pages/ErrorPage"
import Breadcrumb from "./components/Breadcrumb"
import ProjectPage from "./pages/ProjectPage"

const RoutesApp = () => {
    return (
        <HashRouter>
            <Profile />
            <div className="PrincipalPage">
                <Card>
                    <Breadcrumb />
                    <Routes>
                        <Route path="/proyectos" Component={ProjectPage} />
                        <Route index Component={HomePage} />
                        <Route path="*" Component={ErrorPage} />
                    </Routes>
                </Card>
            </div>
            <MenuBar />
        </HashRouter>
    )
}

export default RoutesApp