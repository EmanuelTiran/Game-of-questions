import axios from 'axios';
import { create } from 'zustand';

export const useColorStore = create((set) => ({
  color: "#facc15", // Default color value
  setColor: (newColor) => set({ color: newColor }), // Action to update the color
}));

export const useIndex = create((set) => ({
  indexQuestions: 0,
  setIndex: (newNum) => set({ indexQuestions: newNum }),
}));
export const useFinish = create((set) => ({
  isFinish: false,
  setIsFinish: () => set((state) => ({ isFinish: !state.isFinish })),
}));

export const useIndexCorrect = create((set) => ({
  indexCorrect: 0,
  setIndexCorrect:(newNum) => set({ indexQuestions: newNum }),
}));

export const useTriviaStore = create((set) => ({
  trivia: [],
  questions: [],
  lenghQuestions: 0,
  answers: [],
    correctAnswers: [],
  isCorrects: 0,
  setIsCorrects: (newNum) => set({ isCorrects: newNum }),
  setTrivia: async () => {
    try {
      const { data: { results } } = await axios.get('https://opentdb.com/api.php?amount=10&category=27');
      const correctAnswers = results.map(result => result.correct_answer);
      console.log({ correctAnswers });
      const questions = results.map(result => result.question);
      const answers = results.map(result => {
        const incorrectAnswers = result.incorrect_answers;
        const correctAnswer = result.correct_answer;

        // join correct and incorrect answers
        const answers = [...incorrectAnswers, correctAnswer];

        // Shuffle answers
        answers.sort(() => Math.random() - 0.5);
        return answers;
      });
      let size = questions.length;
      set((state) => ({
        trivia: results, questions: questions, answers: answers,
        correctAnswers: correctAnswers, lenghQuestions: size
      }));

    } catch (error) {
      // console.error("Failed to fetch trivia questions:", error);
    }
  },
}));