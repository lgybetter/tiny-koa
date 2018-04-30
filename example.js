const TinyKoa = require('./dist/index.js')
const app = new TinyKoa.default()

app.on('error', (error) => {
  console.log('Error stack:' + error.stack)
  console.log('Error message:' + error.message)
})

app.listen(3000, 'localhost', () => {
  console.log('running at http://localhost:3000')
})