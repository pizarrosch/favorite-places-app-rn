export class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //{latitude: 0.123434, longitude: 134.49}
    this.id = new Date().toString() + Math.random().toString();
  }
}