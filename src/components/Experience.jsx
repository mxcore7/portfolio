import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const { t } = useTranslation();
    const experience = t('experience.jobs', { returnObjects: true });

    return (
        <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        {t('experience.title')}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {t('experience.subtitle')}
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line via absolute div */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 hidden md:block" />

                    <div className="space-y-12">
                        {Array.isArray(experience) && experience.map((item, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot (Desktop) */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-500 border-4 border-white dark:border-slate-900 shadow-lg hidden md:block mt-6 z-10" />

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex-1"
                                >
                                    <div className={`p-6 md:p-8 rounded-2xl glass hover:shadow-xl transition-shadow duration-300 relative group border-l-4 md:border-l-0 ${index % 2 === 0 ? 'md:border-l-4 border-primary-500' : 'md:border-r-4 border-purple-500'} border-primary-500`}>
                                        <div className="flex items-center gap-3 mb-2 text-primary-600 dark:text-primary-400">
                                            <Briefcase size={18} />
                                            <span className="font-semibold tracking-wide text-sm uppercase">{item.company}</span>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                                            {item.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-4 font-medium">
                                            <Calendar size={16} />
                                            <span>{item.period}</span>
                                        </div>

                                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 leading-relaxed text-sm space-y-1">
                                            {item.responsibilities && item.responsibilities.map((resp, i) => (
                                                <li key={i}>{resp}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Spacer for Timeline alignment */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
