import React, {useState} from 'react';

const Formulario = () => {
    
    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, guardarError] = useState(false);

    const {artista, cancion} = busqueda;
    //funcion a cada input para leer su contenido
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    //consultar las apis
    const buscarInformacion = e => {
        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === '' ){
            guardarError(true);
            return; 
        }
        guardarError(false);
        //todo bien, pasar al componente principal
    }

    return ( 
        <div className="card border-info mb-3">
            {error ? <p className="alert alert-dismissible alert-danger" >Todos los campos son obligatorios</p> : null }
            <div className="container">
                <div className="row">
                    <form className="text-center"
                          onSubmit={buscarInformacion}
                          >
                        <fieldset className="card border-info mb-3">
                            <h1 className="text-center"> Buscador de Letras</h1>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            tipe="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                    
                                </div>
                                   <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Cancion</label>
                                            <input 
                                                tipe="text"
                                                className="form-control"
                                                name="cancion"
                                                placeholder="Nombre Cancion"
                                                onChange={actualizarState}
                                                value={cancion}
                                            />
                                        </div>
                                   </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto mt-2">    
                            <button
                                type="submit"
                                className="btn btn-info btn-sm"
                            >
                                Buscar
                            </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>    
        </div>
     );
}
 
export default Formulario;