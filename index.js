const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = 3000 || process.env.PORT;
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Amigo!'
    })
});

app.get('/api', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola API!'
    })
})

app.listen(port, () => console.log(`Server running on port ${port}`));