import PlaceForm from "../components/places/PlaceForm";
import {insertPlace} from "../util/database";

function AddPlace({navigation}) {

  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate('AllPlaces')
  }

  return <PlaceForm label='Type the place name' onCreatePlace={createPlaceHandler}/>
}

export default AddPlace;