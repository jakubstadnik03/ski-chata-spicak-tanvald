import React from "react";
import { useTranslation } from "react-i18next";

const PopisUbytovani = () => {
  const { t } = useTranslation();

  return (
    <section className="max-width max-width-m popis-ubytovani">
      <h2
        className="max-width title-black title mb-lg-5 mb-sm-2"
        id="ubytovani"
      >
        {t("description.title")}
      </h2>
      <div className="text-wrapper">
        <p>{t("description.paragraph1")}</p>
        <p>{t("description.paragraph2")}</p>
        <p>{t("description.paragraph3")}</p>
        <p>{t("description.paragraph4")}</p>
        <p>{t("description.paragraph5")}</p>
        <p>{t("description.paragraph6")}</p>
        <p className="uppercase">{t("description.closing")}</p>
      </div>
    </section>
  );
};

export default PopisUbytovani;
