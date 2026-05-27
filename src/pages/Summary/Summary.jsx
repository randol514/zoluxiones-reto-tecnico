import Menu from "@/components/layout//Menu/Menu";
import Back from "@/components/ui/Back/Back";
import Loading from "@/components/ui/Loading/Loading";

import "./summary.sass";

import { useUsers } from "@/hooks/useUser";

import { useSelector } from "react-redux";

const Summary = () => {
  const formData = useSelector((state) => state.form);
  const selectPlan = useSelector((state) => state.plan);

  const { data, isloading, error } = useUsers();
  if (isloading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  const fullName = `${data?.name} ${data?.lastName}`;
  const price = parseFloat(selectPlan?.price);
  const formattedPrice = isNaN(price)
    ? "Precio no disponible"
    : `$${price.toFixed(2)}`;

  return (
    <div className="summary-page">
      <div className="summary-page__container site-container">
        <Menu />
        <div className="summary-page__content">
          <Back to={"/planes"} label={"Volver"} />
          <div className="summary-page__title">
            <h1 className="summary-page__title-text">Resumen del seguro</h1>
          </div>
          <article className="summary-page__card">
            <div className="summary-page__card-top">
              <div className="summary-page__card-title">
                <h2 className="summary-page__card-title-text">
                  Precios calculados para:
                </h2>
              </div>
              <div className="summary-page__card-user">{fullName}</div>
            </div>
            <div className="summary-page__card-bottom">
              <div className="summary-page__card-item">
                <div className="summary-page__card-subtitle">
                  <h3 className="summary-page__card-subtitle-text">
                    Responsable de pago
                  </h3>
                </div>
                <div className="summary-page__card-item-details">
                  <div className="summary-page__card-item-text">
                    {formData.typeDocument}: {formData.document}
                  </div>
                  <div className="summary-page__card-item-text">
                    Celular: {formData.telephone}
                  </div>
                </div>
              </div>
              <div className="summary-page__card-plan">
                <div className="summary-page__card-subtitle">
                  <h3 className="summary-page__card-subtitle-text">
                    Plan elegido
                  </h3>
                </div>
                <div className="summary-page__card-item-details">
                  <div className="summary-page__card-item-text">
                    {selectPlan?.name || "No se escogió ningun plan"}
                  </div>
                  <div className="summary-page__card-item-text">
                    Costo del Plan: {formattedPrice} al mes
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Summary;
