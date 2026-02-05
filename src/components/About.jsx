import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Briefcase, Globe } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();
    const highlights = t('about.highlights', { returnObjects: true });

    const stats = [
        { icon: Award, label: "Experience", value: "5+ Years" },
        { icon: Briefcase, label: "Projects", value: "20+ Done" },
        { icon: Globe, label: "Clients", value: "Intl. Reach" },
    ];

    return (
        <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-500/5 to-transparent pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        {t('about.title')}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {t('about.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Interactive Visual/Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            {/* Abstract/Profile Placeholder */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-500 to-purple-600 rotate-6 opacity-20 blur-xl animate-pulse" />
                            <div className="relative h-full w-full rounded-2xl overflow-hidden glass p-0 border border-slate-200 dark:border-slate-700 shadow-2xl group">
                                <img
                                    src={`${import.meta.env.BASE_URL}profile.png`}
                                    alt="Blondeau Moukam"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="glass p-4 rounded-xl flex justify-between items-center backdrop-blur-md bg-white/70 dark:bg-slate-900/70">
                                        <div>
                                            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{t('about.statusTitle')}</p>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{t('about.statusValue')}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{t('about.locationTitle')}</p>
                                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{t('about.locationValue')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg text-justify">
                                {t('about.description')}
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="glass p-4 rounded-xl text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="w-10 h-10 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-2 text-primary-600 dark:text-primary-400">
                                        <stat.icon size={20} />
                                    </div>
                                    <h4 className="font-bold text-slate-800 dark:text-slate-100">{stat.value}</h4>
                                    <p className="text-xs text-slate-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Highlights */}
                        <div className="space-y-3">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                                >
                                    <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-1 rounded-full text-green-600 dark:text-green-400 flex-shrink-0">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{highlight}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
