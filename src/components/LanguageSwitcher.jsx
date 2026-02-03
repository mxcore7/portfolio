import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary-600 hover:text-white transition-smooth"
            aria-label="Switch language"
        >
            <Languages size={20} />
            <span className="font-semibold">{i18n.language.toUpperCase()}</span>
            <span className="text-sm opacity-75">
                {i18n.language === 'en' ? '🇬🇧' : '🇫🇷'}
            </span>
        </button>
    );
};

export default LanguageSwitcher;
