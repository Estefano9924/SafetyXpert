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

const data1 = '/consultas/countRutasTotales'
Consultas(data1).then(data => {
  if (data) {
    document.getElementById('dato1').innerHTML = `<h4>${data}</h4>`;
  }
});


const data2 = '/consultas/countRutasActivas'
Consultas(data2).then(data => {
  if (data) {
    document.getElementById('dato2').innerHTML = `
          <h4>${data}</h4>
        `;
  }
});

const data3 = '/consultas/countConductoresActivos'
Consultas(data3).then(data => {
  if (data) {
    document.getElementById('dato3').innerHTML = `
          <h4>${data}</h4>
        `;
  }
});


const data4 = '/consultas/countConductoresActivos'
Consultas(data4).then(data => {
  if (data) {
    document.getElementById('dato4').innerHTML = `
          <h4>${data}</h4>
        `;
  }
});

const conductores = '/consultas/conductoresDHB';
Consultas(conductores).then(data => {
  if (data) {
    // Selecciona el elemento al que se agregarán las filas
    const tableBody = document.getElementById('dato5');
    //tableBody.innerHTML = ''; // 

    // Itera sobre cada usuario y genera una fila
    JSON.parse(data).forEach(user => {

      const fecha =new Date(user.fechaUltimaVezActivo).toLocaleDateString();

      let estado = "";

      if (user.licenciaEstado == true) { estado = "Si"} else { estado = "No"}

      tableBody.innerHTML += `
        <tr>
          <td>${user.name} ${user.surname.paternalSurname} ${user.surname.maternalSurname}</td>
          <td>${user.phoneNumber}</td>
          <td>${fecha}</td>
          <td>${user.licencia}</td>
          <td>${estado}</td>
        </tr>
      `;
    });
  }
});

