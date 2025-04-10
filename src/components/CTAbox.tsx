import {  useRef } from "react";

const CTABox = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = (action: string) => {
    audioRef.current?.play();
    if (action === "contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else if (action === "cv") {
      window.open("/assets/curriculo.pdf", "_blank");
    }
  };

  return (
    <div className="rpgui-container framed-golden  flex flex-col md:flex-row justify-between items-center w-full p-6 mx-auto text-center md:text-start">
      <div>
        <p className="!text-xl !mb-2">   Curtiu esse portfólio?</p>
      <p className="text-sm text-white mb-6 ">
{/*         🗡️ <span className="text-yellow-300 italic">"Você viu o que eu posso fazer."</span><br /> */}
     
        Então <span className="text-green-400">entre em contato</span> e agende uma quest comigo!<br />
        Ou leve meu <span className="text-blue-300">pergaminho de habilidades (vulgo "currículo")</span>.
      </p>
      </div>

      <div className="flex flex-col 
       justify-center items-center min-w-[300px]">
        <button
          className="rpgui-button w-full"
          onClick={() => handleClick("contact")}
        >
      <span>📩 Entrar em contato</span>    
        </button>
        <button
          className="rpgui-button w-full"
          onClick={() => handleClick("cv")}
        >
          <span>📜 Baixar CV</span>
        </button>
      </div>
    </div>
  );
};

export default CTABox;
