import React from "react";
<<<<<<< HEAD
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
=======
import { useEffect, useState } from "react"

type PropsType = {
    options?: any[]
}

export const DropDown = (props: PropsType) => {

    const { options = [] } = props;

    const [query, setQuery] = useState('');

    const [filteredOptions, setFilteredOptions] = useState(['','']);


   useEffect(()=>{
    setFilteredOptions(()=>['a','b'])
   },[])

   return (
    <div>
        DropDown
    </div>
)

}

export default DropDown
>>>>>>> 5e8022ecffd97b234ba2cc086f618081b1d88594
