import React, { useState } from "react";
import uuid from 'react-uuid'
function Ekle_Modal({ urun, setUrun }) {
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productStock, setProductStock] = useState();
  const handleChange = (event) => {
    if (event.target.name === "urunAd") {
      setProductName(event.target.value);
    } else if (event.target.name === "urunFiyat") {
      setProductPrice(event.target.value);
    } else if (event.target.name === "urunStok") {
      setProductStock(event.target.value);
    }
  };
  const handleSave = () => {
    const deger = [
      ...urun,
      {id:uuid(), urunAd: productName, urunFiyat: productPrice, urunStok: productStock },
    ];

    setUrun(deger);
    localStorage.setItem("urunler",JSON.stringify(deger));// Local Veritabanına kaydettik
    setProductName("");
    setProductPrice("");
    setProductStock("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-transparent outline-none border-2
      w-96 mx-auto block flex justify-center items-center
      border-blue-500 rounded text-blue-500 font-medium active:scale-95
      hover:bg-blue-500 hover:text-white hover:border-transparent
      focus:bg-blue-500 focus:text-white focus:border-transparent
      focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400/80
      disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
      >
        <i className="fa-solid fa-circle-plus mr-2 text-2xl"></i> Ürün EKLE
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start bg-blue-200 justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center text-blue-900">
                    Ürün Ekleme
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-blue-900  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <table className="w-full flex flex-row text-center flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                    <tr className="bg-blue-500 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 text-center">
                      <th className="p-3">Ürün Adı</th>
                      <th className="p-3">Fiyat</th>
                      <th className="p-3">Stok</th>
                    </tr>
                    <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td className="border-blue-200 border p-3">
                        <input
                            placeholder="Ürünü Giriniz"
                          name="urunAd"
                          type="text"
                          className="text-center w-full px-5 py-0 sm:py-1 sm:py-2.5 focus:outline-1 focus:outline-blue-300 "
                          onChange={handleChange}
                          value={productName}
                        />
                      </td>
                      <td className="border-blue-200 border  p-3 truncate">
                        <input
                            placeholder="Ürün Fiyatını Giriniz"
                          name="urunFiyat"
                          type="text"
                          className="text-center w-full px-5 py-0 sm:py-1 sm:py-2.5 focus:outline-1 focus:outline-blue-300 "
                          value={productPrice}
                          onChange={handleChange}
                        />
                      </td>
                      <td className="border-blue-200 border  p-3 truncate">
                        <input
                            placeholder="Ürün Stoğunu Giriniz"
                          name="urunStok"
                          type="text"
                          value={productStock}
                          onChange={handleChange}
                          className="text-center w-full px-5 py-0 sm:py-1 sm:py-2.5 focus:outline-1 focus:outline-blue-300 "
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-blue-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Kapat
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {handleSave();setShowModal(false)}}
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Ekle_Modal;
