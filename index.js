const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

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