import React, { useEffect, useState } from "react";
import house1 from "../assets/house1.jpg";

import CardWithModal from "./CardModal";

const Rentals = ({ data }) => {
  return (
    <div className="py-3 sm:py-5 ">
      <p className="text-[25px] font-semibold text-gray-600 bottom-4 ">
        Maison de jeune
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 flex ">
        {data
          .filter((rental) => rental.type === "maison")
          .map((rental) => (
            <>
              <CardWithModal
                title={rental.nom}
                capacite={rental.capacite}
                disponibilite={rental.disponibilite}
                telephone={rental.telephone}
                image={house1}
              />
            </>
          ))}
      </div>
    </div>
  );
};

export default Rentals;
