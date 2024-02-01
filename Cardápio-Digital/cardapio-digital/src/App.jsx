import { useState } from "react";
import imagemRestaurante from "./assets/restaurante.webp"; // Aqui estou importando um imagem que esta em outra pasta
import './App.css'; //Aqui estou importando css
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais,sobremesas,bebidas } from "./cardapio";


export function App(){  
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada , atualizarMenu] = useState(0);
  
  return <>
           <img src={imagemRestaurante} alt="" className="capa"/>
           <Navegacao atualizarMenu={atualizarMenu}/>
           <div className="menu">
               {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
           </div>
         </>
}

//  return <>
/*          <h1>Titulo teste</h1> 
             <h1>Titulo teste</h1>
          </>
Isso serve para manda varios elementos html sem ter que coloca-los dentro de um elemento pai como uma div, porque isso pode 
mais tarde influenciar na pagina então mandar um tag vazia funciona para poder mandar varios elementos html sem ter que 
criar um elemento pai real a tag vazia é ignorada pelo react mais é valido

*/