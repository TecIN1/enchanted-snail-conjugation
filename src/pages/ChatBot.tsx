
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import WoodPanel from '@/components/WoodPanel';
import SnailMascot from '@/components/SnailMascot';

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Bonjour ! Je suis l'escargot Conjugueur, pose-moi des questions sur le passé composé en français !",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      content: input,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Clear input field
    setInput('');

    try {
      const response = await fetch('https://haffa2.app.n8n.cloud/webhook-test/Conju6ais0n', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          question: input 
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      
      // Add bot response
      setMessages(prev => [...prev, {
        content: data.response || "Je suis désolé, je n'ai pas pu comprendre ta question. Peux-tu reformuler?",
        isUser: false,
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erreur",
        description: "Impossible de communiquer avec l'escargot. Réessaye plus tard!",
        variant: "destructive"
      });
      
      // Add error message
      setMessages(prev => [...prev, {
        content: "Je suis désolé, j'ai eu un problème technique. Peux-tu réessayer?",
        isUser: false,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-fairy-lightPurple/20 to-fairy-lightGreen/30 flex flex-col">
      {/* Header with back button */}
      <div className="p-4 bg-fairy-purple text-white shadow-md">
        <div className="container mx-auto flex items-center">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-fairy-lightPurple/30 mr-4"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour
          </Button>
          <h1 className="text-2xl font-handwriting">L'Escargot Conjugueur</h1>
        </div>
      </div>
      
      {/* Chat container */}
      <div className="flex-1 container mx-auto p-4 overflow-hidden flex flex-col">
        <WoodPanel className="flex-1 mb-4 overflow-y-auto p-6 shadow-md relative">
          <div className="absolute top-4 right-4">
            <SnailMascot emotion="happy" size="sm" />
          </div>
          
          <div className="space-y-4 pb-2">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[75%] rounded-lg p-3 ${
                    message.isUser 
                      ? 'bg-fairy-purple text-white' 
                      : 'bg-white border border-fairy-purple/30 text-fairy-purple'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <div className={`text-xs mt-1 ${message.isUser ? 'text-white/70' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-fairy-purple/30 text-fairy-purple max-w-[75%] rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-fairy-purple rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-fairy-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-fairy-purple rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </WoodPanel>
        
        {/* Input area */}
        <form onSubmit={handleSubmit} className="flex items-end gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pose une question sur le passé composé..."
            className="flex-1 resize-none bg-white border-fairy-purple/50 focus-visible:ring-fairy-purple"
            rows={2}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button 
            type="submit" 
            className="h-12 bg-fairy-purple hover:bg-fairy-lightPurple"
            disabled={isLoading || !input.trim()}
          >
            <Send size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
