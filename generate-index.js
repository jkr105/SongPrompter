// generate-index.js
const fs = require('fs');
const path = require('path');
const songsDir = './canciones'; // Carpeta raíz de canciones
const outputFilePath = './index.json';

const generateIndex = () => {
  const index = {};

  // 1. Recorrer carpetas de letras (A-Z)
  const letters = fs.readdirSync(songsDir);
  letters.forEach(letter => {
    const letterPath = path.join(songsDir, letter);
    if (!fs.statSync(letterPath).isDirectory()) return; // Ignorar archivos

    index[letter] = {};

    // 2. Recorrer artistas dentro de la letra
    const artists = fs.readdirSync(letterPath);
    artists.forEach(artist => {
      const artistPath = path.join(letterPath, artist);
      if (!fs.statSync(artistPath).isDirectory()) return;

      // 3. Recoger canciones del artista (ahora incluye .txt y .pdf)
      const songs = fs.readdirSync(artistPath)
        .filter(file => file.endsWith('.txt') || file.endsWith('.pdf')) // Se agregan PDFs
        .map(file => file.replace('.txt', '').replace('.pdf', '')); // Quitar ambas extensiones

      if (songs.length > 0) {
        index[letter][artist] = songs;
      }
    });
  });

  // 4. Guardar index.json
  fs.writeFileSync(outputFilePath, JSON.stringify(index, null, 2));
  console.log('✅ ¡index.json generado correctamente!');
  console.log(`   Ruta: ${path.resolve(outputFilePath)}`);
};

// Ejecutar
generateIndex();