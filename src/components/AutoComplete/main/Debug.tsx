import React from "react";
import { useAutoComplete } from "./AutoCompleteContext";

type DebugProps = {};

const Debug: React.FC<DebugProps> = () => {
  const props = useAutoComplete();

  console.log('props', props)

  return (
    <>
      <div style={{ marginTop: "10em" }}>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </>
  );
};

export { Debug };
