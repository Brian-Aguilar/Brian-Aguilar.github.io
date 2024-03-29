import { HashRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import Profile from "./components/Profile"
import MenuBar from "./components/MenuBar"

const RoutesApp = () => {
    return (
        <>
            <Profile />
            <HashRouter>
                <Routes>
                    <Route index Component={HomePage} />
                </Routes>
            </HashRouter>
            <MenuBar />
        </>
    )
}

export default RoutesApp