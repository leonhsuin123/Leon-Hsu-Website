import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../translations';

export type Language = 'en' | 'zh';

interface TranslationContextType {
  language: Language;
  toggle: () => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggle = () => setLanguage(prev => prev === 'en' ? 'zh' : 'en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, toggle, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
