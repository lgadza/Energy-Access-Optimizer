import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

interface FooterSection {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}

const footerSections: FooterSection[] = [
  {
    title: "Solutions",
    links: [
      { name: "Solar Solutions", href: "/solutions/solar" },
      { name: "Wind Energy", href: "/solutions/wind" },
      { name: "Microgrids", href: "/solutions/microgrids" },
      { name: "Smart Metering", href: "/solutions/metering" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "News", href: "/news" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Support", href: "/support" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Energy Platform
            </h3>
            <p className="text-sm text-gray-400">
              Empowering communities through sustainable energy solutions and
              smart grid technology.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Energy Platform. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram, Mail].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
