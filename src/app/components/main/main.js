import style from '../main/main.css'
import Image from "next/image";
import Bolsa from '/public/bolsa.jpeg'

export default function Main(){
    return(
        <main className="grid-container">
        <div className="grid-item1">
            <h1 className='titulo'>Procurando algumas alternativas sustentáveis perfeitas, econômicas e confortáveis? <br/> Você achou!</h1>

            <p> Escolha sustentável, faça parte da mudança com nossas ecobags! </p>

            <p>Conheça nossas Ecobags</p>

            <button>Saiba Mais</button>
        </div>
        
        <div className="grid-item">
        <Image
               src={Bolsa}
               alt="logo"
               className="imagem-bolsa"
                />
        </div>
      </main>
    )
}