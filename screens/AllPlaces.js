import PlacesList from "../components/places/PlacesList";
import {useIsFocused} from "@react-navigation/native";
import {useEffect, useState} from "react";

export default function AllPlaces({route}) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces(currentPlaces => [...currentPlaces, route.params.place]);
    }
  }, [route, isFocused]);
  return <PlacesList places={loadedPlaces}/>
}