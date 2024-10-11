"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import { Playfair_Display, Montserrat } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const questions = [
  "Would you rather be sober or always intoxicated?",
  "What's one thing you did that you really wish you could go back and undo?",
  "What's your go-to lie to avoid committing to plans you've made?",
  "If you had all the resources, time and land available to build whatever you want, what would you build?",
  "What are you looking forward to this year?",
  "If you could teach the entire world just one concept, what would it be?",
  "Which parallel universe versions of yourself would you want to meet and why?",
  "If you changed your name, what would it be?",
  'Complete this sentence: "I wish I had someone with whom I could share ..."',
  "If you were an animal, what would you be?",
  "If you could bottle a moment from your life to experience whenever you wanted, what moment would it be?",
  "Is it human nature to create or to destroy?",
  "What color best describes your personality?",
  "What's one mode of self-expression that you've been afraid to try?",
  "If you could choose to change the outcome of one historical event, but you wouldn't know the consequences it might bring, what would you choose to change?",
  "What do you ponder when you watch people live just like how you are living?",
  "What's been a compliment a stranger has ever given to you?",
  "Do you think it is ok to steal from big supermarket?",
  "What would you change about yourself?",
  "What's the best thing about being you?",
  "What's the best piece of advice you've ever received?",
  "What's the worst piece of advice you've ever received?",
  "How can you be kinder to yourself?",
  "How do you challenge your assumptions?",
  "Who or what is currently influencing the way you think?",
  "If you had unlimited resources, how would you live differently?",
  "How can you be a better friend?",
  'What is a "real" friend?',
  "What traits of mine do you love the most?",
  "Do you think someone pictures you when they recall the best conversation they've ever had?",
  "What's a quality a family member has that you admire?",
  "What did you learn too late in life?",
  "If you could punch anyone in the face without repercussions, who would it be?",
  "What's a common trait shared by everyone you've dated?",
  "If you could witness one key moment in history, what would you choose?",
  "Think of someone you would like to hug. Who is that person?",
  "What title would you give to a movie of your life?",
  "What are some common assumptions that people have about you that aren't necessarily true?",
  "How does your life now compare to the life you imagined when you were a kid?",
  "How do you spend your nights when you can't sleep?",
  "If every human came with a warning label, what would yours say?",
  'At what point did you become aware of the concept of "cool" and how did that affect you?',
  "What's one opinion most people hold that you do not agree with?",
  "In what ways are you privileged?",
  "What's something you once thought was a waste of time but turned out to be really valuable?",
  "What's your dream you're glad you gave up on?",
  "Can a person change simply by deciding to?",
  "What do movies and TV shows tend to get wrong about love?",
  "What's one compliment you wish you received more often?",
  "Would you rather have complete control over your own dreams every night or be able to enter and interact in someone else's dreams each time?",
];

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [remainingQuestions, setRemainingQuestions] = useState([...questions]);
  const [isOrangeCard, setIsOrangeCard] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    drawCard();
  }, []);

  const drawCard = () => {
    if (remainingQuestions.length === 0) {
      setIsGameOver(true);
      setCurrentQuestion(
        "Congratulations! You have completed all the questions."
      );
      return;
    }
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const question = remainingQuestions[randomIndex];
    setCurrentQuestion(question);
    setRemainingQuestions(remainingQuestions.filter((q) => q !== question));
    setIsOrangeCard(!isOrangeCard);
  };

  const restartGame = () => {
    setRemainingQuestions([...questions]);
    setIsGameOver(false);
    drawCard();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF8E7] p-4">
      <div
        className={`w-64 h-96 rounded-2xl shadow-2xl flex items-center justify-center p-6 transform transition-all duration-300 ease-in-out hover:scale-105 ${
          isOrangeCard ? "bg-[#F9A60F] text-white" : "bg-[#6BC7E9] text-white"
        }`}
      >
        <p className={`text-center ${playfair.className} text-lg font-bold`}>
          {currentQuestion}
        </p>
      </div>
      <div className="mt-12 flex space-x-6">
        <Button
          onClick={drawCard}
          className={`${
            montserrat.className
          } text-lg px-8 py-3 rounded-full transition-all duration-300 w-36 ${
            isOrangeCard
              ? "bg-[#6BC7E9] hover:bg-[#5AB7D9] text-white"
              : "bg-[#F9A60F] hover:bg-[#E99600] text-white"
          }`}
          disabled={isGameOver}
        >
          Draw
        </Button>
        <Button
          onClick={restartGame}
          className={`${
            montserrat.className
          } text-lg px-8 py-3 rounded-full transition-all duration-300 w-36 ${
            isOrangeCard
              ? "bg-[#6BC7E9] hover:bg-[#5AB7D9] text-white"
              : "bg-[#F9A60F] hover:bg-[#E99600] text-white"
          }`}
        >
          Restart
        </Button>
      </div>
    </div>
  );
}
