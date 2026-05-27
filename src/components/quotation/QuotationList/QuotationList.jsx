import QuotationCard from "@/components/quotation/QuotationCard/QuotationCard";

import { QUOTATIONS } from "@/constants/quotations";

import "./quotationList.sass";

const QuotationList = ({ setQuotationSelected }) => {
  return (
    <div className="quotation-list">
      {QUOTATIONS.map((quotation, index) => (
        <QuotationCard
          key={index}
          quotation={quotation}
          onSelect={() => setQuotationSelected(quotation.title)}
        />
      ))}
    </div>
  );
};

export default QuotationList;
