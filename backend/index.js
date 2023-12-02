const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const express = require("express");
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = 3000 | process.env.PORT;

app.get("/professors", async (req, res) => {
  try {
    const professors = await prisma.teacher.findMany();
    return res.json(professors);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

app.get("/professors/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const professor = await prisma.teacher.findFirst({
      where: {
        id: id,
      },
      include: {
        evaluations: true,
      },
    });
    return res.json(professor);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

app.post("/eval", async (req, res) => {
  const body = req.body;
  try {
    const evaluation = await prisma.evaluation.create({
      data: body,
    });
    return res.json(evaluation);
  } catch (error) {
    return res.status(500).json({ error });
  }
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
