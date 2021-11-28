import React from 'react';

import './Card.css';

function CardApresentacaoCarrinho({produto}){
  return(
    <div className="promotion-card">
      <img
        src={produto.fotoLink}
        alt={produto.descricao}
        className="promotion-card__image"
      />
    <div className="promotion-card__info">
      <h1 className="promotion-card__title">{produto.nome}</h1>
      <span className="promotion-card__price">R$ {produto.valor},00</span>
    </div>
  </div>
  )
}

export default CardApresentacaoCarrinho;

// const PromotionCard = ({produto}) => (
//   <div className="promotion-card">
//     <img
//       src={produto.fotoLink}
//       alt={produto.descricao}
//       className="promotion-card__image"
//     />
//     <div className="promotion-card__info">
//       <h1 className="promotion-card__title">{produto.nome}</h1>
//       <span className="promotion-card__price">{produto.valor}</span>
//       <footer className="promotion-card__footer">
//           <button
//           className="promotion-card__comments-count"
//           onClick=""
//         >
//         </button>
//         <UIButton
//           component="a"
//           href=""
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Ir Para o Site
//         </UIButton>
//         <UIButton
//           component={Link}
//           to={"/"}
//           className="promotion-card__edit-button"
//         >
//           Editar
//         </UIButton>
//       </footer>
//       <button
//         type="button"
//         className="promotion-card__delete-button"
//         onClick=""
//       >
      
//       </button>
//     </div>
//   </div>
// );

// export default PromotionCard;
