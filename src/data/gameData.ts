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
  },
  {
    id: 7,
    title: "Verbes pronominaux",
    description: "Utilisons les verbes pronominaux au passé composé",
    difficulty: 'difficile',
    questions: [
      {
        id: "7-1",
        incomplete: "Je ___ très tôt ce matin.",
        options: ["me suis levé", "m'ai levé", "me suis levée", "m'est levé"],
        correctAnswer: "me suis levé"
      },
      {
        id: "7-2",
        incomplete: "Nous ___ à la montagne l'été dernier.",
        options: ["nous sommes promenés", "nous avons promené", "nous sommes promené", "nous ont promenés"],
        correctAnswer: "nous sommes promenés"
      },
      {
        id: "7-3",
        incomplete: "Tu ___ dans l'eau froide ?",
        options: ["t'es baigné", "t'as baigné", "t'es baignée", "t'as baignée"],
        correctAnswer: "t'es baigné"
      },
      {
        id: "7-4",
        incomplete: "Elles ___ toute la journée.",
        options: ["se sont amusées", "se sont amusés", "s'ont amusées", "s'ont amusés"],
        correctAnswer: "se sont amusées"
      },
      {
        id: "7-5",
        incomplete: "Vous ___ de bonne heure.",
        options: ["vous êtes couchés", "vous avez couché", "vous êtes couché", "vous ont couchés"],
        correctAnswer: "vous êtes couchés"
      },
      {
        id: "7-6",
        incomplete: "Il ___ dans la glace.",
        options: ["s'est regardé", "s'a regardé", "s'est regardée", "s'a regardée"],
        correctAnswer: "s'est regardé"
      },
      {
        id: "7-7",
        incomplete: "Elle ___ de son travail.",
        options: ["s'est plainte", "s'a plainte", "s'est plaint", "s'a plaint"],
        correctAnswer: "s'est plainte"
      },
      {
        id: "7-8",
        incomplete: "Les enfants ___ les mains.",
        options: ["se sont lavé", "se sont lavés", "se sont lavées", "s'ont lavé"],
        correctAnswer: "se sont lavé"
      },
      {
        id: "7-9",
        incomplete: "Je ___ à la boulangerie.",
        options: ["me suis arrêté", "m'ai arrêté", "me suis arrêtée", "m'est arrêté"],
        correctAnswer: "me suis arrêté"
      },
      {
        id: "7-10",
        incomplete: "Nous ___ longtemps au téléphone.",
        options: ["nous sommes parlé", "nous avons parlés", "nous sommes parlés", "nous avons parlé"],
        correctAnswer: "nous sommes parlé"
      }
    ]
  },
  {
    id: 8,
    title: "Verbes à double auxiliaire",
    description: "Certains verbes peuvent utiliser être ou avoir",
    difficulty: 'difficile',
    questions: [
      {
        id: "8-1",
        incomplete: "Elle ___ de sa chambre. (sortir de)",
        options: ["est sortie", "a sorti", "est sorti", "a sortie"],
        correctAnswer: "est sortie"
      },
      {
        id: "8-2",
        incomplete: "Elle ___ les poubelles. (sortir quelque chose)",
        options: ["a sorti", "est sortie", "a sortie", "est sorti"],
        correctAnswer: "a sorti"
      },
      {
        id: "8-3",
        incomplete: "Nous ___ par la fenêtre. (passer par)",
        options: ["sommes passés", "avons passé", "sommes passé", "avons passés"],
        correctAnswer: "sommes passés"
      },
      {
        id: "8-4",
        incomplete: "Nous ___ un examen. (passer un examen)",
        options: ["avons passé", "sommes passés", "avons passés", "sommes passé"],
        correctAnswer: "avons passé"
      },
      {
        id: "8-5",
        incomplete: "Il ___ en Italie. (descendre vers)",
        options: ["est descendu", "a descendu", "est descendue", "a descendue"],
        correctAnswer: "est descendu"
      },
      {
        id: "8-6",
        incomplete: "Il ___ les escaliers. (descendre quelque chose)",
        options: ["a descendu", "est descendu", "a descendue", "est descendue"],
        correctAnswer: "a descendu"
      },
      {
        id: "8-7",
        incomplete: "Tu ___ trop vite. (monter)",
        options: ["es monté", "as monté", "es montée", "as montée"],
        correctAnswer: "es monté"
      },
      {
        id: "8-8",
        incomplete: "Tu ___ les bagages. (monter quelque chose)",
        options: ["as monté", "es monté", "as montée", "es montée"],
        correctAnswer: "as monté"
      },
      {
        id: "8-9",
        incomplete: "Elles ___ à midi. (rentrer)",
        options: ["sont rentrées", "ont rentré", "sont rentrés", "ont rentrées"],
        correctAnswer: "sont rentrées"
      },
      {
        id: "8-10",
        incomplete: "Elles ___ la voiture au garage. (rentrer quelque chose)",
        options: ["ont rentré", "sont rentrées", "ont rentrées", "sont rentré"],
        correctAnswer: "ont rentré"
      }
    ]
  },
  {
    id: 9,
    title: "Verbes du 3ème groupe",
    description: "Maîtrisons les participes passés des verbes irréguliers",
    difficulty: 'difficile',
    questions: [
      {
        id: "9-1",
        incomplete: "J'___ un beau cadeau.",
        options: ["ai reçu", "ai recevoir", "suis reçu", "ai reçus"],
        correctAnswer: "ai reçu"
      },
      {
        id: "9-2",
        incomplete: "Il ___ son manteau sur la chaise.",
        options: ["a mis", "a mettre", "est mis", "a mettait"],
        correctAnswer: "a mis"
      },
      {
        id: "9-3",
        incomplete: "Nous ___ notre décision.",
        options: ["avons pris", "avons prenons", "sommes pris", "avons prit"],
        correctAnswer: "avons pris"
      },
      {
        id: "9-4",
        incomplete: "Tu ___ à quelle heure ?",
        options: ["as dormi", "as dormir", "es dormi", "as dormis"],
        correctAnswer: "as dormi"
      },
      {
        id: "9-5",
        incomplete: "Elle ___ à son ami.",
        options: ["a souri", "a sourire", "est souri", "a sourit"],
        correctAnswer: "a souri"
      },
      {
        id: "9-6",
        incomplete: "Vous ___ le problème.",
        options: ["avez résolu", "avez résoudre", "êtes résolu", "avez résolus"],
        correctAnswer: "avez résolu"
      },
      {
        id: "9-7",
        incomplete: "Ils ___ très vite.",
        options: ["ont couru", "ont courir", "sont couru", "ont couraient"],
        correctAnswer: "ont couru"
      },
      {
        id: "9-8",
        incomplete: "J'___ en retard.",
        options: ["ai craint", "ai craindre", "suis craint", "ai craignais"],
        correctAnswer: "ai craint"
      },
      {
        id: "9-9",
        incomplete: "Nous ___ le secret.",
        options: ["avons su", "avons savoir", "sommes su", "avons savions"],
        correctAnswer: "avons su"
      },
      {
        id: "9-10",
        incomplete: "Elle ___ une belle chanson.",
        options: ["a écrit", "a écrire", "est écrit", "a écrivait"],
        correctAnswer: "a écrit"
      }
    ]
  },
  {
    id: 10,
    title: "Révision générale",
    description: "Révisons tous les cas du passé composé",
    difficulty: 'difficile',
    questions: [
      {
        id: "10-1",
        incomplete: "Les fleurs que j'___ sont fanées.",
        options: ["ai cueillies", "ai cueilli", "suis cueilli", "ai cueilles"],
        correctAnswer: "ai cueillies"
      },
      {
        id: "10-2",
        incomplete: "Nous nous ___ la main.",
        options: ["sommes serré", "avons serré", "sommes serrés", "sommes serrée"],
        correctAnswer: "sommes serré"
      },
      {
        id: "10-3",
        incomplete: "Elle ___ pendant trois heures.",
        options: ["a dormi", "est dormie", "a dormie", "est dormi"],
        correctAnswer: "a dormi"
      },
      {
        id: "10-4",
        incomplete: "Les touristes ___ la montagne.",
        options: ["ont gravi", "sont gravis", "ont gravis", "sont gravi"],
        correctAnswer: "ont gravi"
      },
      {
        id: "10-5",
        incomplete: "Tu ___ longtemps au téléphone.",
        options: ["as parlé", "es parlé", "as parlée", "es parlée"],
        correctAnswer: "as parlé"
      },
      {
        id: "10-6",
        incomplete: "Vous ___ chaussures dans l'entrée.",
        options: ["avez laissé vos", "êtes laissés vos", "avez laissés vos", "êtes laissé vos"],
        correctAnswer: "avez laissé vos"
      },
      {
        id: "10-7",
        incomplete: "La pièce que nous ___ était magnifique.",
        options: ["avons vue", "avons vu", "sommes vus", "avons vues"],
        correctAnswer: "avons vue"
      },
      {
        id: "10-8",
        incomplete: "Ils se ___ une nouvelle voiture.",
        options: ["sont acheté", "ont acheté", "sont achetés", "ont achetée"],
        correctAnswer: "sont acheté"
      },
      {
        id: "10-9",
        incomplete: "Cette femme, je l'___ hier.",
        options: ["ai rencontrée", "ai rencontré", "suis rencontrée", "ai rencontres"],
        correctAnswer: "ai rencontrée"
      },
      {
        id: "10-10",
        incomplete: "Les événements se ___ très vite.",
        options: ["sont succédé", "sont succédés", "ont succédé", "ont succédés"],
        correctAnswer: "sont succédé"
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
