
import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const ChatbotUI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "¡Hola! Soy Alexia Foquita 🦭. ¿Te gustaría adoptarme virtualmente?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Auto-scroll to bottom of chat
  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);
  
  // Simulate typing indicator
  useEffect(() => {
    if (messages[messages.length - 1]?.isBot) {
      setIsTyping(false);
    }
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isBot: false }]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const responses = [
        "¡Fantástico! 💖 Me encanta conocer nuevas personas. ¿En qué proyecto puedo ayudarte hoy?",
        "¡Qué emoción! 🎉 Estoy lista para acompañarte en tu jornada de desarrollo.",
        "¡Genial! 🦭 Mis maracas y yo estamos listos para traer ritmo a tu proyecto."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isBot: true }]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <div className="kawaii-card max-w-lg w-full mx-auto overflow-hidden flex flex-col h-96">
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-3 text-white">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
            <span className="text-2xl">🦭</span>
          </div>
          <div>
            <p className="font-bold text-lg">Alexia Foquita</p>
            <p className="text-xs opacity-80">En línea - Lista para ayudar</p>
          </div>
        </div>
      </div>
      
      <div 
        id="chat-container" 
        className="flex-grow p-4 overflow-y-auto bg-gray-50 bg-opacity-50"
        style={{ scrollBehavior: "smooth" }}
      >
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div 
              className={`max-w-[80%] rounded-2xl p-3 ${
                message.isBot 
                  ? 'bg-gradient-to-r from-purple-100 to-pink-100 rounded-tl-none' 
                  : 'bg-gradient-to-r from-blue-100 to-cyan-100 rounded-br-none'
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="mb-4 flex justify-start">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl rounded-tl-none max-w-[80%] p-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-3 border-t border-gray-200 bg-white flex">
        <input
          type="text"
          placeholder="Escribe un mensaje a Alexia..."
          className="flex-grow px-4 py-2 rounded-l-full border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button 
          onClick={handleSendMessage}
          className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-r-full hover:opacity-90 transition-opacity"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatbotUI;
