import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap, Server, Users } from 'lucide-react';

const iconMap = {
    code: Code,
    database: Database,
    globe: Globe,
    zap: Zap,
    server: Server,
    users: Users,
};

const Services = () => {
    const { t } = useTranslation();
    const services = t('services.items', { returnObjects: true });

    return (
        <section id="services" className="section-padding bg-dark-50 dark:bg-dark-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        {t('services.title')}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400">
                        {t('services.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glass p-6 rounded-xl card-hover"
                            >
                                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                                    <Icon className="text-primary-600 dark:text-primary-400" size={28} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-dark-50">
                                    {service.name}
                                </h3>

                                <p className="text-dark-700 dark:text-dark-200">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
