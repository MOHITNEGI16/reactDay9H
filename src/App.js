import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Question from "./components/Question";
function App() {
  const [data, setData] = useState([]);

  const tryData = [
    {
      "question": "What is the capital of France?",
      "options": ["Paris", "London", "Berlin", "Rome"],
      "correctAnswer": "Paris"
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "options": ["Earth", "Mars", "Venus", "Jupiter"],
      "correctAnswer": "Mars"
    },
    {
      "question": "Who painted the Mona Lisa?",
      "options": ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
      "correctAnswer": "Leonardo da Vinci"
    },
    {
      "question": "What is the largest mammal in the world?",
      "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      "correctAnswer": "Blue Whale"
    },
    {
      "question": "Which country is known as the Land of the Rising Sun?",
      "options": ["China", "Japan", "India", "Australia"],
      "correctAnswer": "Japan"
    },
    {
      "question": "Who wrote 'Romeo and Juliet'?",
      "options": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
      "correctAnswer": "William Shakespeare"
    },
    {
      "question": "What is the chemical symbol for water?",
      "options": ["H2O", "CO2", "O2", "NaCl"],
      "correctAnswer": "H2O"
    },
    {
      "question": "Which of these is not a primary color?",
      "options": ["Red", "Blue", "Green", "Yellow"],
      "correctAnswer": "Green"
    },
    {
      "question": "What is the largest organ in the human body?",
      "options": ["Heart", "Liver", "Skin", "Brain"],
      "correctAnswer": "Skin"
    },
    {
      "question": "Who discovered gravity?",
      "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      "correctAnswer": "Isaac Newton"
    }
  ]

  // async function fetchingUrl() {
  //   try {
  //     const response = await axios.get(
  //       "https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&difficulty=Easy&limit=10&tags=JavaScript",
  //       {
  //         headers: {
  //           Authorization: `Bearer${"bjiuJtdZ3Y6WhJmzX8TzOfiJf6YufguuOS3p9nHa"}`,
  //         },
  //       }
  //     );
  //     const resultData = response.data;
  //     console.log(resultData);
  //     // setData(resultData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {

  }, []);


  return (
    <>
      <Question />
    </>
  );
}

export default App;
