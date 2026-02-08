import { MessagesSquare } from 'lucide-react';

interface HomeProps {
  onStartChat: () => void;
}

export default function Home({ onStartChat }: HomeProps) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        
        {/* Main Content */}
        <div className="space-y-16">
          
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-8xl font-light tracking-tighter">
              AVA
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-xl">
              Administrative Virtual Assistant for modern businesses
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            <div className="bg-black p-8 hover:bg-white/5 transition-colors">
              <h3 className="text-lg font-medium mb-2">Document Management</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Streamlined guidance for requirements, submissions, and compliance
              </p>
            </div>
            <div className="bg-black p-8 hover:bg-white/5 transition-colors">
              <h3 className="text-lg font-medium mb-2">Appointment Scheduling</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Efficient booking and consultation management system
              </p>
            </div>
            <div className="bg-black p-8 hover:bg-white/5 transition-colors">
              <h3 className="text-lg font-medium mb-2">Multilingual Support</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                English and German language support for international clients
              </p>
            </div>
            <div className="bg-black p-8 hover:bg-white/5 transition-colors">
              <h3 className="text-lg font-medium mb-2">AI-Powered Assistance</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Intelligent responses with secure, confidential data handling
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-8 pt-8">
            <button
              onClick={onStartChat}
              className="px-8 py-3 bg-black text-white border-2 border-gray-400 font-medium rounded-full hover:border-white transition-all"
            >
              Launch Assistant
            </button>
            <span className="text-sm text-gray-500">
              Available 24/7 • GDPR Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={onStartChat}
        className="fixed bottom-8 right-8 w-16 h-16 bg-black text-white border-2 border-gray-400 rounded-full hover:border-white transition-all flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessagesSquare size={28} />
      </button>
    </div>
  );
}
