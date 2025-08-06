# **Cancionero Prompter 🎶**

Un sistema de teleprompter web diseñado para uso personal y que haga la función de repositorio de canciones , que facilita la visualización de letras de canciones de manera sencilla y adaptable. Con esta herramienta, los usuarios pueden visualizar letras, ya sea cargando sus propias canciones o utilizando un índice predefinido.

## **Características Principales ✨**

* **Navegación Intuitiva**: Explora artistas y canciones por la letra inicial de forma rápida y eficiente.  
* **Modo Prompter**: Muestra las letras en un formato de teleprompter, con desplazamiento automático y ajustable.  
* **Controles de Velocidad**: Aumenta o disminuye la velocidad de desplazamiento para sincronizarla perfectamente con el ritmo de la música.  
* **Texto Personalizado**: Posibilidad de pegar cualquier texto para usarlo como prompter, ideal para discursos o notas.  
* **Buscador Rápido**: Encuentra al instante cualquier canción o artista con una potente herramienta de búsqueda.  
* **Diseño Responsivo**: Funciona perfectamente en dispositivos de escritorio, tablets y móviles.

## **Estructura del Proyecto 📂**

.  
├── canciones/  
│   ├── \_index.json  
│   ├── A/  
│   │   ├── Artista1/  
│   │   │   └── Cancion1.txt  
│   │   └── Artista2/  
│   │       └── Cancion2.pdf  
│   └── B/  
│       └── Artista3/  
│           └── Cancion3.txt  
├── generate-index.js  
├── index.html  
└── README.md

* index.html: El archivo principal de la aplicación web, que contiene el código HTML, CSS y JavaScript.  
* canciones/: Esta carpeta es la base de datos de letras. Su estructura es crucial:  
  * Las subcarpetas (A, B, C...) representan la letra inicial del artista.  
  * Dentro de cada una, hay subcarpetas para cada artista (ej. Luis\_Miguel).  
  * Los archivos de las canciones (.txt o .pdf) se guardan dentro de la carpeta de su respectivo artista.  
* generate-index.js: Un script de Node.js que escanea la carpeta canciones y genera el archivo de índice.  
* \_index.json: El índice de la aplicación. Es un archivo esencial que debe ser generado y colocado en la carpeta canciones/.

## **Manual de Funcionamiento ⚙️**

Para que la aplicación pueda listar y acceder a las canciones correctamente, es necesario seguir estos pasos:

### **1\. Organizar las letras**

Asegúrate de que tus letras estén en formato **.txt o .pdf** y organizadas de la siguiente manera:

* Crea una carpeta dentro de canciones/ para la letra inicial del artista (ej. L para Luis Miguel).  
* Dentro de esa carpeta, crea otra con el nombre del artista (ej. Luis\_Miguel). Se recomienda usar guiones bajos (\_) en lugar de espacios.  
* Guarda los archivos de las canciones dentro de la carpeta del artista. El nombre del archivo será el título de la canción (ej. La\_Media\_Vuelta.txt).

### **2\. Generar el archivo de índice**

1. Abre una terminal en la carpeta raíz del proyecto.  
2. Ejecuta el script de generación de índice con Node.js:  
   node generate-index.js

3. El script escaneará la estructura de carpetas de canciones/ y creará un archivo llamado index.json en la carpeta raíz del proyecto.  
4. **Paso crucial**: Renombra el archivo recién creado index.json a **\_index.json**.  
5. Copia o mueve el archivo **\_index.json** a la carpeta canciones/.

Una vez completado este proceso, la aplicación web tendrá acceso a todo tu catálogo de canciones.

## **Controles del Prompter 🕹️**

Cuando la letra de una canción está en pantalla, puedes usar los siguientes controles:

* **Barra espaciadora**: Inicia o pausa el desplazamiento automático de la letra.  
* **Flecha arriba** o **Flecha derecha**: Aumenta la velocidad de desplazamiento.  
* **Flecha abajo** o **Flecha izquierda**: Disminuye la velocidad de desplazamiento.  
* **Ctrl \+ F** (o Cmd \+ F en Mac): Abre el buscador de canciones.  
* **Esc**: Regresa a la vista anterior (ej. de la canción a la lista de canciones, o de la lista de artistas al inicio).  
* **T**: Alterna la visibilidad y el tamaño del menú lateral para ocupar toda la pantalla.  
* **Movimiento del ratón**: Muestra u oculta los controles de velocidad y reproducción en la parte inferior.

## **Licencia 📜**

Este proyecto de prompter se distribuye bajo una licencia de código abierto, en cuanto al código de creación.

Sin embargo, los textos son propiedad de sus autores y están añadidos al proyecto tan sólo a título demostrativo de funcionamiento. No lo uses si no tienes la autorización pertinente.

## **Usos📜**

Este proyecto de prompter puede adaptarse para todo tipo de actividad que requiera de una organización alfabética y/o de materias.

Puede ser útil para opciones tan variadas como hacer un repositorio de poesía, de contratos, de clientes, etc.

