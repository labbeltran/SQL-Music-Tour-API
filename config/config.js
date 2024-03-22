require('dotenv').config()

module.exports= {
  
    development: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: "music_tour_dev",
      host: process.env.DB_HOST,
      port: 5432,
      dialect: "postgres"
    },
    // test: {
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: "music_tour_test",
    //   host: "127.0.0.1",
    //   dialect: "postgres",
    //   dialectOptions:{
    //     bigNumberSTrings:true
    //   }
    // },
    // production: {
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: "music_tour_production",
    //   host: "127.0.0.1",
    //   dialect: "postgres"
    // }

  
}
