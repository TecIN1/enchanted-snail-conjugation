
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Bonjour ! Je suis ton assistant pour le passé composé. Que voudrais-tu savoir ?',
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Send the question to n8n with the updated webhook URL
      const response = await fetch('https://haffa2.app.n8n.cloud/webhook-test/conjugaison', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: inputValue,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      
      // Add assistant message with the response
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.answer || "Je suis désolé, je n'ai pas pu comprendre ta question.",
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de recevoir une réponse. Veuillez réessayer.',
        variant: 'destructive',
      });

      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Je suis désolé, il y a eu un problème. Peux-tu réessayer?",
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-fairy-lightGreen">
      {/* Header */}
      <div className="p-4 bg-fairy-purple text-white flex items-center shadow-md">
        <Link to="/" className="mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-handwriting">Assistant de Conjugaison</h1>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[80%] p-3 rounded-lg ${
              message.role === 'user'
                ? 'bg-fairy-purple text-white ml-auto rounded-br-none'
                : 'bg-white text-gray-800 mr-auto rounded-bl-none border-2 border-fairy-brown'
            }`}
          >
            <p className="font-comic">{message.content}</p>
            <span className="text-xs opacity-70 mt-1 block">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Pose une question sur le passé composé..."
            disabled={isLoading}
            className="flex-1 border-fairy-purple focus:ring-fairy-purple"
            autoFocus
          />
          <Button 
            type="submit" 
            disabled={isLoading || !inputValue.trim()}
            className="bg-fairy-purple hover:bg-fairy-lightPurple"
          >
            <Send size={20} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
