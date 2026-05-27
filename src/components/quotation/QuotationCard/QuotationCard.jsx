import "./quotationCard.sass";

const QuotationCard = ({ quotation, onSelect }) => {
  const { title, text, image } = quotation;
  return (
    <div className="quotation-card">
      <input
        className="quotation-card__radio"
        type="radio"
        name="quotation-radios"
        id={title}
        onChange={onSelect}
      />
      <label className="quotation-card__content" htmlFor={title}>
        <div className="quotation-card__check"></div>
        <div className="quotation-card__icon-title">
          <figure className="quotation-card__icon">
            <img src={image} alt={title} className="quotation-card__icon-img" />
          </figure>
          <div className="quotation-card__title">
            <h3 className="quotation-card__title-text">{title}</h3>
          </div>
        </div>
        <div className="quotation-card__text">{text}</div>
      </label>
    </div>
  );
};

export default QuotationCard;
