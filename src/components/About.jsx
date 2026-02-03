import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();
    const highlights = t('about.highlights', { returnObjects: true });

    return (
        <section id="about" className="section-padding bg-dark-50 dark:bg-dark-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                            {t('about.title')}
                        </h2>
                        <p className="text-lg text-primary-600 dark:text-primary-400">
                            {t('about.subtitle')}
                        </p>
                    </div>

                    <div className="glass p-8 md:p-12 rounded-2xl">
                        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                            <p className="text-dark-700 dark:text-dark-200 leading-relaxed whitespace-pre-line">
                                {t('about.description')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-dark-700 dark:text-dark-200">{highlight}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
