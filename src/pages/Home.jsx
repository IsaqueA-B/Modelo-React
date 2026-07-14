import React from 'react';
import { Link } from 'react-router-dom';
import WordMark from '../assets/images/Especificos/WordMark.png';

import iconSlogan from "../assets/images/Especificos/Icon_Slogan.png";
import iconSloganQuadrado from "../assets/images/Especificos/Icon_Slogan_Quadrado.png";

import iconInstitucionais from "../assets/images/Icons/Home/Institucionais.png";
import iconPersonalizacao from "../assets/images/Icons/Home/Personalizacao.png";
import iconSocial from "../assets/images/Icons/Home/Social.png";
import iconVisual from "../assets/images/Icons/Home/Visual.png";

import iconContato from "../assets/images/Icons/Home/icon-contato2.png";

import '../styles/Pages/homeR.css';

function Home() {
    return (
        <div className="home-page">
            <div style={{ marginTop: '80px' }}>
                <img src={WordMark} alt="WordMark" className="home-wordmark" />
            </div>

            <main className="p-20 animacao-entrada">
                {/* SEÇÃO 1: QUEM SOMOS */}
                <section className="section section--flex home-secao1">
                    <div className="home-lado home-esquerda">
                        <span className="tag">Como agimos?</span>
                        <h2>Usamos a Criatividade</h2>
                        <p>
                            Acreditamos que a criatividade é o ponto de partida para construir marcas que realmente conectam.
                            Transformamos ideias em identidades autênticas, combinando estratégia, estética e propósito.
                        </p>
                        <Link to="/sobre" className="btn btn-outline">Saiba mais</Link>
                    </div>
                    <div className="home-lado home-direita">
                        <img src={iconSlogan} alt="Ícone Slogan" className="home-icone-slogan home-icone-slogan-desktop" />
                        <img src={iconSloganQuadrado} alt="Ícone Slogan" className="home-icone-slogan home-icone-slogan-mobile" />
                    </div>
                </section>

                {/* SEÇÃO 2: SERVIÇOS (exemplo estático) */}
                <section className="section section--flex home-secao2">
                    <div className="section-center">
                        <span className="tag">Alguns serviços</span>
                        <h2 className="h2-central sem-linha">O que fazemos</h2>
                        <div className="grid-4x4">
                            <div className="card">
                                <div className="icon-box icon-box--service">
                                    <img src={iconVisual} alt="Ícone" />
                                </div>
                                <h3 className="card-title">Identidade Visual</h3>
                                <p>Criação de logotipos, paletas e tipografias que representam sua marca.</p>
                            </div>
                            <div className="card">
                                <div className="icon-box icon-box--service">
                                    <img src={iconSocial} alt="Ícone" />
                                </div>
                                <h3 className="card-title">Social Media</h3>
                                <p>Conteúdo visual para redes sociais que engaja seu público.</p>
                            </div>
                            <div className="card">
                                <div className="icon-box icon-box--service">
                                    <img src={iconPersonalizacao} alt="Ícone" />
                                </div>
                                <h3 className="card-title">Personalização</h3>
                                <p>Ajustes de design para refletir o estilo do seu negócio.</p>
                            </div>
                            <div className="card">
                                <div className="icon-box icon-box--service">
                                    <img src={iconInstitucionais} alt="Ícone" />
                                </div>
                                <h3 className="card-title">Sites Institucionais</h3>
                                <p>Sites modernos, responsivos e otimizados para sua empresa.</p>
                            </div>
                        </div>
                        {/* Sem link para serviços – removido */}
                    </div>
                </section>

                {/* CTA Final */}
                <section className="home-cta">
                    <div className="card card-lg card-cta">
                        <div className="home-cta-icon">
                            <img src={iconContato} alt="Ícone Contato" />
                        </div>
                        <h2 className="home-cta-titulo sem-linha">
                            Quer saber mais ou agendar um projeto?
                        </h2>
                        <p className="home-cta-texto">
                            Entre em contato conosco para começar a planejar um novo projeto!
                        </p>
                        <Link to="/contato" className="btn btn-outline">
                            Entre em Contato
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;