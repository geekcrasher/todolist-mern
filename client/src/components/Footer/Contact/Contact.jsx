import { Link } from "react-router-dom";
import { Github, Linkedin, Facebook  } from "lucide-react";

const Contact = () => {
   return ( 
      <section className="flex items-center justify-between w-fit space-x-3">
         <Link to={"#"}>
            <img src="./personal-icon.svg" alt="personal icon" className="w-6 h-auto border-0 rounded-full overflow-hidden outline-none"/>
         </Link>
         <Link to={"https://github.com/geekcrasher"} target="_blank">
            <Github size={18} color="#6b7280"/>
         </Link>
         <Link to={"https://www.linkedin.com/in/king-paulo-lopez-17696a280/"} target="_blank">
            <Linkedin size={18} color="#6b7280"/>
         </Link>
         <Link to={"#"}><Facebook size={18} color="#6b7280"/></Link>
      </section>
    );
}
 
export default Contact;