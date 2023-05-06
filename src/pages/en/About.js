import React, { useEffect, useState } from "react";
import { data } from "../../data/Data";
const About = () => {
  const [parent, setParent] = useState("");
  const [Data, setData] = useState([]);

  useEffect(() => {
    setData(data.categories);
    console.log(data.categories);
  }, []);

  return (
    <div>
      {/* parent */}
      <select value={parent} onChange={(e) => setParent(e.target.value)}>
        <option value="">Category</option>
        {Data.map((category) => (
          <option value={category.id}>{category.name}</option>
        ))}
      </select>
      {/* child */}
      <select>
        <option value="">Sub Category</option>
        {Data.find((x) => x.id === parent)?.child_categories?.map(
          (category) => (
            <option value={category.id}>{category.name}</option>
          )
        )}
      </select>
    </div>
  );
  return <div>About</div>;
};

export default About;
