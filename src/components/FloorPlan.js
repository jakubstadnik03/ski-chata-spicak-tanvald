import React from "react";
import { useTranslation } from "react-i18next"; // Make sure to install react-i18next and i18next

const FloorPlan = () => {
  const { t } = useTranslation();

  return (
    <div className="container mt-4 max-width max-width-m rozlozeni">
      <div className="max-width title-black title mb-4">
        <h2>{t("floorPlan.title")}</h2>
      </div>
      <div className="d-md-flex justify-content-center">
        <div className="m-5">
          <img
            src="/img/pudorys.png"
            alt={t("floorPlan.firstFloor")}
            className="img-fluid mb-2 w-100"
            style={{ border: "2px solid #009BDE" }}
          />
          <div className="text-center">
            <h4>{t("floorPlan.firstFloor")}</h4>
          </div>
        </div>
        <div className="m-5">
          <img
            src="/img/pudorys.png"
            alt={t("floorPlan.secondFloor")}
            className="img-fluid mb-2 w-100"
            style={{ border: "2px solid #009BDE" }}
          />
          <div className="text-center">
            <h4>{t("floorPlan.secondFloor")}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
