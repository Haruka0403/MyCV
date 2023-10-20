import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header(){
    const [t, i18n] = useTranslation();
    const [lang, setLang] = useState('ja');

    useEffect(() => {
        i18n.changeLanguage(lang);
        document.documentElement.lang = i18n.language;
      }, [lang, i18n]);

    return(
    <>
        <div className="header-layout">
            <h1>Haruka Shiota</h1>
            <button onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}>testbutton</button>
        </div>
    </>);
};