import Card from "./Card"
import ProfileImg from "../assets/profile.jpg"
import { RiArchiveFill, RiBriefcaseFill, RiGithubFill, RiLinkedinFill, RiOpenArmFill } from "@remixicon/react"

const Profile = () => {
    return (
        <div className="Profile">
            <Card>
                <div className="profile-img">
                    <img src={ProfileImg} alt="Foto Brian Aguilar" />
                </div>
                <p>Hi!, I'm <b>Brian</b>.<br />I'm <b>Backend</b> developer and <b>Fronted</b> developer.</p>

                <ul>
                    <li>
                        <RiBriefcaseFill />
                        <span>Experience</span>
                        <span>1+</span>
                    </li>
                    <li>
                        <RiArchiveFill />
                        <span>Projects</span>
                        <span>20</span>
                    </li>
                    <li>
                        <RiOpenArmFill />
                        <span>Skills</span>
                        <span>20</span>
                    </li>
                    <li>
                        <RiGithubFill />
                        <span>Github</span>
                    </li>
                    <li>
                        <RiLinkedinFill />
                        <span>LinkedIn</span>
                    </li>
                </ul>
            </Card>
        </div>
    )
}

export default Profile