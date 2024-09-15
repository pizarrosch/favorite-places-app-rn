export class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = {
      lat: location.lat,
      long: location.long
    }; //{latitude: 0.123434, longitude: 134.49}
    this.id = id;
  }
}