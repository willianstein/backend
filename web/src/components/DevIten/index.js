import React from 'react';
import './styles.css';


function DevItem({ dev }){
    return(
        <li className="dev-item">
        <header>
          <img src={dev.avatar_url} alt={dev.nome}/>
             <div className="user-info">
               <strong>{dev.name}</strong>
               <span>{dev.techs.join(', ')}</span>
             </div>  
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil</a>
        <div>
          <footer>
          <button className="alt">Alterar</button><b></b>
          <button className="del">Excluir</button>
          </footer>
        </div>
      </li>
    );
}
export default DevItem;
