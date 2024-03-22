import React from "react"
import './Header.css'
import logo from '../../Imagenes/RicandMorty.svg'
export const Header = ()=>{
    return(
        
            <header className="encabezado">
                <nav className="contenido-encabezado">
                    <img src={logo} />
                    <ul className="header__List-sc-1lpxlh0-3 lista">
                        <ol>
                            <a className="ancla"  href="#">
                               <b>Docs</b>
                            </a>
                        </ol>
                        <ol>
                            <a className="ancla" href="#">
                               <b>About</b> 
                            </a>
                        </ol>
                        <ol>
                            <a className="ancla" href="#">
                                <span className="estilo">SUPPORT US</span>
                            </a>
                        </ol>
                    </ul>
                </nav>

            </header>
        
    )
}