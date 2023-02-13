import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabase('places.db');

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      // tx.executeSql('DROP TABLE places',[],()=>{},()=>{});
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`,
        [],
        () => { // if succeed
          console.log('succeed');
          resolve();
        }, 
        (_, error) => { //if error
          reject(error);
        }
      );
    });
  });
  
  return promise;
}

export function insertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?) `,
        [place.title, place.imageURI, place.address, place.location.lat, place.location.lng],
        (_, result) => { // if succeed
          console.log(result);
          resolve(result);
        },
        (_, error) => { //if error
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function getPlaces() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT title, imageUri, address, lat, lng FROM places`,
        [],
        (_, result) => { // if succeed
          console.log(result);
          resolve(result.rows._array);
        },
        (_, error) => { //if error
          reject(error);
        }
      );
    });
  });
  return promise;
}