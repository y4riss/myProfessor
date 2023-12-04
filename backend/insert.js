const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const teachersData = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    description: "English Teacher",
    startYear: new Date("2020-01-01"),
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    description: "Math Teacher",
    startYear: new Date("2019-08-15"),
  },
  {
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    description: "Science Teacher",
    startYear: new Date("2021-03-10"),
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    description: "History Teacher",
    startYear: new Date("2018-12-05"),
  },
  {
    name: "Daniel Brown",
    email: "daniel.brown@example.com",
    description: "Computer Science Teacher",
    startYear: new Date("2022-02-20"),
  },
  {
    name: "Olivia White",
    email: "olivia.white@example.com",
    description: "Art Teacher",
    startYear: new Date("2017-09-30"),
  },
  {
    name: "Christopher Lee",
    email: "christopher.lee@example.com",
    description: "Physical Education Teacher",
    startYear: new Date("2019-06-15"),
  },
  {
    name: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    description: "Music Teacher",
    startYear: new Date("2020-11-25"),
  },
  {
    name: "William Adams",
    email: "william.adams@example.com",
    description: "Spanish Teacher",
    startYear: new Date("2021-07-12"),
  },
  {
    name: "Ava Martinez",
    email: "ava.martinez@example.com",
    description: "Chemistry Teacher",
    startYear: new Date("2018-04-18"),
  },
];
const evaluationsData = [
  ...generateTeacherEvaluations(1, "alice.smith@example.com", 1),
  ...generateTeacherEvaluations(1, "bob.jones@example.com", 1),
  ...generateTeacherEvaluations(3, "carol.wilson@example.com", 1),
  ...generateTeacherEvaluations(4, "david.anderson@example.com", 1),
  ...generateTeacherEvaluations(5, "elizabeth.brown@example.com", 1),
  ...generateTeacherEvaluations(6, "frank.miller@example.com", 1),
  ...generateTeacherEvaluations(7, "frank.miller@example.com", 1),
  ...generateTeacherEvaluations(7, "grace.davis@example.com", 1),
  ...generateTeacherEvaluations(8, "henry.wilson@example.com", 1),
  ...generateTeacherEvaluations(9, "isabel.johnson@example.com", 1),
];

const students = [
  {
    email: "alice.smith@example.com",
    name: "Alice Smith",
    image: "student.png",
  },
  {
    email: "bob.jones@example.com",
    name: "Bob Jones",
    image: "student.png",
  },
  {
    email: "carol.wilson@example.com",
    name: "Carol Wilson",
    image: "student.png",
  },
  {
    email: "david.anderson@example.com",
    name: "David Anderson",
    image: "student.png",
  },
  {
    email: "elizabeth.brown@example.com",
    name: "Elizabeth Brown",
    image: "student.png",
  },
  {
    email: "frank.miller@example.com",
    name: "Frank Miller",
    image: "student.png",
  },
  {
    email: "grace.davis@example.com",
    name: "Grace Davis",
    image: "student.png",
  },
  {
    email: "henry.wilson@example.com",
    name: "Henry Wilson",
    image: "student.png",
  },
  {
    email: "isabel.johnson@example.com",
    name: "Isabel Johnson",
    image: "student.png",
  },
];

function generateTeacherEvaluations(teacherId, studentEmail, count) {
  const evaluations = [];
  for (let i = 0; i < count; i++) {
    evaluations.push({
      attitude: getRandomRating(),
      approach: getRandomRating(),
      style: getRandomRating(),
      course: getRandomRating(),
      extraWork: getRandomRating(),
      tp_td: getRandomRating(),
      exam: getRandomRating(),
      comment: `Evaluation ${i + 1} - Great teacher!`,
      studentEmail,
      teacherId,
    });
  }
  return evaluations;
}

function getRandomRating() {
  return Math.floor(Math.random() * 5) + 1;
}

async function main() {
  await prisma.evaluation.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.student.deleteMany();
  let index = 1;
  for (const teacherData of teachersData) {
    await prisma.teacher.create({
      data: { ...teacherData, id: index },
    });
    index++;
  }
  index = 1;
  console.log("Teachers inserted.");
  for (const student of students) {
    await prisma.student.create({
      data: { ...student, id: index },
    });
    index++;
  }
  console.log("Students inserted.");
  for (const eval of evaluationsData) {
    await prisma.evaluation.create({
      data: eval,
    });
  }
  console.log("Evaluations inserted.");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
