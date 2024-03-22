import React ,{useState } from "react";
import './contenedor.css';
import imagen from '../../Imagenes/Rick-and-Morty.png';
import { useEffect } from 'react';


export const Contenedor = () =>{
 

    return(
        <>
            <main>
                <section className="contenedor">
                    <h1 className="titulo">
                        The Rick and Morty Api
                    </h1>
                    <div className="imagen">
                        <img src={imagen} alt="" />
                    </div>
                </section>
                
            </main>  
        </>
    )
}

