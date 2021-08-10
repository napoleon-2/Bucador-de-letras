import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';
import Info from './components/Info';

function App() {
  //definir el state
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');
  const [info, guardarInfo] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async () => {
        const {artista, cancion} = busquedaLetra;
        const url = `https://api.vagalume.com.br/search.php?art=${artista}&mus=${cancion}&apikey={ab1cacc4b8e27ea10575363b95b3ea8a}` 
        const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
        
        const [letra, informacion] = await Promise.all([
          axios(url),
          axios(url2)
        ]);
        
        
        guardarLetra(letra.data.mus[0].text)
        guardarInfo(informacion.data.artists[0])
        //guardarLetra(resultado.data.mus[0].text)
      }
    consultarApiLetra();

  }, [busquedaLetra ])

  return (
      <Fragment>
        <Formulario 
          guardarBusquedaLetra={guardarBusquedaLetra}
         />

         <div className="container mt-3">
            <div className="row">
              <div className="col-md-6">
                <Info 
                  info={info}
                />
              </div>
              <div className="col-md-6">
                <Cancion 
                  letra={letra}
                />
              </div>
            </div>
         </div>
      </Fragment>
  );
}

export default App;
