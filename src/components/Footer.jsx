import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section-padding bg-dark-900 dark:bg-black text-dark-100">
            <div className="container-custom">
                <div className="text-center">
                    <div className="mb-6">
                        <h3 className="text-2xl font-display font-bold gradient-text mb-2">
                            Blondeau Moukam Homeni
                        </h3>
                        <p className="text-dark-300 max-w-2xl mx-auto">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    <div className="border-t border-dark-700 pt-6">
                        <p className="text-dark-400 text-sm">
                            © {currentYear} Blondeau Moukam Homeni. {t('footer.rights')}.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
