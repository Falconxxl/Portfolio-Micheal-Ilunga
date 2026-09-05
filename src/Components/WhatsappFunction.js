import './WhatsappFunction.css';


function WhatsappFunction () {
    return (

        <>

        <div className="Container-Whatsapp-function">
            <button
                className="Container-Whatsapp-icon"
                onClick={() =>
                    window.open(
                        "https://wa.me/31685533124?text=Bonjour%20je%20souhaite%20un%20devis",
                        "_blank"
                    )
                }
            >
                <i className="fa-brands fa-whatsapp"></i>
            </button>
        </div>

        </>

    );
}

export default WhatsappFunction;