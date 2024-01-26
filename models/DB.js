const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./../gust_students.db";

function connectToDatabase() {
    if (fs.existsSync(filepath)) {
        return new sqlite3.Database(filepath);
    } else {
        const db = new sqlite3.Database(filepath, (error) => {
            if (error) {
                return console.error(error.message);
            }
            createTable(db);
            console.log("Connected to the database successfully");
        });
        return db;
    }
}

function createTable(db) {
    db.exec(`
  CREATE TABLE students
  (
    school       VARCHAR(10),
    sex VARCHAR(10),
    age   VARCHAR(50),
    address        VARCHAR(20),
    famsize              VARCHAR(10),
    Pstatus              VARCHAR(50),
    Medu         INT,
    Fedu,
    Mjob,
    Fjob,
    reason,
    guardian,
    traveltime,
    studytime,
    failures,
    schoolsup,
    famsup,
    paid,
    activities,
    nursery,
    higher,
    internet,
    romantic,
    famrel,
    freetime,
    goout,
    Dalc,
    Walc,
    health,
    absences,
    G1,
    G2,
    G3
  )
`);
}

module.exports = connectToDatabase();