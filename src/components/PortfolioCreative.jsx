import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import ReactTooltip from "react-tooltip";
import { AiFillRead } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Modal from "react-modal";
import Social from "./Social";

const Portfolio = () => {
 // for modal details
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  // for modal details method
  function toggleModalone() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  } function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalHeigt() {
    setIsOpen8(!isOpen8);
  }

  return (
    <>
      <Gallery>
        <div className="container">
          <div className="tokyo_tm_portfolio">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Creative Portfolio</h3>
                </div>
              </div>
            </div>
            {/* END TOKYO_TM_TITLE */}

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>Divers</Tab>
                  
                </TabList>
                {/* END TABLIST */}
                <div className="list_wrapper">
                  <TabPanel>
                    <ul className="portfolio_list">
                      
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/nina/Nina-Carducci.webp"
                              alt="Details"
                              data-tip
                              data-for="detail"
                              onClick={toggleModalTwo}
                            />

                            <ReactTooltip
                              id="detail"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Nina Carducci - Photographie</h5>
                                <span>SEO, Optimisation, Accessibilité</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/Kasa/Kasa.webp"
                              alt="Details"
                              data-tip
                              data-for="detail2"
                              onClick={toggleModalThree}
                            />

                            <ReactTooltip
                              id="detail2"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Kasa</h5>
                                <span>React, Sass</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/Argent/argentbank-project.webp"
                              alt="Details"
                              data-tip
                              data-for="detail3"
                              onClick={toggleModalFour}
                            />

                            <ReactTooltip
                              id="detail3"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Argent Bank</h5>
                                <span>React, Redux ToolKit, Sass, API</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/sophie/sophieBluel.webp"
                              alt="Details"
                              data-tip
                              data-for="detail4"
                              onClick={toggleModalFive}
                            />

                            <ReactTooltip
                              id="detail4"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Sophie Bluel - Portfolio</h5>
                                <span>HTML, CSS, JavaScript, API</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/it/Print-It.webp"
                              alt="Details"
                              data-tip
                              data-for="detail5"
                              onClick={toggleModalSix}
                            />

                            <ReactTooltip
                              id="detail5"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Print-It</h5>
                                <span>JavaScript</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/ohmy/Ohmyfood.webp"
                              alt="Details"
                              data-tip
                              data-for="detail6"
                              onClick={toggleModalSeven}
                            />

                            <ReactTooltip
                              id="detail6"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>OhMyFood</h5>
                                <span>HTML, CSS, Media Queries</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/Booki/Booki.webp"
                              alt="Details"
                              data-tip
                              data-for="detail7"
                              onClick={toggleModalone}
                            />

                            <ReactTooltip
                              id="detail7"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Booki</h5>
                                <span>HTML, CSS, Media Queries</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/77/724-Events.webp"
                              alt="Details"
                              data-tip
                              data-for="detail7"
                              onClick={toggleModalHeigt}
                            />

                            <ReactTooltip
                              id="detail7"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>724 Events</h5>
                                <span>HTML, réact, debugage, seo</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                 
                  {/* END PHOTOGRAHY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/6.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail"
                              onClick={toggleModalThree}
                            />

                            <ReactTooltip
                              id="detail"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Nina Carducci - Photographie</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/7.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail2"
                              onClick={toggleModalFour}
                            />

                            <ReactTooltip
                              id="detail2"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Ave Simone</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                    </ul>
                    {/* END DETAILS GALLERY */}
                  </TabPanel>
                  {/* END CREATIVE PORTFOLIO GALLERY */}
                </div>
                {/* END LIST WRAPPER */}
              </Tabs>
            </div>
          </div>
        </div>
      </Gallery>
      {/* popup vidoe for youtube modal activation */}
      

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalone}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalone}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/Booki/Booki.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>BooKi</h3>
                <span>HTML, CSS, Media Queries</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  En tant que Dévelloppeur Front-End,
                   j'ai été chargé d'intégrer l'interface du site Booki. Travaillant en collaboration étroite avec l'UI designer et le CTO de l'entreprise,
                    j'ai transformé les maquettes en code HTML et CSS. Le résultat final a été une expérience utilisateur conviviale et un site web fonctionnel.
                  </p>
                  
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>OpenClassRooms</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>HTML, CSS, Media Queries</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2023</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <div className="link-projet">
                      <a className="" target="_blank" rel="noreferrer" href="https://github.com/remifufar/Dubar_r-mi_1_codebooki_042023.git">  GitHub </a>
                      <a className=""target="_blank" rel="noreferrer" href="https://remifufar.github.io/Dubar_r-mi_1_codebooki_042023/" > Visualisé  </a>
                   </div> 
                   </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/Booki/Booki2.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/2.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/3.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>


      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/nina/Nina-Carducci.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Nina Carducci - Photographie</h3>
                <span>SEO, Optimisation, Accessibilité</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  En tant que Dévelloppeur freelance, 
                  j'ai optimisé le site de la photographe Nina Carducci. 
                  Le site avait des problèmes de vitesse de chargement et de visibilité en ligne.
                   J'ai amélioré le référencement SEO, les performances du site et l'accessibilité. 
                   J'ai optimisé le poids des images, ajouté des balises pour les réseaux sociaux et renforcé le référencement local pour une portée plus large. 
                   J'ai utilisé des outils tels que Lighthouse et Wave pour évaluer et améliorer les performances du site.
                    Notre collaboration a résolu ces problèmes et a augmenté la visibilité en ligne de Nina.
                  </p>
                  
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>OpenClassRooms</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>SEO, Optimisation, Accessibilité</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2023</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <div className="link-projet">
                      <a className="" target="_blank" rel="noreferrer" href="https://github.com/remifufar/ninacarducci-projet9.git">  GitHub </a>
                      <a className=""target="_blank" rel="noreferrer" href="https://ninacarducci-projet9.vercel.app/" > Visualisé  </a>
                   </div>
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/nina/Nina-Carducci2.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/nina/Nina-Carducci-project.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/3.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/Argent/Argent-Bank.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Argent Bank</h3>
                <span>React, Redux ToolKit, Sass, API</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  En tant que Dévelloppeur front-end chez Argent Bank,
                   j'ai réalisé le front-end d'une application web React. 
                   J'ai également utilisé Redux pour gérer l'état de l'application.
                    L'application permet aux utilisateurs de visiter la page d'accueil, de se connecter, 
                    de visualiser leur profil, et de se déconnecter. 
                    J'ai également appliqué des bonnes pratiques Green Code en optimisant les images 
                    et créant des composants réutilisables. 
                  Jai également réalisé une documentation Swagger pour la gestions futurs des transactions.
                  </p>
                  
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>OpenClassRooms</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>React, Redux ToolKit, Sass, API</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2023</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      
                      <div className="link-projet">
                      <a className="" target="_blank" rel="noreferrer" href="https://github.com/remifufar/ArgentBank-website.git">  GitHub </a>
                      <a className=""target="_blank" rel="noreferrer" href="https://argent-bank-website-eta.vercel.app/" > Visualisé  </a>
                   </div> 
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/Argent/Argent-Bank2.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}


      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/Kasa/kasa-project.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>KASA</h3>
                <span>React, Sass</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  J'ai rejoint l'équipe de Kasa en tant que développeu front-end freelance
                   pour participer à la refonte complète de leur site web. 
                   Kasa est une entreprise de location d'appartements entre particuliers, 
                   leader en France, qui a décidé de moderniser sa plateforme. 
                   Ma mission principale consistait à développer l'ensemble de l'application
                    front-end en utilisant React, en suivant les maquettes Figma et en
                     garantissant la qualité du code.
                  </p>
                  
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>OpenClassRooms</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>React, Sass</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2023</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <div className="link-projet">
                      <div className="link-projet">
                      <a className="" target="_blank" rel="noreferrer" href="https://github.com/remifufar/Kasa-Projet-8-final.git">  GitHub </a>
                      <a className=""target="_blank" rel="noreferrer" href="https://kasa-projet-8-final.vercel.app/" > Visualisé  </a>
                   </div> 
                      
                   </div> 
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/Kasa/Kasa2.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/Kasa/pageAbout-desktop.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/Kasa/pageLogement-desktop-01.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>


      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/sophie/accueil-01.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Sophie Bluel - Portfolio</h3>
                <span>HTML, CSS, JavaScript, API</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  Dans ce projet pour l'agence ArchiWebos, 
                  j'ai été chargé de réaliser un site web dynamique, 
                  de développer plusieurs fonctionnalités pour le portfolio d'une architecte d'intérieur.
                   Cela comprenait la création de la page de présentation des travaux de l'architecte,
                    la mise en place de la page de connexion de l'administrateur du site,
                     et le développement d'une modale permettant d'uploader de nouveaux médias. 
                     J'ai utilisé le code back-end fourni pour créer des requêtes vers l'API,
                   permettant ainsi de récupérer les données des projets.
                  </p>
                  
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>OpenClassRooms</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>HTML, CSS, JavaScript, API</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2023</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <div className="link-projet">
                      <a className="" target="_blank" rel="noreferrer" href="https://github.com/remifufar/Portefolio-projet-6-java.git">  GitHub </a>
                      <a className=""target="_blank" rel="noreferrer" href="https://portefolio-projet-6-java.vercel.app/" > Visualisé  </a>
                      
                   </div> 
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/sophie/accueil-01.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/sophie/login-page.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/sophie/Modal-Ajout.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>

      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSix}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/it/Printit-project.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Print-It</h3>
                <span>JavaScript</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  Dans ce projet de développement front-end, 
                  j'ai été chargé de créer un carrousel interactif en JavaScript
                   pour le site web de l'imprimerie Print It.
                    Mon objectif était de permettre aux visiteurs de naviguer à travers les images 
                    en mettant en place des flèches pour la navigation,
                     des points indicateurs pour suivre la position actuelle,
                   et en garantissant une navigation fluide avec un défilement en boucle.
                  </p>
                  
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>OpenClassRooms</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>JavaScript</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2023</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <div className="link-projet">
                      <a className="" target="_blank" rel="noreferrer" href="https://github.com/remifufar/print-it.git">  GitHub </a>
                      <a className=""target="_blank" rel="noreferrer" href="https://print-it-iota.vercel.app/" > Visualisé  </a>
                      
                   </div> 
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/it/Print-It.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/it/Print-It2.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>

      <Modal
        isOpen={isOpen7}
        onRequestClose={toggleModalSeven}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSeven}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/ohmy/ohmyfood-project.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Oh My Food</h3>
                <span>Html Css</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  En tant que développeur junior chez OhMyFood, 
                  j'ai contribué au développement d'un site mobile first permettant aux clients 
                  de découvrir les menus de restaurants gastronomiques à Paris, 
                  avec la possibilité de composer leur repas à l'avance.
                   Ce projet a aidé OhMyFood à s'imposer sur le marché de la restauration parisienne,
                    en mettant l'accent sur des animations soignées pour améliorer l'expérience utilisateur.
                  </p>
                  
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>OpenClassRooms</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Html Css</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2023</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <div className="link-projet">
                      <a className="" target="_blank" rel="noreferrer" href="https://github.com/remifufar/OhmyFood.git">  GitHub </a>
                      <a className=""target="_blank" rel="noreferrer" href="https://ohmy-food.vercel.app/" > Visualisé  </a>
                      
                   </div> 
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/ohmy/Accueil-01.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/ohmy/Menu-01.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>

      <Modal
        isOpen={isOpen8}
        onRequestClose={toggleModalHeigt}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalHeigt}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/ohmy/ohmyfood-project.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>724 Events</h3>
                <span>Html Css</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  En tant que développeur front-end freelance, 
                  ma mission consistait à résoudre les problèmes et à tester le
                   site web de l'agence événementielle 724events. Le site, 
                   partiellement intégré par un précédent développeur, présentait 
                   des bugs qui entraînaient l'expérience des visiteurs. 
                   J'ai utilisé des outils de développement, notamment React
                    Developer Tools, pour inspecter le comportement du site. 
                    J'ai identifié et corrigé les problèmes, en me basant
                   sur les indications de l'ancien développeur et en complétant le cahier de recette.
                  </p>
                  
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>OpenClassRooms</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>HTML, réact, debugage, seo</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2023</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <div className="link-projet">
                      <a className="" target="_blank" rel="noreferrer" href="https://github.com/remifufar/Projet-10-Debuggez-une-application-React.git">  GitHub </a>
                      <a className=""target="_blank" rel="noreferrer" href="https://projet-10-debuggez-une-application-react.vercel.app/" > Visualisé  </a>
                      
                   </div> 
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/77/screenShot724Event.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/77/724-Events2.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>

    </>
  );
};

export default Portfolio;
