import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col  items-center justify-center gap-3">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Desarrollado con ❤️ por @MFabri31
        </p>
        <div className="flex space-x-3 text-xl">
          <a
            href="https://github.com/MFabri31"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/medina-fabricio-aa81741b5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
