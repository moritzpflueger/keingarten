import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ className }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {languages.map((language) => (
        <button
          onClick={() => changeLanguage(language.code)}
          className={`${currentLanguage === language.code ? 'no-underline' : 'underline'}`}
        >
          { language.name }
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
