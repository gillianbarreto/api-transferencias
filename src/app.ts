import * as dotenv from 'dotenv';
import app from './server';

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Server listening in the PORT: ${process.env.PORT}`);
});