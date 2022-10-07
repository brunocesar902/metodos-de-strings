function mostrarData (dia, mes, ano) {
    const diaFormatado = String(dia).padStart(2, '0');
    const mesFormatado = String(mes).padStart(2, '0');
    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

mostrarData(5,6, 2022); 