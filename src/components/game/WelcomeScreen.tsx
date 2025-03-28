
import React, { useState, useEffect } from 'react';
import WoodPanel from '../WoodPanel';
import SnailMascot from '../SnailMascot';
import MushRoom from '../MushRoom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { playerData } from '@/data/gameData';

interface WelcomeScreenProps {
  onStart: (playerName: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [playerName, setPlayerName] = useState('');
  const [isReturningPlayer, setIsReturningPlayer] = useState(false);
  
  useEffect(() => {
    const savedName = playerData.getPlayerName();
    if (savedName) {
      setPlayerName(savedName);
      setIsReturningPlayer(true);
    }
  }, []);
  
  const handleStart = () => {
    if (playerName.trim()) {
      playerData.savePlayerName(playerName.trim());
      onStart(playerName.trim());
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12">
      {/* Decorative mushrooms */}
      <div className="absolute left-10 bottom-10">
        <MushRoom color="bg-fairy-pink" size="lg" glowing />
      </div>
      <div className="absolute right-20 bottom-20">
        <MushRoom color="bg-fairy-lightPurple" size="md" glowing />
      </div>
      <div className="absolute left-1/4 top-20">
        <MushRoom color="bg-fairy-blue" size="sm" glowing />
      </div>
      <div className="absolute right-1/4 top-32">
        <MushRoom color="bg-fairy-yellow" size="sm" glowing />
      </div>
      
      {/* Game title and welcome panel */}
      <div className="max-w-2xl w-full px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-handwriting mb-2 text-fairy-purple animate-float">
            Escargot Conjugueur
          </h1>
          <p className="text-xl font-comic text-white bg-fairy-purple px-4 py-1 rounded-full inline-block shadow-lg">
            Aventure au Passé Composé
          </p>
        </div>
        
        <div className="relative">
          <WoodPanel className="p-8 mb-12 shadow-2xl">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl mb-6 text-white font-bold">
                {isReturningPlayer ? "Bon retour," : "Bienvenue dans la forêt enchantée !"}
              </h2>
              
              <div className="mb-8 text-center">
                <p className="text-white text-lg mb-4">
                  {isReturningPlayer 
                    ? "Continue ton aventure magique de conjugaison !" 
                    : "Prêt à découvrir les secrets du passé composé avec notre ami l'escargot ?"}
                </p>
                
                <div className="flex flex-col items-center mt-8">
                  <label htmlFor="playerName" className="text-white text-lg mb-2">Comment t'appelles-tu ?</label>
                  <Input
                    id="playerName"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-64 mb-4 bg-white border-fairy-purple text-fairy-purple"
                    placeholder="Ton prénom"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleStart}
                disabled={!playerName.trim()}
                className="fairy-button text-xl px-8 py-6"
              >
                {isReturningPlayer ? "Continuer l'aventure" : "Commencer l'aventure"}
              </Button>
            </div>
          </WoodPanel>
          
          {/* Snail mascot */}
          <div className="absolute -right-16 -top-20 transform rotate-12">
            <SnailMascot emotion="happy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
