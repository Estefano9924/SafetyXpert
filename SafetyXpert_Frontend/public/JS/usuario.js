import { Consultas } from "./consultas";


const user1= '/consultas/countUsuariosRegistrados'
    Consultas(user1).then(data => {
      if (data) {
        document.getElementById('dato1').innerHTML = `
          <h4>${data}</h4>
        `;
      }
    });

    const user2= '/consultas/countUsuariosRegistrados'
    Consultas(user2).then(data => {
      if (data) {
        document.getElementById('dato2').innerHTML = `
          <h4>${data}</h4>
        `;
      }
    });
  


// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         const response = await fetch(URLAPI + '/consultas/countUsuariosRegistrados');
//         if (!response.ok) {
//             throw new Error('Error en la solicitud');
//         }
//         const data = await response.text();
  
//         // Renderiza los datos directamente en el elemento con id="dato1"
//         document.getElementById('dato1').innerHTML = `
//           <h4>${data}</h4>
//         `;
//     } catch (error) {
//         console.error('Error:', error);
//     }
//   });
  
  
//   document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         const response = await fetch(URLAPI + '/consultas/countUsuariosActivos');
//         if (!response.ok) {
//             throw new Error('Error en la solicitud');
//         }
//         const data = await response.text();
  
//         // Renderiza los datos directamente en el elemento con id="dato2"
//         document.getElementById('dato2').innerHTML = `
//           <h4>${data}</h4>
//         `;
//     } catch (error) {
//         console.error('Error:', error);
//     }
//   });