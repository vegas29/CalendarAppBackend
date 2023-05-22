import mongoose from 'mongoose';

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CN);

        console.log('DB Online')
    } catch (error) {
        console.log('error', error);
        throw new Error('Error a la hora de inicializar la base de datos');
    }
}

export {
    dbConnection
}