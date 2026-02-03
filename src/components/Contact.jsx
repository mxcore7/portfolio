import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission (frontend only)
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        {t('contact.title')}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400 mb-4">
                        {t('contact.subtitle')}
                    </p>
                    <p className="text-dark-700 dark:text-dark-200 max-w-2xl mx-auto">
                        {t('contact.description')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="glass p-6 rounded-xl">
                            <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-dark-50">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                <a
                                    href={`mailto:${t('contact.info.email')}`}
                                    className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-smooth"
                                >
                                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                                        <Mail className="text-primary-600 dark:text-primary-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-dark-600 dark:text-dark-400">Email</p>
                                        <p className="font-semibold text-dark-900 dark:text-dark-50">
                                            {t('contact.info.email')}
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 glass rounded-lg">
                                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                                        <Phone className="text-primary-600 dark:text-primary-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-dark-600 dark:text-dark-400">Phone</p>
                                        <p className="font-semibold text-dark-900 dark:text-dark-50">
                                            {t('contact.info.phone')}
                                        </p>
                                        <p className="font-semibold text-dark-900 dark:text-dark-50">
                                            {t('contact.info.phone2')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 glass rounded-lg">
                                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                                        <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-dark-600 dark:text-dark-400">Location</p>
                                        <p className="font-semibold text-dark-900 dark:text-dark-50">
                                            {t('contact.info.location')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-6">
                                <a
                                    href="#"
                                    className="flex-1 flex items-center justify-center gap-2 p-3 glass rounded-lg hover:bg-primary-600 hover:text-white transition-smooth"
                                >
                                    <Linkedin size={20} />
                                    LinkedIn
                                </a>
                                <a
                                    href="#"
                                    className="flex-1 flex items-center justify-center gap-2 p-3 glass rounded-lg hover:bg-primary-600 hover:text-white transition-smooth"
                                >
                                    <Github size={20} />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="glass p-6 rounded-xl">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    {t('contact.form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 transition-smooth"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    {t('contact.form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 transition-smooth"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 transition-smooth resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    t('contact.form.sending')
                                ) : (
                                    <>
                                        {t('contact.form.submit')}
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="mt-4 text-green-600 dark:text-green-400 text-center">
                                    {t('contact.form.success')}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
