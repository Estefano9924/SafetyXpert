
const URLAPI ='http://localhost:5000/api'


//declaracion por medio de funcion
async function Consultas(ruta) {
    try {
        const response = await fetch(URLAPI + ruta); 
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.text();
        console.log(data) // Usamos text() si solo se devuelve un valor
        return data; // Devuelve el dato
    } catch (error) {
        console.error('Error:', error);
    }
}


const data1 = '/consultas/countRutasTotales'
Consultas(data1).then(data => {
    if (data) {
      document.getElementById('dato1').innerHTML = `
        <h4>${data}</h4>
      `;
    }
  });


  const data2= '/consultas/countRutasActivas'
  Consultas(data2).then(data => {
      if (data) {
        document.getElementById('dato2').innerHTML = `
          <h4>${data}</h4>
        `;
      }
    });

    const data3= '/consultas/countConductoresActivos'
    Consultas(data3).then(data => {
      if (data) {
        document.getElementById('dato3').innerHTML = `
          <h4>${data}</h4>
        `;
      }
    });
  

    const data4= '/consultas/countConductoresActivos'
    Consultas(data4).then(data => {
      if (data) {
        document.getElementById('dato4').innerHTML = `
          <h4>${data}</h4>
        `;
      }
    });
  
module.exports = {Consultas}
  
  

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//       const response = await fetch(URLAPI + '/consultas/countRutasTotales');
//       if (!response.ok) {
//           throw new Error('Error en la solicitud');
//       }
//       const data = await response.text();

//       // Renderiza los datos directamente en el elemento con id="dato1"
//       document.getElementById('dato1').innerHTML = `
//         <h4>${data}</h4>
//       `;
//   } catch (error) {
//       console.error('Error:', error);
//   }
// });


// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//       const response = await fetch(URLAPI + '/consultas/countRutasActivas');
//       if (!response.ok) {
//           throw new Error('Error en la solicitud');
//       }
//       const data = await response.text();

//       // Renderiza los datos directamente en el elemento con id="dato2"
//       document.getElementById('dato2').innerHTML = `
//         <h4>${data}</h4>
//       `;
//   } catch (error) {
//       console.error('Error:', error);
//   }
// });


// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//       const response = await fetch(URLAPI + '/consultas/countConductoresActivos');
//       if (!response.ok) {
//           throw new Error('Error en la solicitud');
//       }
//       const data = await response.text();

//       // Renderiza los datos directamente en el elemento con id="dato2"
//       document.getElementById('dato3').innerHTML = `
//         <h4>${data}</h4>
//       `;
//   } catch (error) {
//       console.error('Error:', error);
//   }
// });

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//       const response = await fetch(URLAPI + '/consultas/countConductoresActivos');
//       if (!response.ok) {
//           throw new Error('Error en la solicitud');
//       }
//       const data = await response.text();

//       // Renderiza los datos directamente en el elemento con id="dato2"
//       document.getElementById('dato4').innerHTML = `
//         <h4>${data}</h4>
//       `;
//   } catch (error) {
//       console.error('Error:', error);
//   }
// });


  