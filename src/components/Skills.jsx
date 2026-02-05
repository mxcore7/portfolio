import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Wrench, TrendingUp, Terminal, Cpu, Globe } from 'lucide-react';

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
        <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        {t('skills.title')}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {t('skills.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(categories).map(([key, category], index) => {
                        const Icon = iconMap[key] || Terminal;
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                                    <Icon size={80} className="text-primary-600 dark:text-primary-400" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 text-primary-600 dark:text-primary-400">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{category.title}</h3>
                                    </div>

                                    <div className="space-y-4">
                                        {category.items.map((item, i) => (
                                            <div key={i} className="relative">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                                                    {/* Mock Level for UI Visual */}
                                                    <span className="text-xs text-slate-400 dark:text-slate-500">
                                                        {i === 0 ? 'Expert' : i < 3 ? 'Advanced' : 'Proficient'}
                                                    </span>
                                                </div>
                                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: i === 0 ? '95%' : i < 3 ? '85%' : '70%' }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                        className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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
