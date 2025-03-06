import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div style={{ fontFamily: 'Roboto'}} >
      <footer className="bg-[#2e2e2e] text-white p-1">
        <p>© 2025 Yrieix Cisterne. Tous droits réservés.</p>
        <br />
          <Link
            to="/mentions"
            style={{ fontFamily: 'Roboto'}}
            className="block p-1 w-[8.1em]"
          >
            Mentions légales
          </Link>
      </footer>
    </div>
  );
};
