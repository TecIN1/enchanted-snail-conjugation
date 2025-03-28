
import React, { useState, useEffect } from 'react';
import WoodPanel from '../WoodPanel';
import SnailMascot from '../SnailMascot';
import MushRoom from '../MushRoom';
import { Button } from '@/components/ui/button';
import { gameLevels, playerData, Question } from '@/data/gameData';
import { toast } from '@/components/ui/use-toast';
import { useToast } from '@/hooks/use-toast';
import StarRating from '../StarRating';

interface GameScreenProps {
  levelId: number;
  onBack: () => void;
  onComplete: (score: number) => void;
  playerName: string;
}

const GameScreen: React.FC<GameScreenProps> = ({ 
  levelId, 
  onBack, 
  onComplete,
  playerName
}) => {
  const { toast } = useToast();
  const [currentLevel] = useState(() => gameLevels.find(level => level.id === levelId));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [snailPosition, setSnailPosition] = useState(0);
  const [snailEmotion, setSnailEmotion] = useState<'happy' | 'sad' | 'neutral'>('neutral');
  const [isGameComplete, setIsGameComplete] = useState(false);
  
  const currentQuestion = currentLevel?.questions[currentQuestionIndex];
  
  useEffect(() => {
    if (!currentLevel) {
      toast({
        title: "Niveau introuvable",
        description: "Ce niveau n'existe pas.",
        variant: "destructive"
      });
      onBack();
    }
  }, [currentLevel, onBack]);
  
  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null || !currentQuestion) return;
    
    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestion.correctAnswer;
    setIsAnswerCorrect(isCorrect);
    setSnailEmotion(isCorrect ? 'happy' : 'sad');
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      toast({
        title: "Bravo !",
        description: "C'est la bonne réponse !",
        variant: "default",
        className: "bg-green-500 text-white"
      });
      
      // Move snail forward
      setSnailPosition(prev => Math.min(prev + 10, 100));
    } else {
      toast({
        title: "Oups !",
        description: `La bonne réponse était : ${currentQuestion.correctAnswer}`,
        variant: "destructive"
      });
    }
    
    // Set a timeout to move to the next question
    setTimeout(() => {
      if (currentQuestionIndex < (currentLevel?.questions.length || 0) - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsAnswerCorrect(null);
        setSnailEmotion('neutral');
      } else {
        // Game is complete
        setIsGameComplete(true);
        const finalScore = isCorrect ? score + 1 : score;
        playerData.saveScore(levelId, finalScore);
      }
    }, 2000);
  };
  
  const handleNextLevel = () => {
    onComplete(score);
  };
  
  const handleReplayLevel = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setSnailEmotion('neutral');
    setSnailPosition(0);
    setIsGameComplete(false);
  };
  
  if (!currentLevel || !currentQuestion) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      {/* Decorative elements */}
      <div className="absolute left-10 bottom-10">
        <MushRoom color="bg-fairy-pink" size="md" glowing />
      </div>
      <div className="absolute right-20 bottom-20">
        <MushRoom color="bg-fairy-blue" size="sm" glowing />
      </div>
      
      <div className="w-full max-w-4xl">
        <div className="mb-6 flex justify-between items-center">
          <Button 
            onClick={onBack}
            className="bg-fairy-brown hover:bg-fairy-lightBrown text-white px-6 py-3 rounded-full"
          >
            Abandonner
          </Button>
          
          <h1 className="text-3xl font-handwriting text-fairy-purple">
            Niveau {currentLevel.id}: {currentLevel.title}
          </h1>
          
          <div className="text-xl font-comic bg-fairy-purple text-white px-4 py-2 rounded-full">
            {playerName}
          </div>
        </div>
        
        {isGameComplete ? (
          <WoodPanel className="p-8 relative animate-pop">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl mb-6 text-white font-bold text-center">
                {score >= 8 ? "Félicitations !" : score >= 5 ? "Bien joué !" : "Continue à t'entraîner !"}
              </h2>
              
              <div className="mb-8 text-center">
                <p className="text-white text-2xl mb-4">
                  Tu as obtenu :
                </p>
                
                <div className="flex justify-center my-6">
                  <StarRating rating={score} max={10} className="scale-150" />
                </div>
                
                <p className="text-white text-xl">
                  {score >= 8 ? "Tu maîtrises très bien ce niveau !" : 
                   score >= 5 ? "Tu es sur la bonne voie !" : 
                   "Tu peux réessayer pour t'améliorer !"}
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  onClick={handleReplayLevel}
                  className="bg-fairy-brown hover:bg-fairy-lightBrown text-white px-6 py-3 rounded-full"
                >
                  Rejouer ce niveau
                </Button>
                
                <Button 
                  onClick={handleNextLevel}
                  className="fairy-button text-xl"
                >
                  Retour à la sélection
                </Button>
              </div>
            </div>
            
            <div className="absolute -bottom-16 right-10">
              <SnailMascot emotion={score >= 6 ? 'happy' : 'sad'} />
            </div>
          </WoodPanel>
        ) : (
          <>
            {/* Progress bar with snail */}
            <div className="bg-fairy-lightBrown h-16 rounded-full mb-6 relative overflow-hidden border-4 border-fairy-brown">
              <div 
                className="h-full bg-fairy-lightGreen transition-all duration-1000 ease-out"
                style={{ width: `${snailPosition}%` }}
              ></div>
              <div 
                className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-out"
                style={{ left: `${snailPosition}%` }}
              >
                <div className="-ml-8 -mt-6 scale-50">
                  <SnailMascot emotion={snailEmotion} />
                </div>
              </div>
            </div>
            
            {/* Question panel */}
            <WoodPanel className="p-8 mb-6">
              <div className="text-center mb-4">
                <div className="text-white text-lg mb-2">
                  Question {currentQuestionIndex + 1} sur {currentLevel.questions.length}
                </div>
                <div className="text-white text-xl font-bold">
                  Complète la phrase avec le passé composé:
                </div>
              </div>
              
              <div className="bg-white bg-opacity-20 p-6 rounded-lg mb-6">
                <p className="text-white text-2xl text-center font-handwriting">
                  {currentQuestion.incomplete.split('___').map((part, index, array) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < array.length - 1 && (
                        <span className="inline-block mx-2 min-w-16 border-b-4 border-fairy-yellow animate-pulse">
                          {selectedAnswer && "  " + selectedAnswer + "  "}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((option) => (
                  <Button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedAnswer !== null}
                    className={`text-lg py-4 ${
                      selectedAnswer === option 
                        ? isAnswerCorrect 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-red-500 hover:bg-red-600'
                        : selectedAnswer !== null && option === currentQuestion.correctAnswer
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-fairy-purple hover:bg-fairy-lightPurple'
                    } text-white transition-all`}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </WoodPanel>
            
            {/* Score display */}
            <div className="text-center">
              <div className="inline-block bg-fairy-purple px-6 py-2 rounded-full text-white">
                Score: {score}/{currentQuestionIndex + (selectedAnswer !== null ? 1 : 0)}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GameScreen;
