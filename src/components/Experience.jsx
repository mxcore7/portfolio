import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
    const { t } = useTranslation();
    const jobs = t('experience.jobs', { returnObjects: true });

    return (
        <section id="experience" className="section-padding bg-dark-50 dark:bg-dark-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        {t('experience.title')}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400">
                        {t('experience.subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-1/2"></div>

                        {jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full transform md:-translate-x-1/2 border-4 border-dark-50 dark:border-dark-900"></div>

                                <div className="ml-8 md:ml-0 glass p-6 rounded-xl card-hover">
                                    <div className="flex items-start gap-3 mb-3">
                                        <Briefcase className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={20} />
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50">
                                                {job.title}
                                            </h3>
                                            <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                                                {job.company}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm text-dark-600 dark:text-dark-400 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span>{job.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            <span>{job.location}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 text-dark-700 dark:text-dark-200">
                                        {job.responsibilities.map((resp, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
