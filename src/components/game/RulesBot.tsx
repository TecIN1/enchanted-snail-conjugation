import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

const RulesBot: React.FC = () => {
  return (
    <>
      {/* "Let's go" button fixed at the bottom left */}
      <Link to="/chatbot">
        <Button 
          className="fixed bottom-4 left-4 bg-fairy-purple hover:bg-fairy-lightPurple text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 z-50"
        >
          Let's go
        </Button>
      </Link>
      
      {/* Help button with dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="fixed bottom-4 right-4 rounded-full h-14 w-14 bg-fairy-purple text-white hover:bg-fairy-lightPurple shadow-lg border-2 border-white animate-bounce-slow z-50"
          >
            <HelpCircle className="h-8 w-8" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-fairy-lightGreen border-4 border-fairy-brown">
          <DialogHeader>
            <DialogTitle className="text-2xl font-handwriting">Comment jouer ?</DialogTitle>
            <DialogDescription className="text-base text-black">
              Voici les règles du jeu du passé composé
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 font-comic text-black">
            <div>
              <h3 className="font-bold text-fairy-purple">Objectif du jeu:</h3>
              <p>Complète les phrases en choisissant la forme correcte du verbe au passé composé.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-fairy-purple">Comment jouer:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Entre ton nom pour commencer</li>
                <li>Choisis un niveau de difficulté</li>
                <li>Lis la phrase à compléter</li>
                <li>Clique sur la forme correcte du verbe au passé composé</li>
                <li>L'escargot avancera si ta réponse est correcte</li>
                <li>Essaie d'obtenir le maximum d'étoiles!</li>
              </ol>
            </div>
            
            <div>
              <h3 className="font-bold text-fairy-purple">Rappel:</h3>
              <p>Le passé composé se forme avec l'auxiliaire (avoir ou être) + participe passé du verbe.</p>
            </div>
            
            <div className="pt-4 flex justify-center">
              <Link to="/chatbot">
                <Button className="bg-fairy-purple hover:bg-fairy-lightPurple text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                  Poser une question à l'assistant
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RulesBot;
