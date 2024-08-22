import PlaceForm from "../components/places/PlaceForm";

function AddPlace({navigation}) {

  function createPlaceHandler(place) {
    navigation.navigate('AllPlaces', {place: place})
  }

  return <PlaceForm label='Type the place name' onCreatePlace={createPlaceHandler}/>
}

export default AddPlace;