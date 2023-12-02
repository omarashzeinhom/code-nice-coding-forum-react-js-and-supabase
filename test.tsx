import React from "react";
import { useEffect, useState } from "react";

type PropsType = {
  options?: any[];
};

export const DropDown = (props: PropsType) => {
  const { options = [] } = props;

  const [query, setQuery] = useState("");

  const [filteredOptions, setFilteredOptions] = useState(["", ""]);

  useEffect(() => {
    setFilteredOptions(() => ["a", "b"]);
  }, []);

  return <div>DropDown</div>;
};

export default DropDown;
