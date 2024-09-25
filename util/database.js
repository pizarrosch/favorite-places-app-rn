import * as SQLite from 'expo-sqlite';
import {Place} from "../models/Place";

const database = SQLite.openDatabaseSync('places.db');

export function init() {
  return database.runAsync(
    `CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      long REAL NOT NULL
    )`
  );
}

export function insertPlace(place) {
  return database.runAsync(
    `INSERT INTO places (title, imageUri, address, lat, long, id) VALUES (?, ?, ?, ?, ?)`,
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.long,
    ]
  );
}

export async function fetchPlaces() {
  try {
    const result = await database.getAllAsync(`SELECT * FROM places`);
    const places = [];

    for (let datapoint of result) {
      places.push(
        new Place(
          datapoint.title,
          datapoint.imageUri,
          {
            address: datapoint.address,
            lat: datapoint.lat,
            long: datapoint.long
          },
          datapoint.id
        )
      )
    }
    return places;
  } catch (error) {
    console.log('Error', error);
  }
}

export async function fetchPlaceDetails(id) {
  try {
    const dbPlace = await database.getFirstAsync(`SELECT * FROM places WHERE id = ?`, [id]);

    return new Place(
      dbPlace.title,
      dbPlace.imageUri,
      {
        address: dbPlace.address,
        lat: dbPlace.lat,
        long: dbPlace.long,
      },
      dbPlace.id
    );
  } catch (error) {
    console.log('Error', error)
  }
}