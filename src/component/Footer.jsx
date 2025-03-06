import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div style={{ fontFamily: 'Roboto'}} className="pt-4 bg-gray-300">
      <footer className="bg-[#2e2e2e] text-white p-1 grid grid-cols-2">
        <p>© 2025 Yrieix Cisterne. Tous droits réservés.</p>
        <br />
          <Link
            to="/mentions"
            style={{ fontFamily: 'Roboto'}}
            className="block p-1 w-[8.1em]"
          >
            Mentions légales
          </Link>
          <div className="flex justify-end">
          <a href="https://www.linkedin.com/in/yrieix-cisterne-96963b332" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="Logo LinkedIn" className="h-10 bg-white mr-4 rounded-xl" />
          </a>
          <a href="https://github.com/yrieix-cisterne-nws" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="Logo Github" className="h-10 bg-white mr-11 rounded-xl"/>
          </a>
          </div>
      </footer>
    </div>
  );
};
