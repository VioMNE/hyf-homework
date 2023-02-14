import express from 'express';
const app = express();
const router = express.Router()
import documents from './documents.json' assert {type: 'json'};
const port = 3000;

// Support parsing JSON requests
app.use(express.json());

// GET /search 

app.get('/search', (req, res) => {
    const query = req.query.q;
  
    if (!query) {
      return res.send(documents);
    }
  
    const result = documents.filter((element) =>
      Object.values(element).some((item) => String(item).includes(query))
    );
  
    if (result.length === 0) {
      return res.json({ message: 'Record not found' });
    }
  
    return res.send(result);
});
  
// GET /documents/:id

app.get('/documents/:id', (req, res) => {
    const documentId = Number(req.params.id);
    const document = documents.find((document) => document.id === documentId);
  
    if (!document) {
      res.status(404).json({ message: 'Document not found' });
    } else {
      res.send(document);
    }
  }); 
    

  // POST /search

  app.post("/search", (req, res) => {
    if (req.query.q && req.body.fields) {
      res.status(404).json({ error: "Bad request" });
    } else if (req.body.fields.type) {
      const filter = req.body.fields.type;
      const filterResults = documents.filter(function (entry) {
        return entry.type === filter;
      });
      res.send(filterResults);
    } else if (req.body.fields.description) {
      const filter = req.body.fields.description;
      const filterResults = documents.filter(function (entry) {
        return entry.type === filter;
      });
      res.send(filterResults);
    } else {
      res.status(404).json({ error: "Request body can't be empty" });
    }
  });


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default router;