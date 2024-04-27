type Phrase = {
  message: string;
  type: "skip" | "question" | "input" | "end";
  delay?: number;
  name?: string;
};

//this deep functionality is not in use yet, but such complex syntax for scripts can probably be used in future
//perhaps need to add types for all phrases

const script: Phrase[] = [
  {
    message: "Welcome!",
    type: "skip",
    delay: 0,
  },
  {
    message: "please provide us with your expectations of this evening",
    type: "skip",
    delay: 1500,
  },
  {
    message: "what is your name?",
    type: "question",
    name: "name",
    delay: 1500,
  },
  {
    message: "",
    name: "name",
    type: "input",
  },
  {
    message: "what do you want to eat?",
    type: "question",
    name: "food",
    delay: 1000,
  },
  {
    message: "",
    name: "food",
    type: "input",
  },
  {
    message: "and the final question...",
    type: "skip",
    delay: 1200,
  },
  {
    message: "what do you want to drink?",
    type: "question",
    name: "drink",
    delay: 1500,
  },
  {
    message: "",
    name: "drink",
    type: "input",
  },
  {
    message: "thank you for your answers!",
    type: "skip",
    delay: 2000,
  },
  {
    message: "i'm sorry we need to break up now :(",
    type: "skip",
    delay: 1000
  },
  {
    message: "",
    type: "end",
    delay: 2000
  }
];

export default script