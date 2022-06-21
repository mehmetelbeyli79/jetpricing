import React from "react";

function Header({urun,setUrun,active,setActive}) {
  const handleChange=(event)=>{
      //console.log(event.target.value)
      if(event.target.value==='')
      {
        let deger=JSON.parse(localStorage.getItem("urunler"));
        setUrun(deger);
        setActive(false);
      }
      else{
        let filtre= urun.filter((item)=>{
          return item.urunAd.includes(event.target.value);
        });
        setUrun(filtre);
        setActive(true);
      }



  }
  return (
    <header className="text-gray-600 body-font shadow-md shadow-blue-300 mb-3 sm:mb-8">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex sm:w-1/3 title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
          <i className="fa-solid fa-key text-2xl text-blue-900"></i>
          <h2 className="ml-3 text-xl text-blue-900">ELBEYLİ ANAHTAR</h2>
        </a>
        <h2 className="mx-auto text-2xl text-center sm:w-1/3 text-blue-900">
          GÜNCEL FİYAT LİSTESİ
        </h2>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center sm:w-1/3  ">
          <div className="relative flex  flex-wrap items-stretch mb-2 w-96 mt-3">
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
              <i className="fa-solid fa-magnifying-glass "></i>
            </span>
            <input
                onChange={(event)=>{handleChange(event)}}
              type="text"
              placeholder="Ürün Adına Göre Ara..."
              className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pl-10"
            />
          </div>
        </nav>
      </div>

    </header>
  );
}

export default Header;
