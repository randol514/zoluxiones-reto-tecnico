//Hooks
import { useState } from "react";

import Back from "@/components/ui/Back/Back";
import Menu from "@/components/layout//Menu/Menu";

import "./plans.sass";

import { getAgeFromBirthday } from "@/utils/date";
import Loading from "@/components/ui/Loading/Loading";
import { useUsers } from "@/hooks/useUser";
import QuotationList from "@/components/quotation/QuotationList/QuotationList";
import PlanList from "../../components/plan/PlanList/PlanList";

const Plans = () => {
  const [quotationSelected, setQuotationSelected] = useState(null);

  const { data, isLoading, error } = useUsers();

  const userAge = getAgeFromBirthday(data?.birthDay || "");

  return (
    <div className="plans-page">
      <div className="plans-page__container site-container">
        <Menu />
        <div className="plans-page__content">
          <div className="plans-page__back">
            <Back to={"/"} label={"Volver"} />
          </div>
          <div className="plans-page__top">
            <div className="plans-page__user">
              <div className="plans-page__user-title">
                <h1 className="plans-page__user-title-text">
                  {data?.name} ¿Para quién deseas cotizar?
                </h1>
              </div>
              <div className="plans-page__user-text">
                Selecciona la opción que se ajuste más a tus necesidades.
              </div>
            </div>
            <div className="plans-page__quotations">
              <QuotationList setQuotationSelected={setQuotationSelected} />
            </div>
          </div>
          {quotationSelected && (
            <div className="plans-page__bottom">
              <PlanList
                userAge={userAge}
                quotationSelected={quotationSelected}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plans;
