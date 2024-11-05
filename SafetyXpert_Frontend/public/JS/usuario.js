const URLAPI = 'http://localhost:5000/api'


//declaracion por medio de funcion
async function Consultas(ruta) {
  try {
    const response = await fetch(URLAPI + ruta);
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    const data = await response.text(); // Usamos text() si solo se devuelve un valor
    return data; // Devuelve el dato
  } catch (error) {
    console.error('Error:', error);
  }
}


const user1= '/consultas/countUsuariosRegistrados'
Consultas(user1).then(data => {
  if (data) {
        document.getElementById('dato1').innerHTML = `
       <h4>${data}</h4>
    `;
   }
});

const user2= '/consultas/countUsuariosActivos'
Consultas(user2).then(data => {
  if (data) {
     document.getElementById('dato2').innerHTML = `
      <h4>${data}</h4>
     `;
   }
});
  

const users = '/consultas/usuariosActivos';
Consultas(users).then(data => {
  if (data) {
    // Selecciona el elemento al que se agregarán las filas
    const tableBody = document.getElementById('dato5');
    //tableBody.innerHTML = ''; // Limpia el contenido previo para evitar duplicados

    // Itera sobre cada usuario y genera una fila
    JSON.parse(data).forEach(user => {
      tableBody.innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.rol}</td>
          <td>${user.idDoc}</td>
          <td>${user.creationDate}</td>
          <td>${user.phoneNumber}</td>
          <td>${user.username}</td>
        </tr>
      `;
    });
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