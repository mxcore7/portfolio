import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const { t } = useTranslation();
    const projects = t('projects.items', { returnObjects: true });

    return (
        <section id="projects" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        {t('projects.title')}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400">
                        {t('projects.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass p-6 rounded-xl card-hover flex flex-col"
                        >
                            <div className="mb-4">
                                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-dark-900 dark:text-dark-50">
                                {project.name}
                            </h3>

                            <p className="text-dark-700 dark:text-dark-200 mb-4 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-dark-100 dark:bg-dark-800 rounded-full text-xs text-dark-700 dark:text-dark-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-smooth text-sm">
                                    <ExternalLink size={16} />
                                    Demo
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 glass hover:bg-dark-200 dark:hover:bg-dark-700 rounded-lg transition-smooth text-sm">
                                    <Github size={16} />
                                    Code
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
