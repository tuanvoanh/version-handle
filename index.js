const app = require('./app');
const PORT = 3051;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});