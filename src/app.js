import path from 'path'
import express from 'express'
import morgan from 'morgan'

const app = express()

app
  .use(morgan('dev'))
  .use('/static', express.static(path.join(__dirname, '../static')))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')))
  .listen(3006, err => console.log(err || 'Listening at port 3000 in production'))
