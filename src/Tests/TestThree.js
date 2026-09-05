import './Music.css';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Navbar4 from "../../Components/Navbar4/Navbar4";
import Footer2 from "../../Components/Footer2/Footer2";

// -----------video imported-----------------------------------
import video_dream from "../../Images/Dream Girl_ilunga12.mp4";
import video_dream_mobile from "../../Images/Dream_Girl_mobile.mp4";

// -----------images icons imported-----------------------------
import youtube_music from "../../Images/youtube-music3.png";
import spotify_icon from "../../Images/spotify_logo.png";
import Apple_music_icon from "../../Images/Apple_music_logo2.png";
import deezer_icon from "../../Images/deezer_logo2.png";
import napster_icon from "../../Images/napster_logo2.png";
import youtube_logo2 from "../../Images/youtube_logo2.png";

// -----------images videos-miniatures imported-----------------------------
import miniature_mas from "../../Images/miniature-MAS8.jpg";
import miniature_dream_girl from "../../Images/miniature-dream-girl8.jpg"
import miniature_so_fine from "../../Images/miniature-so-fine4.jpg";
import miniature_liboma from "../../Images/miniature-liboma3.jpg";
import miniature_pop_da_booty from "../../Images/miniature-pop-da-booty3.jpg";
import miniature_reason_to_be from "../../Images/miniature-reason-to-be4.jpg";
import miniature_soFine_making from "../../Images/miniature-so-fine-making3.jpg";
import miniature_Dream_making from "../../Images/miniature-dream-girl_making3.jpg";
import miniature_mas_sergio from "../../Images/miniature-MAS-Sergio3.jpg";

// -----------Cd covers images imported-----------------------------
import miniature_disc_dream2 from "../../Images/disco_dream1.jpg";
import disco_1stclass from "../../Images/cover_1stclass3.jpg";
import disco_MAS1 from "../../Images/disco_MAS2.jpg";
import disco_urban_love from "../../Images/disco_urban_love.jpg";
import disco_sofine1 from "../../Images/disco_soFine3.jpg";
import disco_STREETSOUND from "../../Images/Disco_STREETSOUNDS5.jpg";
import disco_liboma from "../../Images/Cover_liboma_compressed";
import disco_dream from "../../Images/Cover-Dream-compressed";

// ----------- other images imported-----------------------------
import webshop_t_shirt from "../../Images/t-shirt_shop_drea2.png";
import pic_ilunga_studio1 from "../../Images/pic_ilunga_studio2.jpg";
import ilunga_elenore2 from "../../Images/listen_ilunga13.jpg";
import ilunga_elenore3 from "../../Images/listen_ilunga14.jpg";

// ----------- other compoenent for the modal imported-----------------------------
import Modal1 from "../../Components/Modals/Modal1";
import Modal2 from "../../Components/Modals/Modal2";
import Modal3 from "../../Components/Modals/Modal3";
import Modal4 from "../../Components/Modals/Modal4";
import Modal5 from "../../Components/Modals/Modal5";
import Modal6 from "../../Components/Modals/Modal6";
import Modal7 from "../../Components/Modals/Modal7";
import Modal8 from "../../Components/Modals/Modal8";
import Modal9 from "../../Components/Modals/Modal9";


function Music() {

    const [openModal, setOpenModal] = useState(false);

    const [openModalb, setOpenModalb] = useState(false);

    const [openModalc, setOpenModalc] = useState(false);

    const [openModald, setOpenModald] = useState(false);

    const [openModale, setOpenModale] = useState(false);

    const [openModalf, setOpenModalf] = useState(false);

    const [openModalg, setOpenModalg] = useState(false);

    const [openModalh, setOpenModalh] = useState(false);

    const [openModali, setOpenModali] = useState(false);

    return (


        <>

        <div>

            <Navbar4/>

            {/*------------BANNER VIDEO PRT---------------------*/}

            <div className="container-music">
                <div className="dream-girl-background">
                    <video autoPlay loop muted src={video_dream}
                           type='video/mp4'
                           className="dream-girl-background-video"/>

                    <video autoPlay loop muted src={video_dream_mobile}
                           type='video/mp4'
                           className="dream-girl-background-mobile"/>
                </div>

                <a className="link-to-DreamGirl"
                   href="https://www.youtube.com/watch?v=ri8RdSNmzVM"
                   target="_blank">Watch the clip</a>

                {/*------------BIOGRAPHY---------------------*/}

                <div className="My-biography">
                    <h1 className="headline-text1">BIOGRAPHY</h1>
                    <p >Michael Ilunga., better known by stage name ILUNGA, (born in Kinshasa on January 31,
                        1984) is a singer/rapper and producer. His first name “Michael” was given by his father,
                        who was used to be Michael jackson’s fan. At the age of 12, he discovered
                        the rap music from local Tv channels of Kinshasa and international tv channels
                        such as channel O and MTV.  Since then he became
                        very passionate. In 2011 he released the single “My African Sound (Feat. S. Lopes)”.
                        And in 2014 he started to work on his Album project “Rise Up”. “Dream Girl” is the first
                        single of the project and will be realease on platforms such as,  iTunes/Apple Music, Spotify,
                        Deezer, TIDAL, Qobuz, Napster, Google Play Music, AmazonMP3, Pandora and Shazam.
                    </p>
                </div>

                {/*-------------MUSIC--------------------*/}

                <div className="music-section">
                    <h1 className="headline-text2" >MUSIC</h1>

                    <p>Listen to "Dream Girl", the latest song ILUNGA released.</p>

                    <div className="music-section-2">

                        <img src={miniature_disc_dream2} alt="pixam-logo" className="image-disc-dream"/>

                        <div className="background-music-stream-icon">
                            <a className="streaming-button"
                               href="https://music.youtube.com/watch?v=pgXDIfrLiew" target="_blank">
                                <button className="button-music">
                                    <img src={youtube_music} alt="pixam-logo" className="icon_youtube_music"
                                         style={{width:"80px"}}/>
                                </button>
                            </a>
                            <a className="streaming-button"
                               href="https://open.spotify.com/track/7fhaw7pbTledKTVmidqqYM" target="_blank">
                                <button className="button-music">
                                    <img src={spotify_icon} alt="pixam-logo" className="icon_youtube_music"
                                         style={{width:"75px"}}/>
                                </button>
                            </a>
                            <a className="streaming-button"
                               href="https://music.apple.com/us/album/dream-girl/1513879516?i=1513879518" target="_blank">
                                <button className="button-music">
                                    <img src={Apple_music_icon} alt="pixam-logo" className="icon_youtube_music"
                                         style={{width:"110px"}}/>
                                </button>
                            </a>
                            <a className="streaming-button"
                               href="https://www.deezer.com/search/ilunga%20dream%20girl" target="_blank">
                                <button className="button-music">
                                    <img src={deezer_icon} alt="pixam-logo" className="icon_youtube_music"
                                         style={{width:"110px"}}/>
                                </button>
                            </a>
                            <a className="streaming-button"
                               href="https://music.youtube.com/watch?v=pgXDIfrLiew" target="_blank">
                                <button className="button-music">
                                    <img src={napster_icon} alt="pixam-logo" className="icon_youtube_music"
                                         style={{width:"100px"}}/>
                                </button>
                            </a>
                            <a className="streaming-button"
                               href="https://www.youtube.com/watch?v=ri8RdSNmzVM" target="_blank">
                                <button className="button-music">
                                    <img src={youtube_logo2} alt="pixam-logo" className="icon_youtube_music"
                                         style={{width:"100px"}}/>
                                </button>
                            </a>
                        </div>

                    </div>
                </div>

                {/*-------------DISCOGRAPHY----------------------------*/}

                <div className="discography">

                    <h1 className="headline-text1"
                        style={{marginBottom:"0px"}}>DISCOGRAPHY</h1>

                    <div className="disc-discography">
                        <img src={disco_1stclass} alt="disco-1stclass1"
                             className="discography-1stclass-1"
                        />

                        <div className="discography-info1">
                            <div className="element-album1">
                                <h >Album Title :</h><p>1st Class</p>
                            </div>
                            <div className="element-album1">
                                <h>Group name :</h><p>Urban Vision</p>
                            </div>
                            <div className="element-album1">
                                <h>Performed by :</h><p>ILUNGA/ S. LOPES/ J. BERNALD/ J. BROWN/ TRANKILITO</p>
                            </div>
                            <div className="element-album1">
                                <h>Written by :</h><p>ILUNGA/ S. LOPES</p>
                            </div>
                            <div className="element-album1">
                                <h>Album released in :</h><p>2005</p>
                            </div>
                            <div className="element-album1">
                                <h>Produced by :</h><p>R. WALLACE/ K. VAN HOUDEN/ ILUNGA</p>
                            </div>
                            <div className="element-album1">
                                <h>Mixed and mastered by :</h><p>Kees Tel Pro</p>
                            </div>
                            <div className="element-album1">
                                <h>Record label :</h><p>MANCHA NEGRA @Paris</p>
                            </div>
                            <div className="element-album1-buttons" >
                                <a href="/UrbanVisionTrackList" target="_blank" className="listen-button"
                                   style={{textDecoration:"none"}}>VIEW THE ALBUM</a>
                                <a href="https://youtube.com/playlist?list=PLNg3U4VQUWLHl2qyV3u3IDzkjQPo5Toen"
                                   style={{textDecoration:"none"}}
                                   target="_blank" className="listen-button">LISTEN TO THE ALBUM</a>
                            </div>
                        </div>
                    </div>

                    <div className="disc-discography">
                        <img src={disco_STREETSOUND} alt="disco-1stclass1"
                             className="discography-1stclass-1"
                        />

                        <div className="discography-info1">
                            <div className="element-album1">
                                <h >MixTape Title :</h><p>Histoire</p>
                            </div>
                            <div className="element-album1">
                                <h>Group name :</h><p>STREETSOUNDS</p>
                            </div>
                            <div className="element-album1">
                                <h>Performed by :</h><p>M. ILUNGA/ K. GABRIEL/ PATAGORE/ JIMMY KING/ YA KIL/ S. LOPES</p>
                            </div>
                            <div className="element-album1">
                                <h>Written by :</h><p>M. ILUNGA/ K. GABRIEL/ PATAGORE/ JIMMY KING/ YA KIL/ S. LOPES</p>
                            </div>
                            <div className="element-album1">
                                <h>Recorded in :</h><p>2008</p>
                            </div>
                            <div className="element-album1">
                                <h>Produced by :</h><p>M. ILUNGA/ JIMMY KING</p>
                            </div>
                            <div className="element-album1">
                                <h>Mixed and mastered by :</h><p>Not mixed and mastered</p>
                            </div>
                            <div className="element-album1">
                                <h>Record label :</h><p>Unknown</p>
                            </div>
                            <div className="element-album1-buttons" >
                                <a href="https://youtube.com/playlist?list=PLNg3U4VQUWLHl2qyV3u3IDzkjQPo5Toen"
                                   style={{textDecoration:"none"}}
                                   target="_blank" className="listen-button">LISTEN TO THE MIXTAPE</a>
                            </div>
                        </div>
                    </div>

                    <div className="disc-discography">
                        <img src={disco_urban_love} alt="disco-1stclass1"
                             className="discography-1stclass-1"
                        />

                        <div className="discography-info1">
                            <div className="element-album1">
                                <h >MixTape Title :</h><p>Urban Love</p>
                            </div>
                            <div className="element-album1">
                                <h>Artist name :</h><p>M. ILUNGA</p>
                            </div>
                            <div className="element-album1">
                                <h>Performed by :</h><p>M. ILUNGA/ S. LOPES/ FDRICO/ BUSHA/ L. MANCE/ BENTLEY/ EURO/ K. GABRIEL/ SONY</p>
                            </div>
                            <div className="element-album1">
                                <h>Written by :</h><p>ILUNGA/ PATAGORE/ S. LOPES/ FDRICO/ BUSHA/ L. MANCE/ BENTLEY</p>
                            </div>
                            <div className="element-album1">
                                <h>Recorded in :</h><p>2010</p>
                            </div>
                            <div className="element-album1">
                                <h>Produced by :</h><p>M. ILUNGA/ DJ. MBT/ NGU RECORDZ/ FDRICO</p>
                            </div>
                            <div className="element-album1">
                                <h>Mixed and mastered by :</h><p>Not mixed and mastered</p>
                            </div>
                            <div className="element-album1">
                                <h>Record label :</h><p>Unknown</p>
                            </div>
                            <div className="element-album1-buttons" >
                                <a href="https://www.youtube.com/playlist?list=PLNg3U4VQUWLEkOhIKwxVhfxUWT2fffI2k"
                                   style={{textDecoration:"none"}}
                                   target="_blank" className="listen-button">LISTEN TO THE MIXTAPE</a>
                            </div>
                        </div>
                    </div>

                    <div className="disc-discography">
                        <img src={disco_MAS1} alt="disco-1stclass1"
                             className="discography-1stclass-1"
                        />

                        <div className="discography-info1">
                            <div className="element-album1">
                                <h >Single Title :</h><p>My African Sound</p>
                            </div>
                            <div className="element-album1">
                                <h>Artist name :</h><p>ILUNGA</p>
                            </div>
                            <div className="element-album1">
                                <h>Performed by :</h><p>ILUNGA/ S. LOPES</p>
                            </div>
                            <div className="element-album1">
                                <h>Written by :</h><p>ILUNGA/ S. LOPES</p>
                            </div>
                            <div className="element-album1">
                                <h>Recorded and released in :</h><p>2012</p>
                            </div>
                            <div className="element-album1">
                                <h>Produced by :</h><p>M. ILUNGA/ DJ. MBT</p>
                            </div>
                            <div className="element-album1">
                                <h>Mixed and mastered by :</h><p>RYAN</p>
                            </div>
                            <div className="element-album1">
                                <h>Record label :</h><p>Unknown</p>
                            </div>
                            <div className="element-album1-buttons" >
                                <a href="https://music.apple.com/gb/album/my-african-sound-feat-s-lopes-radio-version-single/509136606"
                                   style={{textDecoration:"none"}}
                                   target="_blank" className="listen-button">LISTEN TO THE SINGLE
                                </a>
                                <a href="https://www.youtube.com/watch?v=ESJlcZWTtHA"
                                   style={{textDecoration:"none"}}
                                   target="_blank" className="listen-button">WATCH THE MUSIC VIDEO
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="disc-discography">
                        <img src={disco_sofine1} alt="disco-1stclass1"
                             className="discography-1stclass-1"
                        />

                        <div className="discography-info1">
                            <div className="element-album1">
                                <h >Single Title :</h><p>So Fine</p>
                            </div>
                            <div className="element-album1">
                                <h>Artist name :</h><p>ILUNGA</p>
                            </div>
                            <div className="element-album1">
                                <h>Performed by :</h><p>ILUNGA</p>
                            </div>
                            <div className="element-album1">
                                <h>Written by :</h><p>ILUNGA</p>
                            </div>
                            <div className="element-album1">
                                <h>Recorded and released in :</h><p>2013</p>
                            </div>
                            <div className="element-album1">
                                <h>Produced by :</h><p>M. ILUNGA/ DJ. MBT</p>
                            </div>
                            <div className="element-album1">
                                <h>Mixed and mastered by :</h><p>Not mixed and mastered</p>
                            </div>
                            <div className="element-album1">
                                <h>Record label :</h><p>Unknown</p>
                            </div>
                            <div className="element-album1-buttons" >
                                <a href="https://www.youtube.com/watch?v=6ScWzjwy1QQ"
                                   style={{textDecoration:"none"}}
                                   target="_blank" className="listen-button">WATCH THE MUSIC VIDEO
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="disc-discography">
                        <img src={disco_liboma} alt="disco-1stclass1"
                             className="discography-1stclass-1"
                        />

                        <div className="discography-info1">
                            <div className="element-album1">
                                <h >Single Title :</h><p>Liboma</p>
                            </div>
                            <div className="element-album1">
                                <h>Artists name :</h><p>ILUNGA/ STREETSOUNDS</p>
                            </div>
                            <div className="element-album1">
                                <h>Performed by :</h><p>PATAGORE/ K. GABRIEL/ ILUNGA/ YA KIL/ J. KING</p>
                            </div>
                            <div className="element-album1">
                                <h>Written by :</h><p>PATAGORE/ K. GABRIEL/ ILUNGA/ YA KIL/ J. KING</p>
                            </div>
                            <div className="element-album1">
                                <h>Recorded and released in :</h><p>2017</p>
                            </div>
                            <div className="element-album1">
                                <h>Produced by :</h><p>M. ILUNGA</p>
                            </div>
                            <div className="element-album1">
                                <h>Mixed and mastered by :</h><p>RYAN</p>
                            </div>
                            <div className="element-album1">
                                <h>Record label :</h><p>DIAMOND-KEY MUSIC</p>
                            </div>
                            <div className="element-album1-buttons" >
                                <a href="https://www.youtube.com/watch?v=KQ7XOU8SNXc"
                                   style={{textDecoration:"none"}}
                                   target="_blank" className="listen-button">WATCH THE MUSIC VIDEO
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="disc-discography">
                        <img src={disco_dream} alt="disco-1stclass1"
                             className="discography-1stclass-1"
                        />

                        <div className="discography-info1">
                            <div className="element-album1">
                                <h >Single Title :</h><p>Dream Girl</p>
                            </div>
                            <div className="element-album1">
                                <h>Artists name :</h><p>ILUNGA</p>
                            </div>
                            <div className="element-album1">
                                <h>Performed by :</h><p>ILUNGA</p>
                            </div>
                            <div className="element-album1">
                                <h>Written by :</h><p>ILUNGA</p>
                            </div>
                            <div className="element-album1">
                                <h>Recorded and released in :</h><p>2020</p>
                            </div>
                            <div className="element-album1">
                                <h>Produced by :</h><p>ILUNGA</p>
                            </div>
                            <div className="element-album1">
                                <h>Mixed and mastered by :</h><p>RYAN</p>
                            </div>
                            <div className="element-album1">
                                <h>Record label :</h><p>DIAMOND-KEY MUSIC</p>
                            </div>
                            <div className="element-album1-buttons" >
                                <a href="https://www.youtube.com/watch?v=ri8RdSNmzVM"
                                   style={{textDecoration:"none"}}
                                   target="_blank" className="listen-button">WATCH THE MUSIC VIDEO
                                </a>
                                <a href="https://open.spotify.com/track/7fhaw7pbTledKTVmidqqYM"
                                   style={{textDecoration:"none"}}
                                   target="_blank" className="listen-button">LISTEN TO THE SINGLE
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/*-------------SHOP----------------------------*/}

                <div className="section-shop">
                    <div className="background-ilunga-elenore">
                    </div>

                    <img src={ilunga_elenore2} alt="pixam-logo" className="ilunga_elenore3"
                    />

                    <img src={ilunga_elenore3} alt="pixam-logo" className="ilunga_elenore4"
                    />

                    <div className="background-shop-dream">
                        <h1 className="headline-text-Shop" >SHOP</h1>

                        <p className="text-shirt-dream1">
                            A new collection of the "Dream Girl" brand t-shirts will
                            be available soon. Keep following us to find out when this
                            will be operational.
                        </p>

                        <div className="websop-container-tshirt">

                            <img src={webshop_t_shirt} alt="pixam-logo" className="image-tshirt-dream"
                            />
                        </div>

                        <a className="text-shirt-dream1">
                            A t'shirt and a sweater.
                        </a>

                        <a id="button-music2" href="#" target="_blank">
                            Go to the webshop
                        </a>
                    </div>
                </div>

                {/*----------VIDEOCLIPS PRT-----------------------*/}

                <div className="Videoclips-part">
                    <h1 className="headline-text1"
                    >VIDEOCLIPS</h1>

                    <div className="videos-ilunga">
                        <div className="small-videos-ilunga" >
                            <div className="div-miniature">
                                <h style={{marginTop:"200px", marginLeft:"38px"}}>My African Sound feat. S. LOPES</h>
                                <button onClick={() => setOpenModal(true)}  className="button-modal-miniature">
                                    <i className="fa-brands fa-youtube"></i>
                                    <img src={miniature_mas} alt="pixam-logo" className="miniature_-image-videos"
                                         style={{width:"100%"}}/>
                                    <h >My African Sound feat. S. LOPES</h>
                                </button>
                                <Modal1 open={openModal} onClose={() => setOpenModal(false)} />
                            </div>
                        </div>


                        <div className="small-videos-ilunga">
                            <div className="div-miniature">
                                <button onClick={() => setOpenModalb(true)}  className="button-modal-miniature">
                                    <i className="fa-brands fa-youtube"></i>
                                    <img src={miniature_dream_girl} alt="pixam-logo" className="miniature_-image-videos"
                                         style={{width:"100%"}}/>
                                    <h >Dream Girl</h>
                                </button>
                                <Modal2 openb={openModalb} onCloseb={() => setOpenModalb(false)} />
                            </div>
                        </div>


                        <div className="small-videos-ilunga" style={{backgroundColor:"green"}}>
                            <div className="div-miniature">
                                <button onClick={() => setOpenModalc(true)}  className="button-modal-miniature">
                                    <i className="fa-brands fa-youtube"></i>
                                    <img src={miniature_so_fine} alt="pixam-logo" className="miniature_-image-videos"
                                         style={{width:"100%"}}/>
                                    <h >So Fine</h>
                                </button>
                                <Modal3 openc={openModalc} onClosec={() => setOpenModalc(false)}/>
                            </div>
                        </div>


                        <div className="small-videos-ilunga" style={{backgroundColor:"pink"}}>
                            <div className="div-miniature">
                                <button onClick={() => setOpenModald(true)}  className="button-modal-miniature">
                                    <i className="fa-brands fa-youtube"></i>
                                    <img src={miniature_liboma} alt="pixam-logo" className="miniature_-image-videos"
                                         style={{width:"100%"}}/>
                                    <h >Liboma</h>
                                </button>
                                <Modal4 opend={openModald} onClosed={() => setOpenModald(false)} />
                            </div>
                        </div>

                        <div className="small-videos-ilunga" style={{backgroundColor:"white"}}>
                            <div className="div-miniature">
                                <button onClick={() => setOpenModale(true)}  className="button-modal-miniature">
                                    <i className="fa-brands fa-youtube"></i>
                                    <img src={miniature_mas_sergio} alt="pixam-logo" className="miniature_-image-videos"
                                         style={{width:"100%"}}/>
                                    <h >S. LOPES records My African Sound</h>
                                </button>
                                <Modal5 opene={openModale} onClosee={() => setOpenModale(false)} />
                                <Modal5/>
                            </div>
                        </div>

                        <div className="small-videos-ilunga" style={{backgroundColor:"black"}}>
                            <div className="div-miniature">
                                <button onClick={() => setOpenModalf(true)}  className="button-modal-miniature">
                                    <i className="fa-brands fa-youtube"></i>
                                    <img src={miniature_soFine_making} alt="pixam-logo" className="miniature_-image-videos"
                                         style={{width:"100%", height:"100%"}}/>
                                    <h >So Fine (Making of the video)</h>
                                </button>
                                <Modal6 openf={openModalf} onClosef={() => setOpenModalf(false)} />
                            </div>
                        </div>

                        <div className="small-videos-ilunga" style={{backgroundColor:"yellow"}}>
                            <div className="div-miniature">
                                <button onClick={() => setOpenModalg(true)}  className="button-modal-miniature">
                                    <i className="fa-brands fa-youtube"></i>
                                    <img src={miniature_Dream_making} alt="pixam-logo" className="miniature_-image-videos"
                                         style={{width:"100%"}}/>
                                    <h >Dream Girl (Making of the video)</h>
                                </button>
                                <Modal7 openg={openModalg} onCloseg={() => setOpenModalg(false)} />
                            </div>
                        </div>

                        <div className="small-videos-ilunga" style={{backgroundColor:"orange"}}>
                            <div className="div-miniature">
                                <button onClick={() => setOpenModalh(true)}  className="button-modal-miniature">
                                    <i className="fa-brands fa-youtube"></i>
                                    <img src={miniature_reason_to_be} alt="pixam-logo" className="miniature_-image-videos"
                                         style={{width:"100%"}}/>
                                    <h >Reason To Be (Produced By ILUNGA)</h>
                                </button>
                                <Modal8 openh={openModalh} onCloseh={() => setOpenModalh(false)} />

                            </div>
                        </div>

                        <div className="small-videos-ilunga" style={{backgroundColor:"grey"}}>
                            <div className="div-miniature">
                                <button onClick={() => setOpenModali(true)}  className="button-modal-miniature">
                                    <i className="fa-brands fa-youtube"></i>
                                    <img src={miniature_pop_da_booty} alt="pixam-logo" className="miniature_-image-videos"
                                         style={{width:"100%"}}/>
                                    <h >Pop Da Booty Fasta (Produced by ILUNGA)</h>
                                </button>
                                <Modal9 openi={openModali} onClosei={() => setOpenModali(false)} />

                            </div>
                        </div>
                    </div>

                </div>

                {/*------------NEWS---------------------*/}

                <div className="News">
                    <h1 className="headline-text2" style={{marginBottom:"20px"}}>NEWS</h1>

                    <div className="news-music" >
                        <img src={pic_ilunga_studio1} alt="pic_ilunga_studio" className="pic_studio_ilunga1"
                        />
                        <div className="text_news_music">
                            <h1 style={{color:"#2f013b", fontFamily:"Sora", fontSize:"18px"}}>NYOTA BEAT</h1>
                            <p className="text_news_paragraphe" >
                                ILUNGA is working on 2 albums which will be launched consecutively. There will be
                                first an album in French with 20 titles which will be released in 2024 and an another
                                one in English of 20 titles which will be released in 2026. In the first year of the
                                release of the 2 albums the artist will first present 10 titles. At the end of 2024 he
                                will drop the other 10, so the complete album.
                                The last time ILUNGA released a song was in May 2020, after this period the artist did
                                not release a song because he felt that his music was not connected to the trend of the
                                moment, which is the Afro-beat trend. He decided to take a step back in order to find
                                music that would be appropriate to better connect with the audience he is targeting.
                                He therefore took his time to listen and understand different trends of the moment in
                                order to better interpret them. The album will therefore contain several styles of music
                                such as Afrobeat, Zouk, Rnb, drill, slowjam, rumba, hip-hop, and other styles that you
                                discover in the two discs.</p>

                            <Link className="link_news_music">visit website</Link>
                        </div>
                    </div>

                </div>

                {/*---------------------------------*/}

            </div>

            <Footer2/>

        </div>

        </>
    );
}

export default Music;
