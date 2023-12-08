import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

import facebookICO from "../assets/footer/facebookICO.svg";
import instagramICO from "../assets/footer/instagramICO.svg";
import whatsappICO from "../assets/footer/whatsappICO.svg";

import logoFooter from "../assets/footer/LOGO-COMPLETO-PODODINAMIC-2.png";


const scrollfot = { scrollSnapAlign: "center" };

export default function App() {

  return (
    <footer className="scroll-fot" style={scrollfot}>
        {/* [/* FOOTER PARA MOVILES*/}
            <div className="block lg:hidden bg-[#fff] p-4 text-xs">
            <Accordion>
        <AccordionItem key="1" aria-label="especialidades" title="Especialidades">
                <ul className="flex flex-col justify-center">
                    <li ><a href="/especialidades/vidadiaria">Podología para la Vida Diaria</a></li>
                    <li><a href="/especialidades/pInfantil">Podología Infantil</a></li>
                    <li><a href="/especialidades/deportiva">Podología Deportiva</a></li>
                    <li><a href="/especialidades/personasMayores">Podología Personas Mayores</a></li>
                    <li><a href="/especialidades/fisioRehabi">Fisioterapia y rehabilitación</a></li>
                </ul>
        </AccordionItem>
        <AccordionItem key="2" aria-label="tratamientos" title="Tratamientos" >
                <ul >
                    <li><a href="/tratamientos/quiropodia">Quiropodia</a></li>
                    <li><a href="/tratamientos/uEncarnada">Uña encarnada</a></li>
                    <li><a href="/tratamientos/onicomicosis">Quiropodia</a></li>
                </ul>
        </AccordionItem>
        <AccordionItem key="3" aria-label="plantillas" title="Plantillas">
                <ul>
                    <li><a href="/plantillas/tiposPlantillas">Tipos de plantillas</a></li>
                    <li><a href="/plantillas/estudioBP">Estudio biomecánico de la pisada</a></li>
                </ul>
        </AccordionItem>
        <AccordionItem key="4" aria-label="nosotros" title="Nosotros">
                <ul className="">
                    <li><a href="mailto:informes@pododinamic.pe">informes@pododinamic.pe</a></li>
                </ul>
        </AccordionItem>
        </Accordion>
            <div className="flex justify-center gap-1 mb-2">
                <a href="">
                    <img src={facebookICO.src} alt="facebook"/>
                </a>
                <a href="">
                    <img src={instagramICO.src} alt="instagram"/>
                </a>    
                <a href="">
                    <img src={whatsappICO.src} alt="whatsapp"/>
                </a>
            </div>
            <p className="text-xs text-center">© 2023 Manufacturas San Isidro S.A.C. Todos los derechos reservados</p>
        </div>


        {/* [/*--------------------------- FOOTER PARA LAPTOPS, ESCRITORIO--------------------------*/}
        <div className="hidden lg:flex w-full gap-32 justify-center bg-[#fff] p-4">
            <div className="flex  flex-col">
                <h3 className="uppercase font-bold text-[#2fa1c7] mb-1 flex">especialidades </h3>
                <ul>
                    <li><a href="/especialidades/vidadiaria" className="hover:text-[#0197bf]">Podología para la Vida Diaria</a></li>
                    <li><a href="/especialidades/pInfantil" className="hover:text-[#0197bf]">Podología Infantil</a></li>
                    <li><a href="/especialidades/deportiva" className="hover:text-[#0197bf]">Podología Deportiva</a></li>
                    <li><a href="/especialidades/personasMayores" className="hover:text-[#0197bf]">Podología Personas Mayores</a></li>
                    <li><a href="/especialidades/fisioRehabi" className="hover:text-[#0197bf]">Fisioterapia y rehabilitación</a></li>
                </ul>
            </div>
            <div>
                <div className="flex justify-center lg:flex-col">
                    <h3 className="uppercase font-bold text-[#2fa1c7] mb-1 flex">tratamientos</h3>
                    <ul>
                    <li><a href="/tratamientos/quiropodia" className="hover:text-[#0197bf]">Quiropodia</a></li>
                    <li><a href="/tratamientos/uEncarnada" className="hover:text-[#0197bf]">Uña encarnada</a></li>
                    <li><a href="/tratamientos/onicomicosis" className="hover:text-[#0197bf]">Onicomicosis</a></li>
                    </ul>
                </div>
                <div className="flex justify-center lg:flex-col">
                    <h3 className="uppercase font-bold text-[#2fa1c7] mb-1 lg:mt-4 mt-3 flex">plantillas personalizadas</h3>
                    <ul>
                        <li><a href="/plantillas/tiposPlantillas" className="hover:text-[#0197bf]">Tipos de plantillas</a></li>
                        <li><a href="/plantillas/estudioBP" className="hover:text-[#0197bf]">Estudio biomecánico de la pisada</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center flex-col">
                <h3 className="uppercase font-bold text-[#2fa1c7] mb-1 flex justify-center">nosotros</h3>
                <ul>
                    <li><a href="mailto:informes@pododinamic.pe" className="hover:text-[#0197bf]">informes@pododinamic.pe</a></li>
                </ul>
                <div className="flex justify-center gap-1">
                    <a href="https://www.facebook.com/Pododinamic" target="_blank">
                        <img src={facebookICO.src} alt="facebook"/>
                    </a>
                    <a href="https://www.instagram.com/pododinamic/" target="_blank">
                        <img src={instagramICO.src} alt="instagram"/>
                    </a>
                    <a href="https://wa.me/51983949899?text=Hola+tengo+una+consulta" target="_blank">
                        <img src={whatsappICO.src} alt="whatsapp"/>
                    </a>
                </div>
            </div>
            <div className="w-48 flex items-center">
                <a href="/" className="w-full">
                    <img src={logoFooter.src} alt="logoFooter"/>
                </a>
            </div>
        </div>
    </footer>
  );
}