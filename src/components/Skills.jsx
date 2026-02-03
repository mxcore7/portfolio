import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Wrench, TrendingUp } from 'lucide-react';

const iconMap = {
    languages: Code,
    erp: Database,
    frontend: Layout,
    tools: Wrench,
    digital: TrendingUp,
};

const Skills = () => {
    const { t } = useTranslation();
    const categories = t('skills.categories', { returnObjects: true });

    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        {t('skills.title')}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400">
                        {t('skills.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(categories).map(([key, category], index) => {
                        const Icon = iconMap[key];
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glass p-6 rounded-xl card-hover"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                                        <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-dark-100 dark:bg-dark-800 rounded-full text-sm text-dark-700 dark:text-dark-200"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
