
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const RulesBot: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToChat = () => {
    navigate('/chatbot');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={handleGoToChat}
        className="rounded-full px-6 py-6 bg-fairy-purple hover:bg-fairy-lightPurple shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <BookOpen className="mr-2" />
        Let's go
      </Button>
    </div>
  );
};

export default RulesBot;
