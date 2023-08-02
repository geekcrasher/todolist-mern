import { Link } from "react-router-dom";
import { Github, Linkedin, Facebook  } from "lucide-react";

const Contact = () => {
   return ( 
      <section className="flex items-center justify-between w-fit space-x-2">
        <Link to={"https://github.com/geekcrasher"} target="_blank">
            <img src="./personal-icon.svg" alt="personal icon" className="w-6 h-auto border-0 rounded-full overflow-hidden outline-none"/>
         </Link>
         <section className="w-0.5 h-5  bg-gray-400"></section>
         <Link to={"https://github.com/geekcrasher"} target="_blank">
            <Github size={18} color="#797D8B"/>
         </Link>
         <Link to={"https://www.linkedin.com/in/king-paulo-lopez-17696a280/"} target="_blank">
            <Linkedin size={18} color="#797D8B"/>
         </Link>
         <Link to={"#"}><Facebook size={18} color="#797D8B"/></Link>
      </section>
    );
}
 
export default Contact;