import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Download, MousePointer2 } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
    const { t } = useTranslation();
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const fullText = t('hero.title');
    const titles = [t('hero.title'), ...t('hero.typingTitles', { returnObjects: true })];

    // Typing Effect
    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % titles.length;
            const fullText = titles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, titles]);

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Parallax & Scroll Effects
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* Background Effects */}
            <ParticleBackground />

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-pink-500/10 dark:bg-pink-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-primary-100 dark:border-primary-900/50 shadow-lg shadow-primary-500/5 hover:shadow-primary-500/20 transition-all duration-300"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                            {t('hero.availability')}
                        </span>
                    </motion.div>

                    {/* Main Title with Typing Effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6 relative"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-2">
                            <span className="block text-slate-800 dark:text-slate-100 mb-2">{t('hero.greeting')}</span>
                            <span className="gradient-text">{t('hero.name')}</span>
                        </h1>
                        <div className="h-12 md:h-16 lg:h-20 overflow-hidden">
                            <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-600 dark:text-slate-400">
                                {text}<span className="animate-pulse">|</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        {t('hero.description')}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
                    >
                        <button
                            onClick={() => scrollToSection('#projects')}
                            className="btn-primary w-full sm:w-auto min-w-[160px] group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t('hero.cta.projects')}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="btn-primary-shine"></div>
                        </button>

                        <a
                            href={`${import.meta.env.BASE_URL}cv-blondeau-moukam.pdf`}
                            download="CV-Blondeau-Moukam-Homeni.pdf"
                            className="btn-secondary w-full sm:w-auto min-w-[160px] group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                                {t('hero.cta.downloadCV')}
                            </span>
                        </a>
                    </motion.div>

                    {/* Stats / Floating Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 w-full max-w-4xl">
                        {[
                            { label: "Years Exp.", value: "5+" },
                            { label: "Projects", value: "20+" },
                            { label: "Clients", value: "15+" },
                            { label: "Countries", value: "3" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                                className="glass p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-400 dark:border-slate-600 flex justify-center p-2 opacity-60">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                        className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
