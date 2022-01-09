import { FaShareAlt } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const SocialLinks = () =>{
    return (
    <label  className="social">
        <span ><FaShareAlt className="icon-share"/></span>
        <a href="https://github.com/Bourichi-Taha"><span ><FaGithub className="icons"/></span></a>
        <a href="bourichi.taha@gmail.com"><span ><FaEnvelope className="icons"/></span></a>
        <a href="https://github.com/Bourichi-Taha"><span ><FaLinkedin className="icons"/></span></a>
    </label>
    )
}

export default SocialLinks