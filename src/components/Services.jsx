import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Database, Globe, BarChart, Server, Lightbulb, ArrowRight } from 'lucide-react';

const iconMap = {
    code: Code,
    database: Database,
    globe: Globe,
    zap: Code, // Fallback or imported icon
    server: Server,
    users: BarChart, // Using BarChart or another available icon
    // Mapping original keys just in case
    odoo: Database,
    integration: Server,
    web: Globe,
    automation: Code,
    infrastructure: BarChart,
    consulting: Lightbulb
};

const Services = () => {
    const { t } = useTranslation();
    const services = t('services.items', { returnObjects: true });

    return (
        <section id="services" className="section-padding bg-slate-50 dark:bg-slate-900/50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        {t('services.title')}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {t('services.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.isArray(services) && services.map((service, index) => {
                        // Use service.icon from JSON, fallback to Code
                        const Icon = iconMap[service.icon] || Code;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-colors duration-500 -mr-16 -mt-16" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-primary-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {service.name}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm group/link cursor-pointer">
                                        <span className="group-hover/link:underline">Learn more</span>
                                        <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
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

export default Services;
