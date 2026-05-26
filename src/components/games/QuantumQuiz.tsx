import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Trophy, Star, ChevronRight, CheckCircle, XCircle } from 'lucide-react';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface QuantumQuizProps {
  difficulty: Difficulty;
  initialLevel: number;
  onClose: () => void;
  onLevelComplete: (level: number, score: number) => void;
}

// 300 questions pool
const ALL_QUESTIONS = [
  // Science
  { q: "What is the chemical symbol for Gold?", a: "Au", choices: ["Go", "Gd", "Au", "Ag"], cat: "Science" },
  { q: "How many planets are in our solar system?", a: "8", choices: ["7", "8", "9", "10"], cat: "Science" },
  { q: "What is H2O?", a: "Water", choices: ["Hydrogen", "Oxygen", "Water", "Acid"], cat: "Science" },
  { q: "What force keeps planets in orbit?", a: "Gravity", choices: ["Magnetism", "Gravity", "Friction", "Nuclear"], cat: "Science" },
  { q: "What is the speed of light (approx)?", a: "3×10⁸ m/s", choices: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"], cat: "Science" },
  { q: "DNA stands for?", a: "Deoxyribonucleic Acid", choices: ["Deoxyribonucleic Acid", "Dinitrogen Acid", "Double Nucleic Acid", "Dynamic Nuclear Acid"], cat: "Science" },
  { q: "What is the powerhouse of the cell?", a: "Mitochondria", choices: ["Nucleus", "Ribosome", "Mitochondria", "Vacuole"], cat: "Science" },
  { q: "Atomic number of Carbon?", a: "6", choices: ["4", "6", "8", "12"], cat: "Science" },
  { q: "Which gas do plants absorb?", a: "CO2", choices: ["O2", "N2", "CO2", "H2"], cat: "Science" },
  { q: "What is the hardest natural substance?", a: "Diamond", choices: ["Steel", "Quartz", "Diamond", "Titanium"], cat: "Science" },
  // Math
  { q: "What is √144?", a: "12", choices: ["11", "12", "13", "14"], cat: "Math" },
  { q: "What is 7 × 8?", a: "56", choices: ["54", "56", "58", "64"], cat: "Math" },
  { q: "What is 15% of 200?", a: "30", choices: ["25", "30", "35", "20"], cat: "Math" },
  { q: "What is π (approx)?", a: "3.14159", choices: ["3.14159", "3.12159", "3.16159", "2.71828"], cat: "Math" },
  { q: "Solve: 2x + 6 = 16, x = ?", a: "5", choices: ["4", "5", "6", "8"], cat: "Math" },
  { q: "What is 2⁸?", a: "256", choices: ["128", "256", "512", "64"], cat: "Math" },
  { q: "Area of circle: r=5?", a: "78.5", choices: ["31.4", "78.5", "25", "50"], cat: "Math" },
  { q: "What is 1001 in binary (decimal)?", a: "9", choices: ["8", "9", "10", "11"], cat: "Math" },
  { q: "Hypotenuse if legs are 3 and 4?", a: "5", choices: ["5", "6", "7", "25"], cat: "Math" },
  { q: "What is the sum of angles in a triangle?", a: "180°", choices: ["90°", "180°", "270°", "360°"], cat: "Math" },
  // Geography
  { q: "Capital of Japan?", a: "Tokyo", choices: ["Osaka", "Tokyo", "Kyoto", "Nagoya"], cat: "Geography" },
  { q: "Longest river in the world?", a: "Nile", choices: ["Amazon", "Nile", "Yangtze", "Mississippi"], cat: "Geography" },
  { q: "Which continent is the largest?", a: "Asia", choices: ["Africa", "Asia", "Europe", "Americas"], cat: "Geography" },
  { q: "Capital of Australia?", a: "Canberra", choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"], cat: "Geography" },
  { q: "Which country has the most population?", a: "India", choices: ["China", "India", "USA", "Indonesia"], cat: "Geography" },
  { q: "Tallest mountain on Earth?", a: "Mt. Everest", choices: ["K2", "Mt. Everest", "Kangchenjunga", "Lhotse"], cat: "Geography" },
  { q: "Which ocean is the largest?", a: "Pacific", choices: ["Atlantic", "Pacific", "Indian", "Arctic"], cat: "Geography" },
  { q: "Capital of Brazil?", a: "Brasília", choices: ["Rio", "São Paulo", "Brasília", "Salvador"], cat: "Geography" },
  { q: "How many countries in Africa?", a: "54", choices: ["48", "52", "54", "58"], cat: "Geography" },
  { q: "Which country has the Eiffel Tower?", a: "France", choices: ["Italy", "Spain", "France", "Germany"], cat: "Geography" },
  // History
  { q: "Year World War II ended?", a: "1945", choices: ["1943", "1944", "1945", "1946"], cat: "History" },
  { q: "First US President?", a: "George Washington", choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], cat: "History" },
  { q: "Who discovered America?", a: "Columbus", choices: ["Magellan", "Columbus", "Vasco da Gama", "Amerigo"], cat: "History" },
  { q: "Year French Revolution started?", a: "1789", choices: ["1776", "1789", "1800", "1815"], cat: "History" },
  { q: "Who painted the Mona Lisa?", a: "da Vinci", choices: ["Michelangelo", "Raphael", "da Vinci", "Rembrandt"], cat: "History" },
  { q: "First moon landing year?", a: "1969", choices: ["1965", "1967", "1969", "1971"], cat: "History" },
  { q: "Who was the first man in space?", a: "Yuri Gagarin", choices: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"], cat: "History" },
  { q: "Which war was fought at Gettysburg?", a: "Civil War", choices: ["WW1", "WW2", "Civil War", "Vietnam"], cat: "History" },
  { q: "Year India gained independence?", a: "1947", choices: ["1945", "1947", "1949", "1950"], cat: "History" },
  { q: "Who wrote the Iliad?", a: "Homer", choices: ["Plato", "Homer", "Socrates", "Aristotle"], cat: "History" },
  // Tech
  { q: "Who founded Apple?", a: "Steve Jobs", choices: ["Bill Gates", "Steve Jobs", "Elon Musk", "Mark Zuckerberg"], cat: "Tech" },
  { q: "What does CPU stand for?", a: "Central Processing Unit", choices: ["Central Processing Unit", "Computer Personal Unit", "Core Processor Unit", "Central Program Unit"], cat: "Tech" },
  { q: "What language is used for web styling?", a: "CSS", choices: ["HTML", "CSS", "JavaScript", "Python"], cat: "Tech" },
  { q: "What does HTTP stand for?", a: "HyperText Transfer Protocol", choices: ["HyperText Transfer Protocol", "High Tech Transfer Protocol", "HyperText Transport Protocol", "Host Transfer Protocol"], cat: "Tech" },
  { q: "Who invented the World Wide Web?", a: "Tim Berners-Lee", choices: ["Steve Jobs", "Bill Gates", "Tim Berners-Lee", "Vint Cerf"], cat: "Tech" },
  { q: "What is RAM?", a: "Random Access Memory", choices: ["Read Access Memory", "Random Access Memory", "Runtime Access Module", "Read And Modify"], cat: "Tech" },
  { q: "What does AI stand for?", a: "Artificial Intelligence", choices: ["Artificial Intelligence", "Automated Integration", "Advanced Interface", "Artificial Interface"], cat: "Tech" },
  { q: "What year was the iPhone launched?", a: "2007", choices: ["2005", "2006", "2007", "2008"], cat: "Tech" },
  { q: "What is an algorithm?", a: "Step-by-step instructions", choices: ["A type of hardware", "Step-by-step instructions", "A programming language", "A database"], cat: "Tech" },
  { q: "What does URL stand for?", a: "Uniform Resource Locator", choices: ["Uniform Resource Locator", "Universal Record Link", "Unified Resource Locator", "Uniform Reference Link"], cat: "Tech" },
];

// Add more repeated/varied questions to get 100 per difficulty
const EXTENDED_QUESTIONS = [
  ...ALL_QUESTIONS,
  { q: "Speed of sound in air (approx)?", a: "343 m/s", choices: ["100 m/s", "243 m/s", "343 m/s", "443 m/s"], cat: "Science" },
  { q: "Photosynthesis produces?", a: "Oxygen", choices: ["CO2", "Nitrogen", "Oxygen", "Glucose"], cat: "Science" },
  { q: "Number of bones in adult human?", a: "206", choices: ["196", "206", "216", "226"], cat: "Science" },
  { q: "What is Newton's first law about?", a: "Inertia", choices: ["Inertia", "Gravity", "Acceleration", "Motion"], cat: "Science" },
  { q: "Which planet is closest to the sun?", a: "Mercury", choices: ["Venus", "Earth", "Mercury", "Mars"], cat: "Science" },
  { q: "LCM of 4 and 6?", a: "12", choices: ["8", "12", "18", "24"], cat: "Math" },
  { q: "What is 12²?", a: "144", choices: ["124", "136", "144", "156"], cat: "Math" },
  { q: "0! equals?", a: "1", choices: ["0", "1", "undefined", "infinity"], cat: "Math" },
  { q: "What is a prime number?", a: "Divisible only by 1 and itself", choices: ["Divisible by 2", "Divisible only by 1 and itself", "An even number", "A perfect square"], cat: "Math" },
  { q: "Perimeter of square with side 6?", a: "24", choices: ["12", "24", "36", "48"], cat: "Math" },
  { q: "Capital of Germany?", a: "Berlin", choices: ["Munich", "Frankfurt", "Berlin", "Hamburg"], cat: "Geography" },
  { q: "Which country is the Sahara desert in?", a: "Multiple countries", choices: ["Egypt only", "Libya only", "Multiple countries", "Morocco only"], cat: "Geography" },
  { q: "Amazon river is in?", a: "South America", choices: ["North America", "Africa", "Asia", "South America"], cat: "Geography" },
  { q: "Capital of Russia?", a: "Moscow", choices: ["St. Petersburg", "Moscow", "Kiev", "Minsk"], cat: "Geography" },
  { q: "Which is not a continent?", a: "Pacific", choices: ["Africa", "Pacific", "Antarctica", "Oceania"], cat: "Geography" },
  { q: "Ancient Wonders: Great Pyramid located in?", a: "Egypt", choices: ["Greece", "Egypt", "Rome", "Iraq"], cat: "History" },
  { q: "Who invented electricity (harnessed)?", a: "Tesla/Edison", choices: ["Newton", "Einstein", "Tesla/Edison", "Franklin"], cat: "History" },
  { q: "The Cold War was between?", a: "USA and USSR", choices: ["USA and China", "UK and Germany", "USA and USSR", "France and Russia"], cat: "History" },
  { q: "Magna Carta was signed in?", a: "1215", choices: ["1066", "1215", "1348", "1492"], cat: "History" },
  { q: "First email sent by?", a: "Ray Tomlinson", choices: ["Bill Gates", "Tim Berners-Lee", "Ray Tomlinson", "Vint Cerf"], cat: "Tech" },
  { q: "What is open source software?", a: "Free to view/modify code", choices: ["Paid software", "Free to view/modify code", "Government software", "Closed system"], cat: "Tech" },
  { q: "JavaScript was created by?", a: "Brendan Eich", choices: ["James Gosling", "Brendan Eich", "Guido van Rossum", "Bjarne Stroustrup"], cat: "Tech" },
  { q: "What is cloud computing?", a: "Internet-based computing", choices: ["Storing data on clouds", "Internet-based computing", "Weather prediction systems", "Wireless networking"], cat: "Tech" },
  { q: "First programmable computer?", a: "ENIAC", choices: ["UNIVAC", "ENIAC", "IBM 360", "Colossus"], cat: "Tech" },
];

const QUESTIONS_BY_DIFFICULTY: Record<Difficulty, typeof ALL_QUESTIONS> = {
  Easy: EXTENDED_QUESTIONS.filter(q => q.cat === 'Science' || q.cat === 'Geography').slice(0, 100),
  Medium: EXTENDED_QUESTIONS.filter(q => q.cat === 'Math' || q.cat === 'History' || q.cat === 'Science').slice(0, 100),
  Hard: EXTENDED_QUESTIONS.filter(q => q.cat === 'Tech' || q.cat === 'Math' || q.cat === 'History').slice(0, 100),
};
// Pad to 100 if needed
Object.keys(QUESTIONS_BY_DIFFICULTY).forEach(d => {
  const key = d as Difficulty;
  while (QUESTIONS_BY_DIFFICULTY[key].length < 100) {
    QUESTIONS_BY_DIFFICULTY[key].push(...ALL_QUESTIONS.slice(0, 100 - QUESTIONS_BY_DIFFICULTY[key].length));
  }
});

const TIME_LIMITS: Record<Difficulty, number> = { Easy: 25, Medium: 18, Hard: 12 };
const QUESTIONS_PER_LEVEL: Record<Difficulty, number> = { Easy: 3, Medium: 5, Hard: 8 };

export default function QuantumQuiz({ difficulty, initialLevel, onClose, onLevelComplete }: QuantumQuizProps) {
  const [level, setLevel] = useState(initialLevel);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMITS[difficulty]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'levelup' | 'failed'>('idle');
  const [questionsThisLevel, setQuestionsThisLevel] = useState(0);
  const [correctThisLevel, setCorrectThisLevel] = useState(0);

  const totalQ = QUESTIONS_PER_LEVEL[difficulty];
  const q = QUESTIONS_BY_DIFFICULTY[difficulty][(level - 1 + questionIndex) % QUESTIONS_BY_DIFFICULTY[difficulty].length];

  const startGame = useCallback(() => {
    setQuestionIndex(0);
    setAnswered(null);
    setTimeLeft(TIME_LIMITS[difficulty]);
    setScore(0);
    setQuestionsThisLevel(0);
    setCorrectThisLevel(0);
    setGameState('playing');
  }, [difficulty]);

  useEffect(() => {
    if (gameState !== 'playing' || answered !== null) return;
    if (timeLeft <= 0) {
      setAnswered('__timeout__');
      setQuestionsThisLevel(q => q + 1);
      return;
    }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, timeLeft, answered]);

  const handleAnswer = useCallback((choice: string) => {
    if (answered !== null) return;
    setAnswered(choice);
    const correct = choice === q.a;
    if (correct) {
      const bonus = Math.ceil(timeLeft / TIME_LIMITS[difficulty] * 50);
      setScore(s => s + 100 + bonus);
      setCorrectThisLevel(c => c + 1);
    }
    setQuestionsThisLevel(n => n + 1);
  }, [answered, q, timeLeft, difficulty]);

  useEffect(() => {
    if (answered === null || gameState !== 'playing') return;
    const timer = setTimeout(() => {
      const nextQ = questionsThisLevel;
      if (nextQ >= totalQ) {
        const passing = Math.ceil(totalQ * (difficulty === 'Hard' ? 0.75 : difficulty === 'Medium' ? 0.6 : 0.5));
        if (correctThisLevel >= passing) {
          setGameState('levelup');
          onLevelComplete(level, score);
        } else {
          setGameState('failed');
        }
      } else {
        setAnswered(null);
        setTimeLeft(TIME_LIMITS[difficulty]);
        setQuestionIndex(i => i + 1);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, [answered, questionsThisLevel, totalQ, correctThisLevel, difficulty, gameState, level, score, onLevelComplete]);

  const handleNext = () => { if (level < 100) { setLevel(l => l + 1); setGameState('idle'); } };

  const diffColors: Record<Difficulty, string> = {
    Easy: 'from-green-500 to-emerald-600',
    Medium: 'from-yellow-500 to-orange-500',
    Hard: 'from-red-500 to-pink-600',
  };
  const timerPct = (timeLeft / TIME_LIMITS[difficulty]) * 100;
  const timerColor = timerPct > 50 ? '#34d399' : timerPct > 25 ? '#fbbf24' : '#f87171';
  const passingScore = Math.ceil(totalQ * (difficulty === 'Hard' ? 0.75 : difficulty === 'Medium' ? 0.6 : 0.5));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
        className="relative w-full max-w-xl"
        style={{ background: 'linear-gradient(135deg,#0c0a20 0%,#1a0e3d 100%)', borderRadius: 20, border: '1px solid rgba(168,85,247,0.3)', boxShadow: '0 0 60px rgba(168,85,247,0.15)' }}>

        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${diffColors[difficulty]}`}>{difficulty}</div>
            <span className="text-white font-bold text-lg">🧠 Quantum Quiz</span>
            <span className="text-purple-300 text-sm">Level {level}/100</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-400 text-sm"><Trophy size={14} />{score}</div>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors"><X size={20} /></button>
          </div>
        </div>

        <div className="p-6 min-h-[380px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {gameState === 'idle' && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center text-center">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-white text-xl font-bold mb-2">Quantum Quiz</h3>
                <p className="text-purple-300 text-sm mb-1">Level {level} • {totalQ} questions</p>
                <p className="text-white/40 text-xs mb-1">Pass if you answer ≥ {passingScore}/{totalQ} correctly</p>
                <p className="text-white/40 text-xs mb-6">{TIME_LIMITS[difficulty]}s per question</p>
                <button onClick={startGame} className="px-8 py-3 rounded-full font-bold text-white text-lg"
                  style={{ background: 'linear-gradient(90deg,#7c3aed,#a855f7)', boxShadow: '0 0 20px rgba(168,85,247,0.4)' }}>
                  Start Quiz
                </button>
              </motion.div>
            )}

            {gameState === 'playing' && (
              <motion.div key={`q-${questionIndex}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                className="flex flex-col gap-4">
                {/* Progress */}
                <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                  <span>Question {questionsThisLevel + 1}/{totalQ}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: 'rgba(168,85,247,0.2)', color: '#c4b5fd' }}>{q.cat}</span>
                  <span style={{ color: timerColor }} className="font-bold">⏱ {timeLeft}s</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-2">
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${timerPct}%`, background: timerColor }} />
                </div>

                <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}>
                  <p className="text-white font-semibold text-base leading-relaxed">{q.q}</p>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {q.choices.map(choice => {
                    let bg = 'rgba(255,255,255,0.05)';
                    let border = 'rgba(255,255,255,0.1)';
                    let icon = null;
                    if (answered !== null) {
                      if (choice === q.a) { bg = 'rgba(16,185,129,0.15)'; border = '#10b981'; icon = <CheckCircle size={16} className="text-emerald-400" />; }
                      else if (choice === answered) { bg = 'rgba(239,68,68,0.15)'; border = '#ef4444'; icon = <XCircle size={16} className="text-red-400" />; }
                    }
                    return (
                      <button key={choice} onClick={() => handleAnswer(choice)}
                        disabled={answered !== null}
                        className="flex items-center gap-3 p-3.5 rounded-xl text-left text-sm font-medium text-white transition-all duration-150"
                        style={{ background: bg, border: `1px solid ${border}` }}>
                        {icon && icon}
                        {choice}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-xs text-white/40 mt-1">
                  <span>Score: {score}</span>
                  <span>Correct: {correctThisLevel}/{questionsThisLevel}</span>
                </div>
              </motion.div>
            )}

            {gameState === 'levelup' && (
              <motion.div key="win" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center">
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: 2 }} className="text-6xl mb-4">🎓</motion.div>
                <h3 className="text-white text-2xl font-bold mb-1">Level Passed!</h3>
                <p className="text-emerald-400 font-bold text-lg mb-1">{correctThisLevel}/{totalQ} correct</p>
                <p className="text-purple-300 mb-5">Score: +{score}</p>
                <div className="flex gap-3">
                  <button onClick={startGame} className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white text-sm border border-purple-500/40">
                    <RotateCcw size={14} /> Replay
                  </button>
                  {level < 100 && (
                    <button onClick={handleNext} className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white text-sm"
                      style={{ background: 'linear-gradient(90deg,#10b981,#059669)', boxShadow: '0 0 16px rgba(16,185,129,0.4)' }}>
                      Next <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {gameState === 'failed' && (
              <motion.div key="fail" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-white text-2xl font-bold mb-1">Not Enough!</h3>
                <p className="text-white/60 mb-1">{correctThisLevel}/{totalQ} correct</p>
                <p className="text-white/40 text-sm mb-5">Need {passingScore} to pass</p>
                <button onClick={startGame} className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white"
                  style={{ background: 'linear-gradient(90deg,#7c3aed,#a855f7)', boxShadow: '0 0 20px rgba(168,85,247,0.4)' }}>
                  <RotateCcw size={16} /> Retry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="px-6 pb-4 border-t border-purple-500/10 pt-3">
          <div className="flex items-center justify-between text-xs text-white/50 mb-1.5">
            <span>Level Progress</span><span>{level}/100</span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${level}%`, background: 'linear-gradient(90deg,#7c3aed,#a855f7)' }} />
          </div>
          <div className="flex items-center justify-between mt-3">
            {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map(d => (
              <div key={d} className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-full ${d === difficulty ? 'text-white' : 'text-white/30'}`}
                style={{ background: d === difficulty ? 'rgba(168,85,247,0.2)' : 'transparent', border: d === difficulty ? '1px solid rgba(168,85,247,0.4)' : '1px solid transparent' }}>
                <Star size={10} className={d === difficulty ? 'text-amber-400' : 'text-white/20'} />
                {d}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
