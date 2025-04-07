import { Github } from 'lucide-react';
export const Footer = () => {
  return (
    <footer className="mt-12 py-4 text-center text-sm text-gray-500 border-t">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <p>© {new Date().getFullYear()} Pratham Gupta</p>
        <a
          href="https://github.com/Prathamgupta661/github_analyser"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-600 hover:underline"
        >
          <Github size={16} />
          GitHub Repository
        </a>
      </div>
    </footer>
  );
};
