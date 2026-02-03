import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Download } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-24 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-lg md:text-xl text-dark-600 dark:text-dark-300 mb-4">
                            {t('hero.greeting')}
                        </p>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 gradient-text">
                            {t('hero.name')}
                        </h1>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-dark-800 dark:text-dark-100">
                            {t('hero.title')}
                        </h2>

                        <p className="text-lg md:text-xl text-dark-700 dark:text-dark-200 mb-6">
                            {t('hero.subtitle')}
                        </p>

                        <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto mb-8">
                            {t('hero.description')}
                        </p>

                        <div className="flex items-center justify-center gap-2 text-sm md:text-base text-dark-600 dark:text-dark-400 mb-8">
                            <MapPin size={18} />
                            <span>{t('hero.location')}</span>
                        </div>

                        <div className="inline-block glass px-6 py-3 rounded-full mb-12">
                            <p className="text-sm md:text-base font-medium text-primary-600 dark:text-primary-400">
                                ✨ {t('hero.availability')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => scrollToSection('#projects')}
                                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                {t('hero.cta.projects')}
                                <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={() => scrollToSection('#contact')}
                                className="btn-secondary w-full sm:w-auto"
                            >
                                {t('hero.cta.contact')}
                            </button>
                            <a
                                href="/cv-blondeau-moukam.pdf"
                                download="CV-Blondeau-Moukam-Homeni.pdf"
                                className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                <Download size={20} />
                                {t('hero.cta.downloadCV')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
