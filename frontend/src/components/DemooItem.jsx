import React, { memo } from "react";

const DemooItem = memo(({ service ,}) => {
  return <div onClick={handleSelected} className="">
    {service.name}
  </div>;
});

export default DemooItem;
