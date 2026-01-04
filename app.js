import express from 'express';
import 'dotenv/config';
import { userRouter } from './src/routes/users.routes.js';
import { authRouter } from './src/routes/auth.routes.js';
import { healthRouter } from './src/routes/health.routes.js';
import { prendaRouter } from './src/routes/prendas.routes.js';
import { DatabaseService } from './src/services/database.service.js';

const app = express();
app.use(express.json());

const dbService = new DatabaseService();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/health', healthRouter);
app.use('/api/v1/prendas', prendaRouter)
app.get('/', (req, res) => {
    res.send("Esta es la raiz del nuevo server que estamos creando")
})

// Use the port Render gives you, or 3000 locally
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server runnin on http://localhost:${PORT} god`)
  console.log('Checking database connection...');
  
  // Checking the connection at startup
  const isConnected = await dbService.isConnected();
  console.log('Database connection: ' + isConnected);
  console.log("Todo anda bien")
});

