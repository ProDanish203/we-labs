import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 9.99,
  },
  { id: 2, title: "1984", author: "George Orwell", price: 8.99 },
];

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const { title, author, price } = req.body;

  if (!title || !author || !price)
    return res.status(400).json({ error: "Missing required fields" });

  const newId =
    books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1;
  const newBook = { id: newId, title, author, price: Number(price) };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, price } = req.body;

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1)
    return res.status(404).json({ error: "Book not found" });

  books[bookIndex] = {
    ...books[bookIndex],
    ...(title && { title }),
    ...(author && { author }),
    ...(price && { price: Number(price) }),
  };

  res.json(books[bookIndex]);
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  const deletedBook = books[bookIndex];
  books = books.filter((book) => book.id !== id);

  res.json(deletedBook);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
