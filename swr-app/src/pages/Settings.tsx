import { useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import Base from "../layout/Base";

export default function Settings() {
  const {cache, ...others} = useSWRConfig();
  const [config, setConfig]= useState([]);
  
  useEffect(() => {
    setupConfigVals(others as any);
  }, [others]);

  const setupConfigVals = (configObj: any) => {
    console.log({ cache });
    const items: any  = [];
    Object.keys(configObj).forEach(key => {
      const type = typeof configObj[key];
      if (type != 'object' && type != 'function') {
        items.push([key, configObj[key]])
      } else {
        items.push([key, type]);
      }
    });
    setConfig(items);
  }

  return (
    <Base>
      <div className="row">
        <div className="col-sm-12">
          <h3>SWR Global Config</h3>
        </div>
        <div className="col-sm-12">
          {
            config.map((item: string[]) => 
              Array.isArray(item) && (item?.length > 1) &&
              <pre>{item[0]}: {item[1]}</pre>
            )
          }
        </div>
      </div>
    </Base>
  )
}