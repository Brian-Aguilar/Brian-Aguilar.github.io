import Card from "./Card";
import ProfileImg from "../assets/profile.jpg";

import { FaLinkedin, FaGithub, FaUserTie, FaUserNinja, FaDatabase } from "react-icons/fa";

const Profile = () => {
    return (
        <div className="Profile">
            <Card>
                <div className="profile-img">
                    <img src={ProfileImg} alt="Foto Brian Aguilar" />
                </div>
                <p>Hola, Soy <b>Brian</b>.<br />Soy desarrollador Full Stack, ya que tengo conocimientos solidos en lo que es Fronted y Backend.</p>

                <ul>
                    <li>
                        <FaUserTie />
                        <span>Experiencia</span>
                        <span>1+</span>
                    </li>
                    <li>
                        <FaDatabase />
                        <span>Proyectos</span>
                        <span>20</span>
                    </li>
                    <li>
                        <FaUserNinja />
                        <span>Habilidades</span>
                        <span>20</span>
                    </li>
                    <li>
                        <FaGithub />
                        <span>Github</span>
                    </li>
                    <li>
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </li>
                </ul>
            </Card>
        </div>
    )
}

export default Profile