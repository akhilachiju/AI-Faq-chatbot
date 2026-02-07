export default function LanguageSelector({ onSelectLanguage }) {
  return (
    <div className="flex-1 flex items-center justify-center p-6 bg-black rounded-b-2xl">
      <div className="space-y-4 w-full">
        <button
          onClick={() => onSelectLanguage('en')}
          className="w-full px-6 py-3 bg-black text-white border-2 border-gray-400 hover:border-white transition-colors rounded-full"
        >
          🇬🇧 English
        </button>
        <button
          onClick={() => onSelectLanguage('de')}
          className="w-full px-6 py-3 bg-black text-white border-2 border-gray-400 hover:border-white rounded-full transition-colors"
        >
          🇩🇪 Deutsch
        </button>
      </div>
    </div>
  );
}
