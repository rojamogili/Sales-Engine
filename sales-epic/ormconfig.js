module.exports = {
   type: 'postgres',
   host: process.env.HOST,
   port: Number(process.env.DB_PORT),
   username: process.env.DB_USERNAME,
   password: process.env.PASSWORD,
   database: process.env.DATABASE,
   synchronize: false,
   migrationsRun: true,
   migrations: ["src/migration/**/*.ts"],
   subscribers: ["src/subscriber/**/*.ts"],
   cli: {
       entitiesDir: "src/entity",
       migrationsDir: "src/migration",
       subscribersDir: "src/subscriber"
     },
   logging: false
 };