import './ServiceHome2.css';
import React, {useState} from "react";

// ----------- other compoenent for the modal imported-----------------------------

import Modal1 from "../Components/Modal/Modal1";
import icon_film from "../Images/icon_film2.png";
import Wedding_home from "../Images/mike_brenda_home.png";


function ServiceHome2() {

    const [openModal, setOpenModal] = useState(false);


    return (

        <>

        <div className="Container-ServiceHome-single" id="Container-ServiceHome">

        <div className="text-Container-ServiceHome-single">
            <h3>
                <img src={icon_film} alt="wedding_home" className="icon_home_services" />
                Audiovisual
            </h3>
            <h2>Discover our audiovisual solutions.</h2>
            <p>
                We create high-quality audiovisual content.
                Combining creativity, technology, and storytelling.
                We bring your ideas to life, engaging and inspiring audiences.
            </p>
            <button className="btn-text-Container-ServiceHome-single">
                Explore service
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>

        <div className="media-Container-ServiceHome-single">
            <button onClick={() => setOpenModal(true)}  className="button-modal-mike_Brenda">
                <img src={Wedding_home} alt="wedding_home" className="image-mike_brenda-home" />
            </button>
            <Modal1 open={openModal} onClose={() => setOpenModal(false)} />
        </div >

    </div>

    </>

    );
}

export default ServiceHome2;
