import React from 'react';
import Consort from './experiences/Consort';
import Philes from './experiences/Philes';
import Obd from './experiences/Obd';
import Izianet from './experiences/Izianet';
import Mgs from './experiences/Mgs';
import Sab from './experiences/Sab';
import Seeweb from './experiences/Seeweb';

function SectionExp() {
    return (  
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experiences</h2>

    {/* EXPERIENCE Consort*/}       
            <Consort/>
    {/* EXPERIENCE Philes*/}
            <Philes/>
    {/* EXPERIENCE Outils OBD Facile*/}
            <Obd/>
    {/* EXPERIENCE Izianet*/}
            <Izianet/>
    {/*  EXPERIENCE MGS Consulting Ouest*/}
            <Mgs/>
    {/*  EXPERIENCE SAB Informatique*/}
            <Sab/>
    {/* EXPERIENCE SeeWeb*/}
            <Seeweb/>
        </div>
      </section>
    );

}

export default SectionExp;