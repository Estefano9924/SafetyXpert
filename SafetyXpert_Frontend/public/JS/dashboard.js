const URLAPI ='http://localhost:5000/api'

async function Data1() {
    try {
        const response = await fetch(URLAPI +'/consultas/countRutasTotales');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.text(); // Usamos text() si solo se devuelve un valor
        return data; // Devuelve el dato
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llama a la función para obtener datos y renderizarlos
Data1().then(data => {
    if (data) {
      // Suponiendo que tienes un div con id="user-info" para mostrar los datos
      document.getElementById('dato1').innerHTML = `
        <h4>${data}</h4>
      `;
    }
  });

  async function Data2() {
    try {
        const response = await fetch(URLAPI +'/consultas/countRutasActivas');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.text(); // Usamos text() si solo se devuelve un valor
        return data; // Devuelve el dato
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llama a la función para obtener datos y renderizarlos
Data2().then(data => {
    if (data) {
      // Suponiendo que tienes un div con id="user-info" para mostrar los datos
      document.getElementById('dato2').innerHTML = `
        <h4>${data}</h4>
      `;
    }
  });

  async function Data3() {
    try {
        const response = await fetch(URLAPI +'/consultas/countConductoresActivos');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.text(); // Usamos text() si solo se devuelve un valor
        return data; // Devuelve el dato
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llama a la función para obtener datos y renderizarlos
Data3().then(data => {
    if (data) {
      // Suponiendo que tienes un div con id="user-info" para mostrar los datos
      document.getElementById('dato3').innerHTML = `
        <h4>${data}</h4>
      `;
    }
  });

  async function Data4() {
    try {
        const response = await fetch(URLAPI +'/consultas/countConductoresActivos');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.text(); // Usamos text() si solo se devuelve un valor
        return data; // Devuelve el dato
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llama a la función para obtener datos y renderizarlos
Data4().then(data => {
    if (data) {
      // Suponiendo que tienes un div con id="user-info" para mostrar los datos
      document.getElementById('dato4').innerHTML = `
        <h4>${data}</h4>
      `;
    }
  });
  