import "./style.css";

function Footer() {
  return (
    <div className="Footer_Conteiner">
  
      <p>Projeto criado por Dener Batista</p>
      
      <div>
        <a
          href="https://www.linkedin.com/in/dener-gomes-batista-83894168/"
          target="blank"
        >
          <img
            src="https://cdn.discordapp.com/attachments/947324026236330018/965320136024289341/linkin-but.png"
            alt="linkedin"
          />
        </a>

        <a href="https://github.com/denerbatista" target="blank">
          <img
            src="https://cdn.discordapp.com/attachments/947324026236330018/985977059618721822/github-png-icon-free-download-813498.png"
            alt="gitHub"
          />
        </a>

        <a href="https://contate.me/DenerBatista" target="blank">
          <img
            src="https://cdn.discordapp.com/attachments/950935885619265567/985980392404316210/pngwing.com.png"
            alt="whatsApp"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
