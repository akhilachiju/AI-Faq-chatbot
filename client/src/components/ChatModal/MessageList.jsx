export default function MessageList({ messages, typingMessage, loading, messagesEndRef }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-black">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${
            msg.sender === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[80%] px-4 py-2 text-sm whitespace-pre-line rounded-2xl ${
              msg.sender === 'user'
                ? 'bg-white text-black rounded-br-sm'
                : 'bg-white/10 text-white border border-white/20 rounded-bl-sm'
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}

      {typingMessage && (
        <div className="flex justify-start">
          <div className="max-w-[80%] px-4 py-2 text-sm whitespace-pre-line rounded-2xl bg-white/10 text-white border border-white/20 rounded-bl-sm">
            {typingMessage}
          </div>
        </div>
      )}

      {loading && (
        <div className="flex justify-start">
          <div className="px-2 flex gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
