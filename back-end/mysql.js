const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '103.75.187.24',
    user: 'piactfcvhosting_tuanphamdvf',
    password: 'Thienbinhtb95',
    database: 'piactfcvhosting_tuanphamdvf',
    port: 3306,
    multipleStatements: true,
});

const CREATE_TABLE_TODO = `
CREATE TABLE user (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  description varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  nickName varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  fullName varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  content varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  mussic varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  video varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO todo (description) VALUES ("Hello World");
`;

let dbInit = false;

const getDB = async () => {
    if (!dbInit) {
        return new Promise((resolve, reject) => {
            pool.query(CREATE_TABLE_TODO, (error) => {
                if (error) {
                    return reject(error);
                } else {
                    console.log('MySQL is connected and setup');
                    dbInit = true;
                    return resolve(pool);
                }
            });
        });
    }

    return dbInit;
};

module.exports = {
    getDB,
    pool,
};
