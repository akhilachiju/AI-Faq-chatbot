interface FAQ {
  keywords: string[];
  question: string;
  answer: string;
}

interface FAQCategory {
  [key: string]: FAQ[];
}

interface FAQData {
  en: FAQCategory;
  de: FAQCategory;
}

export const faqData: FAQData = {
  en: {
    about: [
      {
        keywords: ['what is', 'about', 'ava', 'who are you'],
        question: 'What is AVA?',
        answer: 'AVA (Administrative Virtual Assistant) provides administrative support and services to help clients manage formal and organizational processes efficiently.'
      },
      {
        keywords: ['services for', 'who can use', 'target'],
        question: 'Who are AVA\'s services for?',
        answer: 'Our services are designed for individuals, freelancers, and organizations who need support with administrative procedures.'
      },
      {
        keywords: ['location', 'where', 'office'],
        question: 'Where is AVA located?',
        answer: 'AVA operates remotely and supports clients online. Specific location details are shared upon request.'
      }
    ],
    services: [
      {
        keywords: ['services', 'what do you offer', 'help with'],
        question: 'What services does AVA offer?',
        answer: 'AVA supports clients with administrative tasks such as documentation guidance, application support, and process coordination.'
      },
      {
        keywords: ['personalized', 'tailored', 'custom'],
        question: 'Do you offer personalized support?',
        answer: 'Yes, services are tailored based on individual client needs.'
      },
      {
        keywords: ['international', 'expat', 'foreign'],
        question: 'Can you help international clients?',
        answer: 'Yes, AVA supports international and multilingual clients.'
      }
    ],
    documents: [
      {
        keywords: ['documents', 'what do i need', 'requirements', 'paperwork'],
        question: 'What documents do I need to get started?',
        answer: 'Required documents usually include a valid ID, proof of address, and relevant registration or tax documents. Requirements may vary depending on the service.'
      },
      {
        keywords: ['submit', 'send documents', 'upload'],
        question: 'How do I submit my documents?',
        answer: 'Documents can be securely shared online after booking a consultation.'
      },
      {
        keywords: ['confidential', 'privacy', 'secure', 'safe'],
        question: 'Are my documents kept confidential?',
        answer: 'Yes, all personal data and documents are handled confidentially and in accordance with data protection regulations.'
      }
    ],
    process: [
      {
        keywords: ['how long', 'timeline', 'duration', 'time'],
        question: 'How long does the process take?',
        answer: 'Processing times depend on the service but typically take a few business days.'
      },
      {
        keywords: ['track', 'status', 'progress'],
        question: 'Can I track the status of my request?',
        answer: 'Yes, AVA provides updates during the process.'
      },
      {
        keywords: ['after submit', 'next steps', 'what happens'],
        question: 'What happens after I submit my documents?',
        answer: 'The AVA team reviews your documents and contacts you if anything is missing or needs clarification.'
      }
    ],
    appointments: [
      {
        keywords: ['book', 'appointment', 'consultation', 'schedule'],
        question: 'How can I book a consultation?',
        answer: 'You can book a consultation online using the scheduling link provided by AVA.'
      },
      {
        keywords: ['reschedule', 'cancel', 'change appointment'],
        question: 'Can I reschedule or cancel my appointment?',
        answer: 'Yes, appointments can be rescheduled or canceled in advance.'
      },
      {
        keywords: ['language', 'languages', 'speak'],
        question: 'What languages do you support?',
        answer: 'Support is available in English and German. Additional languages may be available upon request.'
      }
    ],
    pricing: [
      {
        keywords: ['cost', 'price', 'pricing', 'how much'],
        question: 'How much do your services cost?',
        answer: 'Pricing depends on the service. Details are shared during the initial consultation.'
      },
      {
        keywords: ['pay', 'payment', 'invoice'],
        question: 'How do I pay for services?',
        answer: 'Payment instructions are provided after confirming the service.'
      },
      {
        keywords: ['refund', 'money back'],
        question: 'Do you offer refunds?',
        answer: 'Refund policies depend on the service and will be explained before payment.'
      }
    ],
    security: [
      {
        keywords: ['data safe', 'personal data', 'gdpr'],
        question: 'Is my personal data safe?',
        answer: 'Yes, AVA follows GDPR and data protection standards.'
      },
      {
        keywords: ['data stored', 'how long', 'retention'],
        question: 'How long is my data stored?',
        answer: 'Data is stored only as long as necessary for service delivery and legal requirements.'
      }
    ],
    contact: [
      {
        keywords: ['contact', 'reach', 'email'],
        question: 'How can I contact AVA?',
        answer: 'You can contact AVA via email or through the website contact form.'
      },
      {
        keywords: ['support hours', 'working hours', 'availability'],
        question: 'What are your support hours?',
        answer: 'Support hours vary. Messages are typically answered within one business day.'
      },
      {
        keywords: ['chatbot can\'t answer', 'need help', 'escalate'],
        question: 'What if the chatbot can\'t answer my question?',
        answer: 'The chatbot will forward your request to a human team member.'
      }
    ],
    chatbot: [
      {
        keywords: ['are you real', 'bot', 'ai', 'human'],
        question: 'Is this chatbot a real person?',
        answer: 'No, I\'m an AI assistant designed to answer common questions and help you reach the right support.'
      },
      {
        keywords: ['talk to human', 'real person', 'agent'],
        question: 'Can I talk to a human?',
        answer: 'Yes, I can connect you with a team member at any time.'
      }
    ]
  },
  de: {
    about: [
      {
        keywords: ['was ist', 'über', 'ava', 'wer bist du'],
        question: 'Was ist AVA?',
        answer: 'AVA (Administrative Virtual Assistant) bietet administrative Unterstützung und Dienstleistungen, um Kunden bei der effizienten Verwaltung formaler und organisatorischer Prozesse zu helfen.'
      },
      {
        keywords: ['dienstleistungen für', 'wer kann nutzen', 'zielgruppe'],
        question: 'Für wen sind die Dienstleistungen von AVA?',
        answer: 'Unsere Dienstleistungen richten sich an Einzelpersonen, Freiberufler und Organisationen, die Unterstützung bei administrativen Verfahren benötigen.'
      },
      {
        keywords: ['standort', 'wo', 'büro'],
        question: 'Wo befindet sich AVA?',
        answer: 'AVA arbeitet remote und unterstützt Kunden online. Spezifische Standortdetails werden auf Anfrage mitgeteilt.'
      }
    ],
    services: [
      {
        keywords: ['dienstleistungen', 'was bieten sie', 'hilfe bei'],
        question: 'Welche Dienstleistungen bietet AVA an?',
        answer: 'AVA unterstützt Kunden bei administrativen Aufgaben wie Dokumentationsberatung, Antragsunterstützung und Prozesskoordination.'
      },
      {
        keywords: ['personalisiert', 'maßgeschneidert', 'individuell'],
        question: 'Bieten Sie personalisierte Unterstützung an?',
        answer: 'Ja, die Dienstleistungen werden auf die individuellen Bedürfnisse der Kunden zugeschnitten.'
      },
      {
        keywords: ['international', 'expat', 'ausländisch'],
        question: 'Können Sie internationalen Kunden helfen?',
        answer: 'Ja, AVA unterstützt internationale und mehrsprachige Kunden.'
      }
    ],
    documents: [
      {
        keywords: ['dokumente', 'was brauche ich', 'anforderungen', 'unterlagen'],
        question: 'Welche Dokumente benötige ich für den Einstieg?',
        answer: 'Erforderliche Dokumente umfassen in der Regel einen gültigen Ausweis, einen Adressnachweis und relevante Registrierungs- oder Steuerdokumente. Die Anforderungen können je nach Dienstleistung variieren.'
      },
      {
        keywords: ['einreichen', 'dokumente senden', 'hochladen'],
        question: 'Wie reiche ich meine Dokumente ein?',
        answer: 'Dokumente können nach der Buchung einer Beratung sicher online geteilt werden.'
      },
      {
        keywords: ['vertraulich', 'datenschutz', 'sicher'],
        question: 'Werden meine Dokumente vertraulich behandelt?',
        answer: 'Ja, alle persönlichen Daten und Dokumente werden vertraulich und gemäß den Datenschutzbestimmungen behandelt.'
      }
    ],
    process: [
      {
        keywords: ['wie lange', 'zeitplan', 'dauer', 'zeit'],
        question: 'Wie lange dauert der Prozess?',
        answer: 'Die Bearbeitungszeiten hängen von der Dienstleistung ab, dauern aber in der Regel einige Werktage.'
      },
      {
        keywords: ['verfolgen', 'status', 'fortschritt'],
        question: 'Kann ich den Status meiner Anfrage verfolgen?',
        answer: 'Ja, AVA bietet während des Prozesses Updates an.'
      },
      {
        keywords: ['nach einreichung', 'nächste schritte', 'was passiert'],
        question: 'Was passiert nach der Einreichung meiner Dokumente?',
        answer: 'Das AVA-Team überprüft Ihre Dokumente und kontaktiert Sie, falls etwas fehlt oder geklärt werden muss.'
      }
    ],
    appointments: [
      {
        keywords: ['buchen', 'termin', 'beratung', 'vereinbaren'],
        question: 'Wie kann ich eine Beratung buchen?',
        answer: 'Sie können online eine Beratung über den von AVA bereitgestellten Terminlink buchen.'
      },
      {
        keywords: ['verschieben', 'stornieren', 'termin ändern'],
        question: 'Kann ich meinen Termin verschieben oder stornieren?',
        answer: 'Ja, Termine können im Voraus verschoben oder storniert werden.'
      },
      {
        keywords: ['sprache', 'sprachen', 'sprechen'],
        question: 'Welche Sprachen unterstützen Sie?',
        answer: 'Unterstützung ist auf Englisch und Deutsch verfügbar. Weitere Sprachen können auf Anfrage verfügbar sein.'
      }
    ],
    pricing: [
      {
        keywords: ['kosten', 'preis', 'preise', 'wie viel'],
        question: 'Wie viel kosten Ihre Dienstleistungen?',
        answer: 'Die Preise hängen von der Dienstleistung ab. Details werden während der ersten Beratung mitgeteilt.'
      },
      {
        keywords: ['bezahlen', 'zahlung', 'rechnung'],
        question: 'Wie bezahle ich für Dienstleistungen?',
        answer: 'Zahlungsanweisungen werden nach Bestätigung der Dienstleistung bereitgestellt.'
      },
      {
        keywords: ['rückerstattung', 'geld zurück'],
        question: 'Bieten Sie Rückerstattungen an?',
        answer: 'Rückerstattungsrichtlinien hängen von der Dienstleistung ab und werden vor der Zahlung erklärt.'
      }
    ],
    security: [
      {
        keywords: ['daten sicher', 'persönliche daten', 'dsgvo'],
        question: 'Sind meine persönlichen Daten sicher?',
        answer: 'Ja, AVA befolgt DSGVO- und Datenschutzstandards.'
      },
      {
        keywords: ['daten gespeichert', 'wie lange', 'aufbewahrung'],
        question: 'Wie lange werden meine Daten gespeichert?',
        answer: 'Daten werden nur so lange gespeichert, wie es für die Dienstleistungserbringung und gesetzliche Anforderungen erforderlich ist.'
      }
    ],
    contact: [
      {
        keywords: ['kontakt', 'erreichen', 'email'],
        question: 'Wie kann ich AVA kontaktieren?',
        answer: 'Sie können AVA per E-Mail oder über das Kontaktformular auf der Website kontaktieren.'
      },
      {
        keywords: ['support-zeiten', 'arbeitszeiten', 'verfügbarkeit'],
        question: 'Was sind Ihre Support-Zeiten?',
        answer: 'Die Support-Zeiten variieren. Nachrichten werden in der Regel innerhalb eines Werktages beantwortet.'
      },
      {
        keywords: ['chatbot kann nicht antworten', 'brauche hilfe', 'eskalieren'],
        question: 'Was ist, wenn der Chatbot meine Frage nicht beantworten kann?',
        answer: 'Der Chatbot leitet Ihre Anfrage an ein menschliches Teammitglied weiter.'
      }
    ],
    chatbot: [
      {
        keywords: ['bist du echt', 'bot', 'ki', 'mensch'],
        question: 'Ist dieser Chatbot eine echte Person?',
        answer: 'Nein, ich bin ein KI-Assistent, der entwickelt wurde, um häufige Fragen zu beantworten und Ihnen zu helfen, die richtige Unterstützung zu erreichen.'
      },
      {
        keywords: ['mit mensch sprechen', 'echte person', 'agent'],
        question: 'Kann ich mit einem Menschen sprechen?',
        answer: 'Ja, ich kann Sie jederzeit mit einem Teammitglied verbinden.'
      }
    ]
  }
};
