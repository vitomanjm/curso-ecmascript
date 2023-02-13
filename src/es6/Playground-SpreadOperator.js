function solution(json1, json2) {
    // Tu código let aquí 👈
   
     let suma = { ...json1, ...json2 }
     console.log(suma);
   
   }
   
     JSON1 =
   
     {
       name: "Mr. Michi",
       food: "Pescado"
     },
   
   JSON2 =
   
     {
       age: 12,
       color: "Blanco"
     }
   
   
   solution(JSON1, JSON2);