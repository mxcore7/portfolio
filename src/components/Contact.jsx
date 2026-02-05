import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [focusedField, setFocusedField] = useState(null);

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
        <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900 transition-colors duration-500 relative overflow-hidden">
            {/* Background decorative blobs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        {t('contact.title')}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="prose prose-lg dark:prose-invert">
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                                {t('contact.description')}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: Mail, label: "Email", value: t('contact.info.email'), href: `mailto:${t('contact.info.email')}` },
                                { icon: Phone, label: "Phone", value: t('contact.info.phone'), href: `tel:${t('contact.info.phone')}` },
                                { icon: MapPin, label: "Location", value: t('contact.info.location'), href: null }
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className={`flex items-center gap-6 p-6 rounded-2xl glass hover:shadow-lg hover:border-primary-500/30 transition-all duration-300 group ${!item.href ? 'cursor-default' : ''}`}
                                >
                                    <div className="w-14 h-14 bg-primary-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">{item.label}</p>
                                        <p className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4">
                            {[
                                { icon: Linkedin, label: "LinkedIn", href: "#" },
                                { icon: Github, label: "GitHub", href: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:shadow-lg dark:hover:border-primary-500 transition-all duration-300 group"
                                >
                                    <social.icon size={20} className="text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                                    <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700/50 relative overflow-hidden">
                            {/* Form Header */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{t('contact.form.title')}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{t('contact.form.subtitle')}</p>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                        {t('contact.form.name')}
                                    </label>
                                    <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="input-field"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                        {t('contact.form.email')}
                                    </label>
                                    <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="input-field"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                        {t('contact.form.message')}
                                    </label>
                                    <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.02]' : ''}`}>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            rows="5"
                                            className="input-field resize-none"
                                            placeholder="How can I help you?"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full btn-primary flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed h-12 group"
                                >
                                    {status === 'sending' ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            {t('contact.form.submit')}
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute inset-0 bg-white/95 dark:bg-slate-800/95 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm z-20"
                                >
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-500">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{t('contact.form.successTitle')}</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{t('contact.form.success')}</p>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
