
export interface Question {
  id: string;
  incomplete: string;
  options: string[];
  correctAnswer: string;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  questions: Question[];
  difficulty: 'facile' | 'moyen' | 'difficile';
}

export const gameLevels: Level[] = [
  {
    id: 1,
    title: "Premier pas",
    description: "Commençons avec les verbes du premier groupe (en -er)",
    difficulty: 'facile',
    questions: [
      {
        id: "1-1",
        incomplete: "Elle ___ un gâteau.",
        options: ["a préparé", "a préparer", "est préparé", "a préparée"],
        correctAnswer: "a préparé"
      },
      {
        id: "1-2",
        incomplete: "Nous ___ au parc.",
        options: ["avons joué", "avons jouer", "sommes joué", "ont joué"],
        correctAnswer: "avons joué"
      },
      {
        id: "1-3",
        incomplete: "Tu ___ la porte.",
        options: ["as fermé", "a fermé", "as fermer", "as fermée"],
        correctAnswer: "as fermé"
      },
      {
        id: "1-4",
        incomplete: "J'___ ma chambre.",
        options: ["ai rangé", "ai ranger", "suis rangé", "est rangé"],
        correctAnswer: "ai rangé"
      },
      {
        id: "1-5",
        incomplete: "Il ___ son ami.",
        options: ["a aidé", "a aider", "est aidé", "a aidés"],
        correctAnswer: "a aidé"
      },
      {
        id: "1-6",
        incomplete: "Vous ___ la télévision.",
        options: ["avez regardé", "avez regarder", "êtes regardé", "ont regardé"],
        correctAnswer: "avez regardé"
      },
      {
        id: "1-7",
        incomplete: "Ils ___ dans la piscine.",
        options: ["ont nagé", "ont nager", "sont nagé", "ont nagés"],
        correctAnswer: "ont nagé"
      },
      {
        id: "1-8",
        incomplete: "Le chien ___ son jouet.",
        options: ["a cherché", "a chercher", "est cherché", "a cherchée"],
        correctAnswer: "a cherché"
      },
      {
        id: "1-9",
        incomplete: "Nous ___ nos amis.",
        options: ["avons invité", "avons inviter", "sommes invité", "avons invités"],
        correctAnswer: "avons invité"
      },
      {
        id: "1-10",
        incomplete: "Vous ___ à la fête.",
        options: ["avez dansé", "avez danser", "êtes dansé", "avez dansés"],
        correctAnswer: "avez dansé"
      }
    ]
  },
  {
    id: 2,
    title: "Verbes avec être",
    description: "Utilisons l'auxiliaire être avec certains verbes",
    difficulty: 'moyen',
    questions: [
      {
        id: "2-1",
        incomplete: "Elle ___ à l'école.",
        options: ["est allée", "a allé", "est allé", "a allée"],
        correctAnswer: "est allée"
      },
      {
        id: "2-2",
        incomplete: "Nous ___ tôt ce matin.",
        options: ["sommes partis", "avons parti", "sommes parti", "avons partis"],
        correctAnswer: "sommes partis"
      },
      {
        id: "2-3",
        incomplete: "Il ___ dans la chambre.",
        options: ["est entré", "a entré", "est entrée", "a entrée"],
        correctAnswer: "est entré"
      },
      {
        id: "2-4",
        incomplete: "Je ___ très tard.",
        options: ["suis arrivé", "ai arrivé", "suis arrivée", "ai arrivée"],
        correctAnswer: "suis arrivé"
      },
      {
        id: "2-5",
        incomplete: "Tu ___ par la fenêtre.",
        options: ["es sorti", "as sorti", "es sortie", "as sortie"],
        correctAnswer: "es sorti"
      },
      {
        id: "2-6",
        incomplete: "Elles ___ au théâtre.",
        options: ["sont allées", "ont allé", "sont allés", "ont allées"],
        correctAnswer: "sont allées"
      },
      {
        id: "2-7",
        incomplete: "Vous ___ à quelle heure ?",
        options: ["êtes venus", "avez venu", "êtes venu", "avez venus"],
        correctAnswer: "êtes venus"
      },
      {
        id: "2-8",
        incomplete: "Marie ___ à la maison.",
        options: ["est rentrée", "a rentré", "est rentré", "a rentrée"],
        correctAnswer: "est rentrée"
      },
      {
        id: "2-9",
        incomplete: "Les feuilles ___ des arbres.",
        options: ["sont tombées", "ont tombé", "sont tombés", "ont tombées"],
        correctAnswer: "sont tombées"
      },
      {
        id: "2-10",
        incomplete: "Nous ___ en vacances.",
        options: ["sommes restés", "avons resté", "sommes resté", "avons restés"],
        correctAnswer: "sommes restés"
      }
    ]
  },
  {
    id: 3,
    title: "Verbes du 2ème groupe",
    description: "Travaillons les verbes qui se terminent en -ir",
    difficulty: 'moyen',
    questions: [
      {
        id: "3-1",
        incomplete: "J'___ le livre en une journée.",
        options: ["ai fini", "ai finir", "suis fini", "ai finis"],
        correctAnswer: "ai fini"
      },
      {
        id: "3-2",
        incomplete: "Nous ___ notre travail.",
        options: ["avons réussi", "avons réussir", "sommes réussi", "avons réussis"],
        correctAnswer: "avons réussi"
      },
      {
        id: "3-3",
        incomplete: "Tu ___ de joie.",
        options: ["as bondi", "as bondir", "es bondi", "as bondis"],
        correctAnswer: "as bondi"
      },
      {
        id: "3-4",
        incomplete: "Il ___ à la question.",
        options: ["a réfléchi", "a réfléchir", "est réfléchi", "a réfléchis"],
        correctAnswer: "a réfléchi"
      },
      {
        id: "3-5",
        incomplete: "Elles ___ le repas ensemble.",
        options: ["ont choisi", "ont choisir", "sont choisi", "ont choisis"],
        correctAnswer: "ont choisi"
      },
      {
        id: "3-6",
        incomplete: "Vous ___ le problème.",
        options: ["avez résolu", "avez résoudre", "êtes résolu", "avez résolus"],
        correctAnswer: "avez résolu"
      },
      {
        id: "3-7",
        incomplete: "Nous ___ cela.",
        options: ["avons établi", "avons établir", "sommes établi", "avons établis"],
        correctAnswer: "avons établi"
      },
      {
        id: "3-8",
        incomplete: "J'___ à l'examen.",
        options: ["ai réussi", "ai réussir", "suis réussi", "ai réussis"],
        correctAnswer: "ai réussi"
      },
      {
        id: "3-9",
        incomplete: "Il ___ le défi.",
        options: ["a accompli", "a accomplir", "est accompli", "a accomplis"],
        correctAnswer: "a accompli"
      },
      {
        id: "3-10",
        incomplete: "Ils ___ la fête.",
        options: ["ont garanti", "ont garantir", "sont garanti", "ont garantis"],
        correctAnswer: "ont garanti"
      }
    ]
  },
  {
    id: 4,
    title: "Participes passés difficiles",
    description: "Apprenons quelques participes passés irréguliers",
    difficulty: 'difficile',
    questions: [
      {
        id: "4-1",
        incomplete: "Il ___ son livre.",
        options: ["a écrit", "a écri", "est écrit", "a écrite"],
        correctAnswer: "a écrit"
      },
      {
        id: "4-2",
        incomplete: "J'___ mes clés.",
        options: ["ai perdu", "ai perdre", "suis perdu", "ai perdus"],
        correctAnswer: "ai perdu"
      },
      {
        id: "4-3",
        incomplete: "Nous ___ la vérité.",
        options: ["avons dit", "avons dire", "sommes dit", "avons dits"],
        correctAnswer: "avons dit"
      },
      {
        id: "4-4",
        incomplete: "Tu ___ la réponse.",
        options: ["as compris", "as comprendre", "es compris", "as comprises"],
        correctAnswer: "as compris"
      },
      {
        id: "4-5",
        incomplete: "Elle ___ à la gare.",
        options: ["est venue", "a venu", "est venu", "a venue"],
        correctAnswer: "est venue"
      },
      {
        id: "4-6",
        incomplete: "Vous ___ votre manteau.",
        options: ["avez pris", "avez prendre", "êtes pris", "avez prise"],
        correctAnswer: "avez pris"
      },
      {
        id: "4-7",
        incomplete: "Ils ___ au concert.",
        options: ["ont été", "ont être", "sont été", "ont étés"],
        correctAnswer: "ont été"
      },
      {
        id: "4-8",
        incomplete: "J'___ cette histoire.",
        options: ["ai lu", "ai lire", "suis lu", "ai lus"],
        correctAnswer: "ai lu"
      },
      {
        id: "4-9",
        incomplete: "Nous ___ le cadeau.",
        options: ["avons ouvert", "avons ouvrir", "sommes ouvert", "avons ouverts"],
        correctAnswer: "avons ouvert"
      },
      {
        id: "4-10",
        incomplete: "Ils ___ la montagne.",
        options: ["ont atteint", "ont atteindre", "sont atteint", "ont atteints"],
        correctAnswer: "ont atteint"
      }
    ]
  },
  {
    id: 5,
    title: "Accords spéciaux",
    description: "Attention aux accords avec l'auxiliaire avoir",
    difficulty: 'difficile',
    questions: [
      {
        id: "5-1",
        incomplete: "La pomme que j'___ était délicieuse.",
        options: ["ai mangée", "ai mangé", "suis mangé", "ai manger"],
        correctAnswer: "ai mangée"
      },
      {
        id: "5-2",
        incomplete: "Les livres qu'il ___ sont intéressants.",
        options: ["a lus", "a lu", "est lu", "a lire"],
        correctAnswer: "a lus"
      },
      {
        id: "5-3",
        incomplete: "La lettre que nous ___ était courte.",
        options: ["avons écrite", "avons écrit", "sommes écrit", "avons écrire"],
        correctAnswer: "avons écrite"
      },
      {
        id: "5-4",
        incomplete: "Les fleurs que tu ___ sont magnifiques.",
        options: ["as cueillies", "as cueilli", "es cueilli", "as cueillir"],
        correctAnswer: "as cueillies"
      },
      {
        id: "5-5",
        incomplete: "La chanson qu'elle ___ était belle.",
        options: ["a chantée", "a chanté", "est chanté", "a chanter"],
        correctAnswer: "a chantée"
      },
      {
        id: "5-6",
        incomplete: "Les histoires que vous ___ étaient drôles.",
        options: ["avez racontées", "avez raconté", "êtes raconté", "avez raconter"],
        correctAnswer: "avez racontées"
      },
      {
        id: "5-7",
        incomplete: "Les chaises qu'ils ___ sont confortables.",
        options: ["ont choisies", "ont choisi", "sont choisi", "ont choisir"],
        correctAnswer: "ont choisies"
      },
      {
        id: "5-8",
        incomplete: "Les devoirs que j'___ étaient difficiles.",
        options: ["ai faits", "ai fait", "suis fait", "ai faire"],
        correctAnswer: "ai faits"
      },
      {
        id: "5-9",
        incomplete: "Les erreurs que nous ___ sont corrigées.",
        options: ["avons commises", "avons commis", "sommes commis", "avons commettre"],
        correctAnswer: "avons commises"
      },
      {
        id: "5-10",
        incomplete: "Les idées qu'elle ___ sont brillantes.",
        options: ["a eues", "a eu", "est eu", "a avoir"],
        correctAnswer: "a eues"
      }
    ]
  },
  {
    id: 6,
    title: "Niveau expert",
    description: "Mélange de tous les cas difficiles",
    difficulty: 'difficile',
    questions: [
      {
        id: "6-1",
        incomplete: "Elles se sont ___ les mains.",
        options: ["lavé", "lavées", "lavés", "lavée"],
        correctAnswer: "lavé"
      },
      {
        id: "6-2",
        incomplete: "Elle s'est ___ à la bibliothèque.",
        options: ["rendue", "rendu", "rendus", "rendues"],
        correctAnswer: "rendue"
      },
      {
        id: "6-3",
        incomplete: "Les filles se sont ___ dans la forêt.",
        options: ["perdues", "perdu", "perdus", "perdue"],
        correctAnswer: "perdues"
      },
      {
        id: "6-4",
        incomplete: "Quelle quantité de pain avez-vous ___ ?",
        options: ["acheté", "achetée", "achetés", "achetées"],
        correctAnswer: "acheté"
      },
      {
        id: "6-5",
        incomplete: "Combien de lettres as-tu ___ ?",
        options: ["écrites", "écrit", "écrite", "écrits"],
        correctAnswer: "écrites"
      },
      {
        id: "6-6",
        incomplete: "Cette chanson, je l'ai ___ hier.",
        options: ["composée", "composé", "composés", "composées"],
        correctAnswer: "composée"
      },
      {
        id: "6-7",
        incomplete: "Les décisions qu'ils ont ___ sont importantes.",
        options: ["prises", "pris", "prise", "priser"],
        correctAnswer: "prises"
      },
      {
        id: "6-8",
        incomplete: "La voiture que j'ai ___ est rouge.",
        options: ["conduite", "conduit", "conduits", "conduites"],
        correctAnswer: "conduite"
      },
      {
        id: "6-9",
        incomplete: "Les films que nous avons ___ étaient intéressants.",
        options: ["vus", "vu", "vue", "vues"],
        correctAnswer: "vus"
      },
      {
        id: "6-10",
        incomplete: "Cette histoire, il l'a ___ plusieurs fois.",
        options: ["racontée", "raconté", "racontés", "racontées"],
        correctAnswer: "racontée"
      }
    ]
  }
];

export const playerData = {
  getLevelScores: () => {
    const scores = localStorage.getItem('passCompose_scores');
    return scores ? JSON.parse(scores) : {};
  },

  saveScore: (levelId: number, score: number) => {
    const scores = localStorage.getItem('passCompose_scores');
    const currentScores = scores ? JSON.parse(scores) : {};
    
    // Only update if the new score is better than the existing one
    if (!currentScores[levelId] || score > currentScores[levelId]) {
      currentScores[levelId] = score;
      localStorage.setItem('passCompose_scores', JSON.stringify(currentScores));
    }
    
    return currentScores;
  },

  getPlayerName: () => {
    return localStorage.getItem('passCompose_playerName') || '';
  },

  savePlayerName: (name: string) => {
    localStorage.setItem('passCompose_playerName', name);
  }
};
