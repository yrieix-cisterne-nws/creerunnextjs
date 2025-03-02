import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-[#f5deb3]">
        <p>© 2025 Yrieix Cisterne. Tous droits réservés.</p>
        <br />
          <Link
            to="/mentions"
            className="block p-4hover:bg-[#4e4e4e]"
          >
            Mentions légales
          </Link>
      </footer>
    </div>
  );
};
