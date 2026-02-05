import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white dark:bg-slate-900 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <a href="#" onClick={scrollToTop} className="text-2xl font-display font-bold flex items-center gap-1 group">
                            <span className="text-slate-900 dark:text-white">BM</span>
                            <span className="text-primary-600 dark:text-primary-400 group-hover:animate-bounce">.</span>
                        </a>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                            {t('footer.brandDescription')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-6">{t('footer.quickLinks')}</h4>
                        <ul className="space-y-3">
                            {[
                                { name: t('nav.about'), href: '#about' },
                                { name: t('nav.skills'), href: '#skills' },
                                { name: t('nav.experience'), href: '#experience' },
                                { name: t('nav.projects'), href: '#projects' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-block hover:translate-x-1 duration-200"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-6">{t('footer.connect')}</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Mail, href: `mailto:${t('contact.info.email')}` }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all duration-300"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500 text-center md:text-left">
                        © {currentYear} Blondeau Moukam. {t('footer.rights')}
                    </p>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                        {t('footer.madeWith')} <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
