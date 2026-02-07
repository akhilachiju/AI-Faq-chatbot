export default function ChatHeader({ language, onLanguageSwitch, onClose }) {
  return (
    <div className="bg-black text-white p-4 flex justify-between items-center border-b border-white/20 rounded-t-2xl">
      <div>
        <h2 className="font-semibold">AVA Assistant</h2>
        {language && (
          <button
            onClick={onLanguageSwitch}
            className="text-xs opacity-60 hover:opacity-100 transition-opacity"
          >
            {language === 'en' ? '🇬🇧 English → Switch to Deutsch' : '🇩🇪 Deutsch → Switch to English'}
          </button>
        )}
      </div>
      <button
        onClick={onClose}
        className="text-xl hover:opacity-60"
      >
        ✕
      </button>
    </div>
  );
}
