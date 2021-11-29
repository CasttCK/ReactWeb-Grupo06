import React from 'react';
import { BiTrash } from 'react-icons/bi';

import './Card.css';

function CardApresentacaoCarrinho({produto, onClickDelete}){
  return(
    <div className="carrinho-card">
      <img
        src={produto.fotoLink}
        alt={produto.descricao}
        className="carrinho-card__image"
      />
      <div className="carrinho-card__info">
        <h1 className="carrinho-card__title">{produto.nome}</h1>
        <h3 className="carrinho-card__descricao">{produto.descricao}</h3>
        <span className="carrinho-card__price">R$ {produto.valor},00</span>
        <button
          className="carrinho-card__delete-button"
          type="button"
          onClick={onClickDelete}
        >
          <BiTrash />
        </button>
      </div>
  </div>
  )
}

export default CardApresentacaoCarrinho;