const { faqData } = require('../data/avaFaqData');

function buildFAQContext(language) {
  let context = '';
  Object.entries(faqData[language]).forEach(([category, faqs]) => {
    faqs.forEach(faq => {
      context += `Q: ${faq.question}\nA: ${faq.answer}\n\n`;
    });
  });
  return context;
}

function findBestMatch(message, language) {
  const msg = message.toLowerCase();
  let bestMatch = null;
  let highestScore = 0;
  
  Object.values(faqData[language]).forEach(category => {
    category.forEach(faq => {
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

module.exports = { buildFAQContext, findBestMatch };
