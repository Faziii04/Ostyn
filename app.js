import express from 'express';
import 'dotenv/config';
import { userRouter } from './routes/user.routes.js';
import { authRouter } from './routes/auth.routes.js';
import { healthRouter } from './routes/health.routes.js';
import { DatabaseService } from './services/database.service.js';

const app = express();
const dbService = new DatabaseService();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/health', healthRouter);
app.get('/', (req, res) => {
    res.send("Esta es la raiz del nuevo server que estamos creando")
})

app.listen(3000, async () => {
  console.log('Server is running on port 3000');
  console.log('Checking database connection...');
  console.log('Database connection: ' + await dbService.isConnected())
});

