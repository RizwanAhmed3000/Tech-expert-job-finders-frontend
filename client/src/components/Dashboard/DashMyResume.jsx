import React, { useState } from "react";
import EnterModal from "./EnterModal";

const DashMyResume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>My Resume Page</h1>
      <button onClick={() => setIsModalOpen(true)}>Modal Open</button>
      <EnterModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default DashMyResume;
