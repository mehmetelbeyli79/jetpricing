import React, { useEffect, useState, useRef } from "react";
import Ekle_Modal from "./Ekle_Modal";
import Guncelle_Modal from "./Guncelle_Modal";

function Contents({ urun, setUrun, active }) {
  const handleDelete = (id) => {
    const deleteItem = urun.filter((el) => {
      return el.id !== id;
    });
    setUrun(deleteItem);
    localStorage.setItem("urunler", JSON.stringify(deleteItem)); // Local Veritabanına kaydettik
  };

  return (
    <div className="p-3">
      <Ekle_Modal urun={urun} setUrun={setUrun} />
      <table className="w-full flex flex-row text-center flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
        <thead className="text-white">
          {urun.map((item, index) => {
            return (
              <tr
                key={index}
                className="bg-blue-500 flex flex-col bg- flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 text-center"
              >
                  <th className="p-3">#</th>
                <th className="p-3">Ürün Adı</th>
                <th className="p-3">Fiyat</th>
                <th className="p-3">Stok</th>
                <th className="p-3" width="110px">
                  İşlemler
                </th>
              </tr>
            );
          })}
        </thead>
        <tbody className="flex-1 sm:flex-none">
          {urun.map((item, index) => {
            return (
              <tr
                key={item.id}
                className={
                  item.urunStok < 5
                    ? "bg-red-500 flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                    : "flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                }
              >
                  <td className="border-blue-200 border p-3">
                      {index+1}
                  </td>
                <td className="border-blue-200 border p-3">
                  <input
                    id={item.id}
                    name="urunAd"
                    type="text"
                    className="input"
                    value={item.urunAd}
                  />
                </td>
                <td className="border-blue-200 border  p-3 truncate">
                  <input
                    name="urunFiyat"
                    type="text"
                    className="input"
                    value={item.urunFiyat}
                  />
                </td>
                <td className="border-blue-200 border  p-3 truncate">
                  <input
                    name="urunStok"
                    type="text"
                    className="input"
                    onChange={() => {}}
                    value={item.urunStok}
                  />
                </td>
                <td className="border-blue-200 border  p-1.5 sm:p-1 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  <Guncelle_Modal
                    item={item}
                    urun={urun}
                    setUrun={setUrun}
                    index={index}
                    active={active}
                  />
                  <button
                    disabled={active}
                    className={
                      active === false ? "sil-button" : "sil-button-pasif"
                    }
                    type="button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Contents;
