"use client"
import '@fortawesome/fontawesome-free/css/all.css';

export default function Footer() {
  return (
    <footer className="flex sm:flex-row flex-col items-center py-4 md:mb-0 bg-blue-900 z-10 border-t border-blue-900">
      <div className="flex flex-row items-center justify-center flex-grow text-black">
        Contact us :
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook fa-xl mx-2"></i>
        </a>
        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-xl mx-2"></i>
        </a>
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-xl mx-2"></i>
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-xl mx-2"></i>
        </a>
      </div>
    </footer>
  );
}