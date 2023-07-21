import Copyright from './Copyright/Copyright'
import Contact from './Contact/Contact'
import Logo from './Logo/Logo';

const Footer = () => {
  return (
    <footer className=" footer w-full flex justify-between items-center py-3 px-6 h-auto text-xs mt-auto">
      <Logo />
      <Copyright />
      <Contact />
    </footer>
  );
};

export default Footer;
