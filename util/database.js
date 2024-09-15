import * as SQLite from 'expo-sqlite';

// const database = await SQLite.openDatabaseSync('places.db');
async function openDatabase() {
  try {
    const db = await SQLite.openDatabaseAsync('places.db');
    console.log('Database opened successfully');
    return db;
  } catch (error) {
    console.error('Error opening database:', error);
  }
}


export function init() {
  return new Promise((resolve, reject) => {
    openDatabase().transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      long REAL NOT NULL
    )`,
        [],
        (_, result) => {
          console.log('Table created successfully')
          resolve(result);
        },
        (_, error) => {
          console.error('Error creating table:', error);
          reject(error);
        },
      );
    });
  });
}

export function insertPlace(place) {
  return new Promise((resolve, reject) => {
    openDatabase().transaction(tx => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, long) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.long
        ],
        (_, result) => {
          console.log(result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
}