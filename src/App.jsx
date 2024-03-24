import { useEffect, useState} from 'react'
import { Header } from './Componentes/Encabezado/Header'
import { Contenedor } from './Componentes/Contenido/contenedor'

function App() {
    const [imagenes , setImagenes] = useState([])
    useEffect(()=>{
      async function obtenerDatos(){
        const respuesta = await fetch("https://rickandmortyapi.com/api/character")
        const datos = await respuesta.json()
        setImagenes(datos.results);
      }
      obtenerDatos();
    },[])

  return (
    <> 
    
      <Header/>
      <Contenedor/>
          <div className="cajas">
            
            {
              imagenes.map((imagenes) =>{
                return(
                  <div className="subcontenedor2">
                    <img src={imagenes.image} alt={imagenes.name} />
                  </div>
                )
              })
              
            }              
          </div>
    </>
  )
}

export default App
