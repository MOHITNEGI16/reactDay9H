import React, { useEffect, useState } from "react";
import "./Question.css";
import axios from "axios";

function Question() {
  const [ques, setQues] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(5);

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await axios.get("https://opentdb.com/api.php?amount=10");
        const data = res.data.results;
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    console.log(fetching());
  }, []);

  const data = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Vincent van Gogh",
        "Pablo Picasso",
        "Michelangelo",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "India", "Australia"],
      correctAnswer: "Japan",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Leo Tolstoy",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      correctAnswer: "H2O",
    },
    {
      question: "Which of these is not a primary color?",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: "Green",
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Liver", "Skin", "Brain"],
      correctAnswer: "Skin",
    },
    {
      question: "Who discovered gravity?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Nikola Tesla",
      ],
      correctAnswer: "Isaac Newton",
    },
  ];

  function handleClickAnswer(choosedOption) {
    let answer = choosedOption === data[ques].correctAnswer;
    if (answer) setScore(score + 1);
    setQues(ques + 1);
    setTime(5);
  }

  function handleSkip() {
    setQues(ques + 1);
    setTime(5);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time > 0) {
        setTime((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <>
      <div id="container">
        {ques < data.length ? (
          <>
            <h1>Quiz App</h1>
            <h2>Question {ques + 1}</h2>
            <p>{data[ques].question}</p>
            <ul>
              {data[ques].options.map((ele, ind) => {
                return (
                  <li key={ind}>
                    <button key={ind} onClick={() => handleClickAnswer(ele)}>
                      {" "}
                      {ele}{" "}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p>Time Left: {time} sec </p>
            <button onClick={handleSkip}>Skip button</button>
          </>
        ) : (
          <div style={{ display: "block", textAlign: "center" }}>
            <h1>Quiz Ended</h1>
            <p>Your Scores : {score}/10</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Question;
