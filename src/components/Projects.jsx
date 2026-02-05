import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const { t } = useTranslation();
    const projects = t('projects.items', { returnObjects: true });

    return (
        <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        {t('projects.title')}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {t('projects.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col h-full"
                        >
                            {/* Project Image Placeholder / Overlay */}
                            <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary-600/10 dark:bg-primary-500/10 group-hover:bg-primary-600/0 transition-colors duration-300" />

                                {/* Pattern or Abstract Shape */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-primary-600 dark:text-primary-400 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {project.name}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 4).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="px-2.5 py-1 text-xs font-medium text-slate-400 dark:text-slate-500">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>

                                <div className="flex gap-3 mt-auto">
                                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-200 transition-all font-medium text-sm">
                                        Demo <ArrowUpRight size={16} />
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition-all font-medium text-sm">
                                        <Github size={16} /> Code
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
