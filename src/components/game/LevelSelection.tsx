
import React from 'react';
import WoodPanel from '../WoodPanel';
import SnailMascot from '../SnailMascot';
import MushRoom from '../MushRoom';
import { Button } from '@/components/ui/button';
import { gameLevels, playerData } from '@/data/gameData';
import StarRating from '../StarRating';

interface LevelSelectionProps {
  onSelectLevel: (levelId: number) => void;
  onBack: () => void;
  playerName: string;
}

const LevelSelection: React.FC<LevelSelectionProps> = ({ 
  onSelectLevel,
  onBack,
  playerName
}) => {
  const scores = playerData.getLevelScores();
  
  // Determine which levels are unlocked
  const calculateUnlocked = () => {
    const unlocked = [1]; // Level 1 is always unlocked
    
    // A level is unlocked if the previous level has a score of at least 6/10
    for (let i = 1; i < gameLevels.length; i++) {
      const prevLevelId = gameLevels[i-1].id;
      if (scores[prevLevelId] && scores[prevLevelId] >= 6) {
        unlocked.push(gameLevels[i].id);
      } else {
        break; // Stop unlocking when we reach a level that should be locked
      }
    }
    
    return unlocked;
  };
  
  const unlockedLevels = calculateUnlocked();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      {/* Decorative elements */}
      <div className="absolute left-10 bottom-10">
        <MushRoom color="bg-fairy-pink" size="lg" glowing />
      </div>
      <div className="absolute right-20 bottom-20">
        <MushRoom color="bg-fairy-blue" size="md" glowing />
      </div>
      
      <div className="max-w-4xl w-full">
        <div className="mb-6 flex justify-between items-center">
          <Button 
            onClick={onBack}
            className="bg-fairy-brown hover:bg-fairy-lightBrown text-white px-6 py-3 rounded-full"
          >
            Retour
          </Button>
          
          <h1 className="text-4xl font-handwriting text-fairy-purple">
            Choisis ton niveau
          </h1>
          
          <div className="text-xl font-comic bg-fairy-purple text-white px-4 py-2 rounded-full">
            {playerName}
          </div>
        </div>
        
        <WoodPanel className="p-8 relative">
          <div className="absolute -top-16 -right-10">
            <SnailMascot emotion="happy" />
          </div>
          
          <h2 className="text-2xl text-white mb-6 text-center">
            Niveaux de la forêt enchantée
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gameLevels.map((level) => {
              const isUnlocked = unlockedLevels.includes(level.id);
              const score = scores[level.id] || 0;
              
              return (
                <div 
                  key={level.id}
                  className={`relative border-4 ${isUnlocked ? 'border-fairy-yellow' : 'border-gray-500'} 
                    rounded-lg p-4 bg-opacity-80
                    ${isUnlocked ? 'bg-fairy-brown' : 'bg-gray-700'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-bold ${isUnlocked ? 'text-white' : 'text-gray-400'}`}>
                      Niveau {level.id}: {level.title}
                    </h3>
                    {score > 0 && isUnlocked && (
                      <StarRating rating={score} max={10} />
                    )}
                  </div>
                  
                  <p className={`mb-4 text-sm ${isUnlocked ? 'text-white' : 'text-gray-400'}`}>
                    {level.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      level.difficulty === 'facile' ? 'bg-green-500' : 
                      level.difficulty === 'moyen' ? 'bg-yellow-500' : 
                      'bg-red-500'
                    } text-white`}>
                      {level.difficulty}
                    </span>
                    
                    <Button
                      onClick={() => isUnlocked && onSelectLevel(level.id)}
                      disabled={!isUnlocked}
                      className={`${
                        isUnlocked ? 'bg-fairy-purple hover:bg-fairy-lightPurple' : 'bg-gray-500'
                      } text-white px-6 py-2 rounded-full`}
                    >
                      {isUnlocked ? "Jouer" : "Niveau verrouillé"}
                    </Button>
                  </div>
                  
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                      <div className="bg-fairy-brown px-4 py-2 rounded-lg text-white shadow-lg border-2 border-fairy-yellow">
                        Termine le niveau précédent avec au moins 6/10 pour débloquer
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </WoodPanel>
      </div>
    </div>
  );
};

export default LevelSelection;
