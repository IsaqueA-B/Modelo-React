import React from "react";

/* ícones */
import iconMissao from "../assets/images/Icons/Sobre/missões.png";
import iconValores from "../assets/images/Icons/Sobre/valores.png";
import iconVisão from "../assets/images/Icons/Sobre/visão.png";

/* pessoas (placeholders) */
import daniel from "../assets/images/pessoas/Daniel.jpeg";
import isaque from "../assets/images/pessoas/Isaque.jpeg";
import cassio from "../assets/images/pessoas/Cássio.jpeg";
import guilherme from "../assets/images/pessoas/Guilherme.png";
import emanuel from "../assets/images/pessoas/Emanuel.png";
import leonardo from "../assets/images/pessoas/Leonardo.jpeg";

import '../styles/Pages/sobreR.css';

function Sobre() {
  return (
    <main className="sobre-page p-20 animacao-entrada">
      <section className="page-hero text-center">
        <div className="page-hero-container">
          <div className="page-hero-content">
            <h1 className="page-title title-desktop">Sobre o Studio Modelo</h1>
            <h1 className="page-title title-mobile">Sobre Nós</h1>
            <p className="page-subtitle subtitle-desktop">Identidade Visual • Criação de marcas • Redes Sociais</p>
            <p className="page-subtitle subtitle-mobile">Identidade Visual • Criação de marcas</p>
          </div>
          <div className="slogan-box">
            <span className="slogan fonte-titulo">
              "Sua marca, nossa essência"
            </span>
          </div>
        </div>
      </section>

      <section className="sobre-secao">
        <div className="sobre-conteudo-flex">
          <div className="sobre-texto-bloco">
            <h2>Histórico da Empresa</h2>
            <p> Somos um estúdio criativo especializado no desenvolvimento de identidade de marca, design gráfico e soluções digitais. Transformamos ideias em projetos estratégicos que fortalecem a comunicação de empresas no mercado. </p>
            <p className="sobre-destaque-texto"> Nossa abordagem integra criatividade, planejamento e inovação, gerando valor e experiências relevantes. </p>
          </div>
          <div className="sobre-imagem-bloco">
            <div className="moldura-logo-elo">
              <img src="web3.png" alt="Arte conceitual" className="sobre-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de propósito */}
      <section className="sobre-secao">
        <div className="sobre-alinhamento">
          <h2 className="h2-central titulo-secao-central sem-linha">Propósito</h2>
          <div className="grid-3x3">
            <div className="card card-lg text-center">
              <div className="icon-card"><img src={iconMissao} alt="Missão" /></div>
              <h3 className="card-titulo">Missão</h3>
              <p>Transformar ideias em marcas autênticas e estratégicas.</p>
            </div>
            <div className="card card-lg text-center">
              <div className="icon-card"><img src={iconVisão} alt="Visão" /></div>
              <h3 className="card-titulo">Visão</h3>
              <p>Ser referência em branding e design digital.</p>
            </div>
            <div className="card card-lg card-valores">
              <div className="icon-card"><img src={iconValores} alt="Valores" /></div>
              <h3 className="card-titulo">Valores</h3>
              <div className="lista-valores">
                <p><strong>Criatividade</strong> – soluções únicas e modernas.</p>
                <p><strong>Compromisso</strong> – qualidade e responsabilidade.</p>
                <p><strong>Inovação</strong> – novas ideias e tendências.</p>
                <p><strong>Profissionalismo</strong> – estratégia e atenção aos detalhes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="sobre-secao">
        <div className="sobre-alinhamento">
          <h2 className="h2-central titulo-secao-central sem-linha">Por que nos escolher?</h2>
          <div className="grid-3x3">
            <div className="card SF grid-border-right">
              <h3 className="card-titulo">Atendimento Próximo</h3>
              <p>Comunicação clara e suporte humanizado.</p>
            </div>
            <div className="card SF grid-border-right">
              <h3 className="card-titulo">Projetos Sob Medida</h3>
              <p>Soluções exclusivas para cada cliente.</p>
            </div>
            <div className="card SF">
              <h3 className="card-titulo">Resultados Reais</h3>
              <p>Estratégias que geram destaque para seu negócio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="sobre-secao">
        <div className="sobre-alinhamento">
          <h2 className="h2-central titulo-secao-central sem-linha">Nossa Equipe</h2>
          <div className="grid-auto">
            <div className="card card-equipe text-center">
              <div className="foto-wrapper"><img src={isaque} alt="Isaque" /></div>
              <h3 className="card-titulo">Isaque Bastos</h3>
              <span className="cargo">Líder / Organizador</span>
              <p>Organização e integração da equipe.</p>
            </div>
            <div className="card card-equipe text-center">
              <div className="foto-wrapper"><img src={emanuel} alt="Emanuel" /></div>
              <h3 className="card-titulo">Emanuel Hubner</h3>
              <span className="cargo">Banco de Dados</span>
              <p>Modelagem e implementação de dados.</p>
            </div>
            <div className="card card-equipe text-center">
              <div className="foto-wrapper"><img src={cassio} alt="Cássio" /></div>
              <h3 className="card-titulo">Cássio Schultz</h3>
              <span className="cargo">Desenvolvedor Front-end</span>
              <p>Desenvolvimento de interfaces.</p>
            </div>
            <div className="card card-equipe text-center">
              <div className="foto-wrapper"><img src={leonardo} alt="Leonardo" /></div>
              <h3 className="card-titulo">Leonardo Hemmilla</h3>
              <span className="cargo">Desenvolvedor Front-end</span>
              <p>Portfólio e cases de sucesso.</p>
            </div>
            <div className="card card-equipe text-center">
              <div className="foto-wrapper"><img src={guilherme} alt="Guilherme" /></div>
              <h3 className="card-titulo">Guilherme Thomas</h3>
              <span className="cargo">Desenvolvedor Front-end</span>
              <p>Blog e formulários.</p>
            </div>
            <div className="card card-equipe text-center">
              <div className="foto-wrapper"><img src={daniel} alt="Daniel" /></div>
              <h3 className="card-titulo">Daniel Buchholz</h3>
              <span className="cargo">Chefe</span>
              <p>Coordenador do projeto.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sobre;