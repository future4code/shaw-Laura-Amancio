import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import foto from './img/aman.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/D4D03AQFO0FQ5nR72Ug/profile-displayphoto-shrink_400_400/0/1644776020442?e=1653523200&v=beta&t=yKywt8kjJprvKhb_2xY7DgdEYYg2ib7bNQUP_dtTUA8"
          nome="Laura Amancio"
          descricao="Oi, eu sou a Laura. Sou estudante da Labenu. Nunca pensei que ia estudar programação nem nada relacionado com Tecnologia, mas cá estou eu me divertindo com React (por enquanto)."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/32/32450.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="http://cdn.onlinewebfonts.com/svg/img_237869.png"
          valor="Email:"
          endereco="lauran.amancio@gmail.com"
        />

        <CardPequeno
          imagem="https://i.pinimg.com/736x/f0/c7/b9/f0c7b9489446715cae72085a470f0ed9.jpg"
          valor="Endereço:"
          endereco="Rua dos Alfeneiros, 4"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={foto}
          nome="AMAN Industrial"
          descricao="Gerente Financeira e Administrativa."
        />

        <CardGrande
          imagem="https://scontent.fvcp2-1.fna.fbcdn.net/v/t1.6435-9/45877050_2000937056620696_4395081785373884416_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHyPpEbAYidSQYYT9gfyygIad8b1n4sV2Bp3xvWfixXYOe-LMiGV-cO-xITXbnjhJ-0YcuvV2VsdZoYf_uJDMY1&_nc_ohc=MQnthr4cQSYAX-o7eQs&_nc_ht=scontent.fvcp2-1.fna&oh=00_AT8qlcya3EkPKQQXmB2l3_ifx8Ggzwva1KBEIi33j8DPlg&oe=625FE469"
          nome="Cursinho Popular S.E.U."
          descricao="Coordenadora Administrativa e Pedagógica"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
