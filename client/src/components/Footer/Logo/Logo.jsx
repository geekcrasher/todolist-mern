const Logo = () => {
   return ( 
      <section className="flex items-center">
         <section to={"/todo"} className="flex items-center cursor-pointer">
            <p className="font-figtree text-sm text-[#9799A5] ml-2 lowercase">Task
               <span className="lg:text-base text-accent normal-case">
                  Tracker
               </span>
            </p>
         </section>
      </section>
    );
}
 
export default Logo;