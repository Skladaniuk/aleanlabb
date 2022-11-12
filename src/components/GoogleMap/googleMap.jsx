import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import css from './googleMap.module.css'
import {useMemo} from 'react'

export const Home = ({location}) => {
    const { isLoaded} = useLoadScript({googleMapsApiKey: 'AIzaSyDdPVoS0RqTNXZNEJYuHpgQc3a0UE0JmH4'})
    const coordinates = location;

    const center = useMemo(() => ({lat: coordinates.lat, lng: coordinates.long}),[coordinates.lat, coordinates.long]) 
    if(!isLoaded) return <div> hfdpfpdpfdfddffd</div>
    return <GoogleMap zoom = {10} center = {center} mapContainerClassName = {css.map}> 
    <Marker position = {center}/>
     </GoogleMap>
   };
   
   
  