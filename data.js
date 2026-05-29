//quize topics
const quizzes = {
  Science: [
    {
      question: "What is the chemical symbol for water? ",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correctAnswer: "H2O",
    },
    {
      question: "What planet is known as the red planet? ",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      question: "How many bones are in the adult human body?",
      options: ["206", "180", "220", "250"],
      correctAnswer: "206",
    },
    {
      question: "What gas do plants absorb from the atmosphere? ",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      question: "What is the speed of light in a vacuum, approximately?",
      options: [
        "300,000 km/s",
        "150,000 km/s",
        "500,000 km/s",
        "1,000,000 km/s",
      ],
      correctAnswer: "300,000 km/s",
    },
    {
      question: "Which element has the chemical symbol Au?",
      options: ["Silver", "Aluminum", "Gold", "Argon"],
      correctAnswer: "Gold",
    },
    {
      question: "What is the boiling point of water at sea level in Celsius?",
      options: ["90°C", "100°C", "110°C", "0°C"],
      correctAnswer: "100°C",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      correctAnswer: "Mitochondria",
    },
    {
      question: "What part of the plant does photosynthesis happen in?",
      options: ["Root", "Stem", "Leaf", "Flower"],
      correctAnswer: "Leaf",
    },
    {
      question: "What planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
  ],
  Sports: [
    {
      question: "How many players are on a soccer team on the field?",
      options: ["9", "10", "11", "12"],
      correctAnswer: "11",
    },
    {
      question: "Which sport uses a hoop and a basketball?",
      options: ["Tennis", "Basketball", "Rugby", "Baseball"],
      correctAnswer: "Basketball",
    },
    {
      question: "How many points is a touchdown worth in American football?",
      options: ["3", "6", "7", "10"],
      correctAnswer: "6",
    },
    {
      question: "Which country won the FIFA World Cup in 2018?",
      options: ["Brazil", "France", "Germany", "Argentina"],
      correctAnswer: "France",
    },
    {
      question: "Which sport is played at Wimbledon?",
      options: ["Cricket", "Golf", "Tennis", "Rugby"],
      correctAnswer: "Tennis",
    },
    {
      question: "How many rings are on the Olympic flag?",
      options: ["4", "5", "6", "7"],
      correctAnswer: "5",
    },
    {
      question: "In which sport would you perform a slam dunk?",
      options: ["Basketball", "Volleyball", "Tennis", "Boxing"],
      correctAnswer: "Basketball",
    },
    {
      question: "Which country is famous for rugby's All Blacks?",
      options: ["Australia", "South Africa", "New Zealand", "England"],
      correctAnswer: "New Zealand",
    },
    {
      question: "How long is a standard soccer match?",
      options: ["60 mins", "75 mins", "90 mins", "120 mins"],
      correctAnswer: "90 mins",
    },
    {
      question: "Which sport uses a bat, ball, and wickets?",
      options: ["Baseball", "Cricket", "Hockey", "Golf"],
      correctAnswer: "Cricket",
    },
  ],

  Math: [
    {
      question: "Solve: 3x + 5 = 20",
      options: ["3", "5", "10", "15"],
      correctAnswer: "5",
    },
    {
      question: "What is the value of 2³ + 4²?",
      options: ["20", "24", "28", "32"],
      correctAnswer: "24",
    },
    {
      question: "Solve: 5(2 + 3)",
      options: ["10", "15", "20", "25"],
      correctAnswer: "25",
    },
    {
      question: "If y = 4 and x = 3, what is 2x² + y?",
      options: ["18", "20", "22", "24"],
      correctAnswer: "22",
    },
    {
      question: "What is the square root of 196?",
      options: ["12", "13", "14", "15"],
      correctAnswer: "14",
    },
    {
      question: "Solve: 6² - 4²",
      options: ["16", "20", "24", "28"],
      correctAnswer: "20",
    },
    {
      question: "What is 15% of 240?",
      options: ["24", "30", "36", "40"],
      correctAnswer: "36",
    },
    {
      question: "Simplify: (8 + 4) ÷ 3",
      options: ["2", "3", "4", "5"],
      correctAnswer: "4",
    },
    {
      question: "Solve: 7x = 63",
      options: ["7", "8", "9", "10"],
      correctAnswer: "9",
    },
    {
      question: "What is the value of (5 × 6) - (12 ÷ 3)?",
      options: ["24", "26", "28", "30"],
      correctAnswer: "26",
    },
  ],

  Geography: [
    {
      question: "What is the capital of South Africa (administrative)?",
      options: ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
      correctAnswer: "Pretoria",
    },
    {
      question: "Which is the largest continent?",
      options: ["Africa", "Europe", "Asia", "North America"],
      correctAnswer: "Asia",
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      correctAnswer: "Pacific",
    },
    {
      question: "What is the capital of France?",
      options: ["Rome", "Berlin", "Madrid", "Paris"],
      correctAnswer: "Paris",
    },
    {
      question: "Mount Everest is located in which mountain range?",
      options: ["Andes", "Rockies", "Himalayas", "Alps"],
      correctAnswer: "Himalayas",
    },
    {
      question: "Which desert is the largest hot desert?",
      options: ["Kalahari", "Sahara", "Gobi", "Atacama"],
      correctAnswer: "Sahara",
    },
    {
      question: "Which country has the most population?",
      options: ["India", "USA", "China", "Brazil"],
      correctAnswer: "India",
    },
    {
      question: "Which river is the longest in the world?",
      options: ["Amazon", "Nile", "Congo", "Mississippi"],
      correctAnswer: "Nile",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
      correctAnswer: "Tokyo",
    },
    {
      question: "Which African country is known as the Rainbow Nation?",
      options: ["Kenya", "Nigeria", "South Africa", "Ghana"],
      correctAnswer: "South Africa",
    },
  ],
};
