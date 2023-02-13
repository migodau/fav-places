import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export class Place {
  constructor(title, imageURI, location) {
    this.title = title;
    this.imageURI = imageURI;
    this.address = location.address;
    this.location = location.coord; // { lat: 0.123, lng: 127.121}
    this.id = uuidv4()
  }
}