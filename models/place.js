import { v4 as uuidv4 } from 'uuid';

class Place {
  constructor(title, imageURI, address, location) {
    this.title = title;
    this.imageURI = imageURI;
    this.address = address;
    this.location = location; // { lat: 0.123, lng: 127.121}
    this.id = uuidv4()
  }
}