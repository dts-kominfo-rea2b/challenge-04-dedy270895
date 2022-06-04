// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (data,posisi)=>{
  let hasil = [];
  if(posisi == null){
    for (let i = 0; i < data.length; i++) {
      const element = Math.floor(new Date(data[i]).getTime()/1000.0);
      hasil.push(element.toString());
    }
    hasil.sort(function(a, b){return a - b});
    let hasilx = hasil.join("-");
    return hasilx;

  }else{
    hasil = Math.floor(new Date(data[posisi]).getTime()/1000.0);
    return hasil.toString();

  }

};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
  
})();

module.exports = {
  dates,
  createDate,
};
