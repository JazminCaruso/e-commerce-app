import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, address TEXT NOT NULL, image TEXT NOT NULL, coords TEXT NOT NULL)',
          [],
          () => {
            resolve();
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
    return promise;
};

export const insertPlace = ({address, image, coords}) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO places (address, image, coords) VALUES (?, ?, ?)',
        [address, image, JSON.stringify(coords)],
        (_, result) => {
          resolve(result)
        },
        (_, error) => {
          reject(error)
        }
      );
    });
  });
  return promise;
};

export const selectPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          const places = result?.rows._array
          resolve(places);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}
