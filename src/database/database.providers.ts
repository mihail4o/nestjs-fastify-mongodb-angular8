import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/angular8-crud', { useNewUrlParser: true, useFindAndModify: false }),
    },
];
