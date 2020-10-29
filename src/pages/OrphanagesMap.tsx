import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapicon';
import api from '../services/api'

import 'leaflet/dist/leaflet.css';


import '../styles/pages/orphanage-map.css';

interface Orphanage {
   id: number;
   latitude: number;
   longitude: number;
   name: string;

}

function OrphanagesMap() {
   const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

   useEffect(() => {
      api.get('orphanages').then(response => {
         setOrphanages(response.data);
      })
   }, []);


   return (
      <div id="page-map">
         <aside>
            <header>
               <img src={mapMarkerImg} alt="Happy" />

               <h2>Escolha um orfanato no mapa</h2>
               <p>Muitas crianças estão esperando a sua visita :) </p>
            </header>

            <footer>
               <strong>Brasília</strong>
               <span>Distrito Federal</span>
            </footer>
         </aside>

         <Map
            center={[-15.7896516, -47.8870264,]}
            zoom={12.5}
            style={{ width: '100%', height: '100%' }}
         >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />


            {orphanages.map(orphanage => {
               return (
                  <Marker
                     icon={mapIcon}
                     position={[orphanage.latitude, orphanage.longitude]}
                     key={orphanage.id}

                  >
                     <Popup closeButton={false} minWidth={230} maxWidth={230} className="map-popup" maxHeight={40}>
                        {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                           <FiArrowRight size={20} color="#FFF" />
                        </Link>
                     </Popup>
                  </Marker>
               )
            })}
         </Map>

         <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
         </Link>
      </div>
   );
}

export default OrphanagesMap;