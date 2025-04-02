
import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jane Doe
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a 
              href="mailto:hello@example.com" 
              className="text-sm text-muted-foreground hover:text-cali-clay flex items-center gap-2"
            >
              <Mail size={16} />
              <span>hello@example.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
