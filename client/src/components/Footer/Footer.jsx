import { Github, Linkedin, Facebook  } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" footer w-full flex justify-between items-center py-3 px-6 h-auto text-xs mt-auto">
      <section className="flex items-center">
         <section to={"/todo"} className="flex items-center cursor-pointer">
            <p className="font-figtree text-sm lg:text-lg ml-2 lowercase">Task
               <span className="font-figtree lg:text-lg text-[#00D1A7] normal-case">
                  Tracker
               </span>
            </p>
         </section>
      </section>
      <section className="hidden md:block">
         <p>
             &copy; {new Date().getFullYear()} Designed and created by 
            <Link to={"https://github.com/geekcrasher"} target="_blank" className="ml-1 font-bold hover:underline">Paulo Lopez</Link>
         </p>
      </section>
      <section className="flex items-center justify-between w-20">
         <Link to={"https://github.com/geekcrasher"} target="_blank"><Github size={18}/></Link>
         <Link><Linkedin size={18}/></Link>
         <Link><Facebook size={18}/></Link>
      </section>
    </footer>
  );
};

export default Footer;
