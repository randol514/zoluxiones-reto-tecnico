import { useEffect } from "react";
import useForm from "@/hooks/useForm";

import { documentOptions } from "@/constants/options";

import FormField from "@/components/ui/formField/FormField";
import Button from "@/components/ui/button/Button";

import { formHomeValidation } from "@/lib/validations/forms/formHomeValidation";

import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "@/features/form/formSlice";

import { useStorage } from "@/hooks/useStorage";

import { useNavigate, Link } from "react-router-dom";

const FormHome = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { setItem } = useStorage("formData");

  const onSubmit = async (form) => {
    dispatch(setFormData(form));
    setItem(form);
    navigate("/planes");
  };

  const formFromStore = useSelector((state) => state.form);
  const initialValues = {
    typeDocument: "",
    document: "",
    telephone: "",
    politiesPrivacy: false,
    politiesCommunications: false,
    ...formFromStore,
  };

  const { form, errors, loading, handleChange, handleBlur, handleSubmit } =
    useForm(initialValues, formHomeValidation, onSubmit);

  useEffect(() => {
    dispatch(setFormData(form));
  }, [form, dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit} className="site-form">
        <div className="site-form__rows">
          <div className="site-form__row-wrapper">
            <label className="site-form__row-label" htmlFor="typeDocument">
              Documento
            </label>
            <div className="site-form__row--two-inline">
              <FormField
                type="select"
                id="typeDocument"
                name="typeDocument"
                value={form.typeDocument}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.typeDocument}
                className="left-inline"
                options={documentOptions}
              />
              <FormField
                type="text"
                id="document"
                name="document"
                value={form.document}
                onChange={handleChange}
                placeholder="N° Documento"
                onBlur={handleBlur}
                error={errors.document}
                className="right-inline"
              />
            </div>
          </div>

          <div className="site-form__row-wrapper">
            <label className="site-form__row-label" htmlFor="telephone">
              Celular
            </label>
            <div className="site-form__row site-form__row--one">
              <FormField
                type="text"
                id="telephone"
                name="telephone"
                value={form.telephone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.telephone}
              />
            </div>
          </div>
        </div>
        <div className="site-form__checkboxs">
          <div className="site-form__checkbox">
            <FormField
              type="checkbox"
              id="politiesPrivacy"
              name="politiesPrivacy"
              placeholder="Acepto lo Política de Privacidad"
              checked={form.politiesPrivacy}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.politiesPrivacy}
            />
          </div>
          <div className="site-form__checkbox">
            <FormField
              type="checkbox"
              id="politiesCommunications"
              name="politiesCommunications"
              placeholder="Acepto la Política Comunicaciones Comerciales"
              checked={form.politiesCommunications}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.politiesCommunications}
            />
          </div>
        </div>
        <Link className="site-form__terms" to="/terminos">
          Aplican Términos y Condiciones.
        </Link>
        <div className="site-form__button">
          <Button
            tag="button"
            variant="primary"
            type="submit"
            disabled={loading}
            status={loading}
          >
            {loading ? "Cotizando..." : "Cotiza aquí"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormHome;
