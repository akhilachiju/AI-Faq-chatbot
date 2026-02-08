import { faqData } from '../data/avaFaqData';

interface FAQ {
  keywords: string[];
  question: string;
  answer: string;
}

export function buildFAQContext(language: 'en' | 'de'): string {
  let context = '';
  Object.entries(faqData[language]).forEach(([category, faqs]) => {
    faqs.forEach((faq: FAQ) => {
      context += `Q: ${faq.question}\nA: ${faq.answer}\n\n`;
    });
  });
  return context;
}

export function findBestMatch(message: string, language: 'en' | 'de'): string {
  const msg = message.toLowerCase();
  let bestMatch: string | null = null;
  let highestScore = 0;
  
  Object.values(faqData[language]).forEach((category: FAQ[]) => {
    category.forEach((faq: FAQ) => {
      if (faq.keywords) {
        const score = faq.keywords.filter(kw => msg.includes(kw.toLowerCase())).length;
        if (score > highestScore) {
          highestScore = score;
          bestMatch = faq.answer;
        }
      }
    });
  });
  
  return bestMatch || (language === 'de' 
    ? 'Entschuldigung, ich konnte keine passende Antwort finden. Bitte kontaktieren Sie unser Team.'
    : 'Sorry, I couldn\'t find a matching answer. Please contact our team.');
}
