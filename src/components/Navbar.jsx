import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { key: 'about', href: '#about' },
        { key: 'skills', href: '#skills' },
        { key: 'experience', href: '#experience' },
        { key: 'projects', href: '#projects' },
        { key: 'services', href: '#services' },
        { key: 'contact', href: '#contact' },
    ];

    const scrollToSection = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-dark-200 dark:border-dark-700">
            <div className="container-custom section-padding py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#hero" className="text-2xl font-display font-bold gradient-text">
                        BMH
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => scrollToSection(item.href)}
                                className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-smooth"
                            >
                                {t(`nav.${item.key}`)}
                            </button>
                        ))}
                    </div>

                    {/* Theme & Language Toggles */}
                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg glass"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-slide-down">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-left text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-smooth py-2"
                                >
                                    {t(`nav.${item.key}`)}
                                </button>
                            ))}
                            <div className="flex items-center gap-4 pt-4 border-t border-dark-200 dark:border-dark-700">
                                <ThemeToggle />
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
