import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const navLinks = [
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.skills'), href: '#skills' },
        { name: t('nav.experience'), href: '#experience' },
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active section
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            setIsOpen(false);
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-4 border-b border-primary-500/10'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className="text-2xl font-display font-bold relative group z-50"
                    onClick={(e) => scrollToSection(e, '#hero')}
                >
                    <span className="text-slate-900 dark:text-white">BM</span>
                    <span className="text-primary-600 dark:text-primary-400">.</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300 group-hover:w-full" />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`text-sm font-medium transition-colors relative hover:text-primary-600 dark:hover:text-primary-400 ${activeSection === link.href.substring(1)
                                            ? 'text-primary-600 dark:text-primary-400'
                                            : 'text-slate-600 dark:text-slate-300'
                                        }`}
                                >
                                    {link.name}
                                    {activeSection === link.href.substring(1) && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-700" />

                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:hidden flex flex-col gap-6"
                        >
                            <ul className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className={`block text-lg font-medium p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${activeSection === link.href.substring(1)
                                                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                                                    : 'text-slate-600 dark:text-slate-300'
                                                }`}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="h-px bg-slate-200 dark:bg-slate-700 w-full" />

                            <div className="flex items-center justify-between p-2">
                                <span className="text-sm font-medium text-slate-500">Settings</span>
                                <div className="flex gap-4">
                                    <LanguageSwitcher />
                                    <ThemeToggle />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
