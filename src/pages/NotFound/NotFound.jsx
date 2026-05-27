import Button from "../../components/ui/button/Button";
import "./notfound.sass";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-page__container site-container">
        <div className="notfound-page__content">
          <h1 className="notfound-page__title">Not Found</h1>
          <Button variant="secondary">Volver al inicio</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
