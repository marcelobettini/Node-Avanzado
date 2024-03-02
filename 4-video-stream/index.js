import express from "express";
import path from "node:path";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.listen(3030);
app.use(express.static(path.resolve(__dirname, "public")));

// Servir un archivo de video estático
app.get("/video-static", (req, res) => {
  const videoFile = path.resolve(__dirname, "public/video/beach.mp4");
  res.type("video/mp4");
  res.sendFile(videoFile);
});

// Servir un archivo de video en streaming sin rango
app.get("/video-stream", (req, res) => {
  const videoFile = "./public/video/beach.mp4";

  // Configurar la respuesta con el tipo de contenido
  res.writeHead(200, {
    "Content-Type": "video/mp4",
  });

  // Crear un flujo de lectura del archivo de video y enviarlo como respuesta
  createReadStream(videoFile).pipe(res);
});

// Servir un archivo de video en streaming con manejo de rango
app.get("/video-stream-with-range", async (req, res) => {
  const videoFile = "./public/video/beach.mp4";

  // Obtener información sobre el tamaño del archivo de video
  const { size } = await stat(videoFile);

  // Obtener el encabezado 'range' de la solicitud HTTP
  const range = req.headers.range;

  // Si hay un encabezado 'range', significa que se está solicitando una porción específica del video
  if (range) {
    // Obtener los límites de inicio y fin desde el encabezado 'range'
    let [start, end] = range.replace(/bytes=/, "").split("-");
    /*
Obtener los límites de inicio y fin desde el encabezado 'range'
let [start, end] = range.replace(/bytes=/, "").split("-");
range.replace(/bytes=/, ""): Este fragmento de código utiliza el método replace para eliminar la parte "bytes=" del encabezado 'range'. El encabezado 'range' tiene la forma "bytes=start-end", y este paso elimina la cadena "bytes=" para que quede solo la información de inicio y fin.

.split("-"): Después de eliminar "bytes=", el método split divide la cadena resultante utilizando el carácter "-" como separador. Esto crea un array que contiene dos elementos: el primero es el límite de inicio (start), y el segundo es el límite de fin (end).

En resumen, esta línea de código toma el encabezado 'range' de la solicitud HTTP, elimina la parte "bytes=" y luego divide la cadena en dos partes para obtener los límites de inicio y fin del rango solicitado. Estos límites se almacenan en las variables start y end respectivamente y se utilizan posteriormente en el código para determinar qué parte del archivo de video enviar como respuesta.
   */

    // Convertir los límites a números enteros
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;

    // Configurar la respuesta con el código de estado 206 (Rango parcial) y los encabezados adecuados
    res.writeHead(206, {
      "content-type": "video/mp4",
      "content-length": end - start + 1,
      "accept-ranges": "bytes",
      "content-range": `bytes ${start}-${end}/${size}`,
    });

    // Crear un flujo de lectura del archivo de video con los límites especificados y enviarlo como respuesta
    createReadStream(videoFile, { start, end }).pipe(res);
  } else {
    // Si no hay encabezado 'range', enviar el video completo como respuesta
    res.writeHead(200, {
      "content-type": "video/mp4",
      "content-length": size,
    });

    // Crear un flujo de lectura del archivo de video y enviarlo como respuesta
    createReadStream(videoFile).pipe(res);
  }
});
