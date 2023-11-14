import React from "react";
import { useTranslation } from "react-i18next"; // Make sure to install react-i18next and i18next

const FloorPlan = () => {
  const { t } = useTranslation();

  return (
    <div className="container mt-lg-4 mt-2 max-width max-width-m rozlozeni">
      <div className="max-width title-black title mb-lg-4 mb-2">
        <h2>{t("floorPlan.title")}</h2>
      </div>
      <div className="d-md-flex justify-content-center">
        <div className="m-lg-4 m-3 mt-0">
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
        <div className="m-lg-4 m-3">
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
