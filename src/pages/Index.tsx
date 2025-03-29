
import React, { useState } from 'react';
import WelcomeScreen from '@/components/game/WelcomeScreen';
import LevelSelection from '@/components/game/LevelSelection';
import GameScreen from '@/components/game/GameScreen';
import RulesBot from '@/components/game/RulesBot';
import { Toaster } from '@/components/ui/toaster';

type GameState = 'welcome' | 'levelSelection' | 'playing';

const Index: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [playerName, setPlayerName] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const handleStartGame = (name: string) => {
    setPlayerName(name);
    setGameState('levelSelection');
  };

  const handleSelectLevel = (levelId: number) => {
    setSelectedLevel(levelId);
    setGameState('playing');
  };

  const handleBackToLevels = () => {
    setSelectedLevel(null);
    setGameState('levelSelection');
  };

  const handleLevelComplete = (score: number) => {
    setSelectedLevel(null);
    setGameState('levelSelection');
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {gameState === 'welcome' && (
        <WelcomeScreen onStart={handleStartGame} />
      )}

      {gameState === 'levelSelection' && (
        <LevelSelection 
          onSelectLevel={handleSelectLevel} 
          onBack={() => setGameState('welcome')}
          playerName={playerName}
        />
      )}

      {gameState === 'playing' && selectedLevel !== null && (
        <GameScreen 
          levelId={selectedLevel} 
          onBack={handleBackToLevels}
          onComplete={handleLevelComplete}
          playerName={playerName}
        />
      )}
      
      {/* Add the RulesBot component to be visible on all screens */}
      <RulesBot />
      
      <Toaster />
    </div>
  );
};

export default Index;
