"use client"
import '@fortawesome/fontawesome-free/css/all.css';

export default function Footer() {
  return (
    <footer className="flex sm:flex-row flex-col items-center py-4 md:mb-0 bg-blue-950 z-10 border-t border-blue-900">
      <div className="flex flex-row items-center justify-center flex-grow text-white">
        Github:
        <a href="https://github.com/Ty-HA/VotingDapp" aria-label="github" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-xl mx-2"></i>
        </a>
        
      </div>
    </footer>
  );
}