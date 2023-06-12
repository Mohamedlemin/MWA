
npm init
npm i express
npm i mongoose
npm i dotenv

mongoimport --db mongo-exercises --collection courses --drop --file exercise-data.json --jsonArray


Import

bson  ==>  mongorestore  meanMovies/movies.bson
bsonGZ => mongorestore --gzip meanStudents/students.bson.gz
Json = >  mongoimport --db meanSenators  --collection senators --file meanSenators.json