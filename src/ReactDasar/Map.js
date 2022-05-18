import React from "react";

const makanans = [
  {
    nama: "Soto",
    harga: 15000,
  },
  {
    nama: "Bakso",
    harga: 10000,
  },
  {
    nama: "Somay",
    harga: 7000,
  },
  {
    nama: "bubur",
    harga: 19000,
  },
];
//reduce
const total_bayar =makanans.reduce((total_harga, makanan) =>total_harga+makanan.harga, 0);

const Map = () => {
  return (
    <div>
      <h2>MAP SEDERHANA</h2>
      <ul>
        {makanans.map((makanan, index) => (
          <li>
            {index + 1}. {makanan.nama} - Harga {makanan.harga}
          </li>
        ))}
      </ul>
      <h2>MAP Filter HArga lebih dari 11 Ribu </h2>
      <ul>
        {makanans
          .filter((makanan) => makanan.harga > 11000)
          .map((makanan, index) => (
            <li>
              {index + 1}. {makanan.nama} - Harga {makanan.harga}
            </li>
          ))}
      </ul>

      <h3>Total Harga : {total_bayar}</h3>
    </div>
  );
};

export default Map;
