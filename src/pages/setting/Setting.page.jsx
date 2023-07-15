import React from "react";
import TempUnitToggle from "./TempUnitToggle";
import PageContentTemplate from "../../components/PageContentTemplate";
import { PageTemplate } from "../../components/PageTemplate";

const Setting = () => {
  return (
    <PageTemplate>
      <PageContentTemplate title={"Settings"}>
        <TempUnitToggle />
      </PageContentTemplate>
    </PageTemplate>
  );
};

export default React.memo(Setting);
