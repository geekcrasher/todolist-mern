import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border footer flex justify-center items-center h-auto p-3 text-xs mt-auto">
      <section className="border">
         <span>
            Copyright &copy; {new Date().getFullYear()} Designed and created by Paulo Lopez
         </span>
      </section>
      <section className="border">
         <span><Github size={20}/></span>
      </section>
    </footer>
  );
};

export default Footer;
