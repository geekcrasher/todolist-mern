import { Link } from "react-router-dom";

const Copyright = () => {
   return ( 
      <section className="hidden md:block">
         <p className="text-carbon font-medium">
            <span className="font-bold">&copy;</span> {new Date().getFullYear()} Designed and created by 
            <Link to={"https://github.com/geekcrasher"} target="_blank" className="ml-1 font-bold hover:underline">Paulo Lopez</Link>
         </p>
      </section>
    );
}
 
export default Copyright;