type FAQType = {
  id: number;
  question: string;
  answer: string;
};

export const FAQs: FAQType[] = [
  {
    id: 1,
    question: "How can I contribute to EduViti?",
    answer:
      "We welcome contributions in the form of study materials, video lectures, or offering guidance to students. You can be part of our vision for a better academic future!",
  },
  {
    id: 2,
    question: "What are the perks of being part of the team?",
    answer:
      "Yes, all the study materials on our platform are available for free. You can access them at any time and use them to enhance your learning experience.",
  },
  {
    id: 3,
    question: "Is teaching experience required to join?",
    answer:
      "Yes, you can download the study materials, including notes, question banks, and other resources, for offline use. This way, you can study even when you're not connected to the internet.",
  },
  {
    id: 4,
    question: "Is there any benefit for contributors?",
    answer:
      "Yes, we offer a study planner tool that helps you organize your study schedule, set goals, and track your progress. You can use this tool to stay on track with your studies and manage your time effectively.",
  },
];
