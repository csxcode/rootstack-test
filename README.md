# rootstack-test
Sistema de geolocalización de tareas de campo que incluya un módulo de autenticación.

Requisitos indispensables
1. Usar Git
2. Consumir API provista en esta prueba. La URL base de la aplicación es
https://coding-test.rootstack.net/ A esto agregue el endpoint a llamar, por ejemplo
https://coding-test.rootstack.net/api/jobs. Todos los endpoints requieren
autenticación por bearer token a excepción del endpoint de login.
Documento desarrollado por Rootstack S.A.
0
Prueba
Versión: 3.0
3. Implementar sistema de autenticación. Utilizar endpoint: POST
https://coding-test.rootstack.net/api/auth/login. Este endpoint acepta un cuerpo en
JSON que debe contener las propiedades email y password. El objetivo es que el
usuario final de la aplicación pueda hacer login con cualquiera de las credenciales
listadas en: https://coding-test.rootstack.net/.

Requerimientos funcionales
1. La autenticación deberá persistir entre cierres de browser
2. Debe mostrar la información del usuario (GET
https://coding-test.rootstack.net/api/auth/me)
3. Listar los trabajos (GET https://coding-test.rootstack.net/api/jobs)
4. Implementar un mapa para mostrar la localización de los trabajos listados
5. Conectar los elementos de la lista de jobs con los pines del mapa de tal forma que
desde la lista se pueda saber cuál es el pin correspondiente en el mapa.
6. Desde el mapa se pueda saber a qué elemento corresponde el pin (haciendo click,
mouseover, infowindow o combinación de las anteriores, como le parezca que sea
más amigable al usuario)
7. Mostrar la ubicación del usuario y su precisión.
8. La interfaz del usuario puede ser simple.


### Pasos para ejecutar el proyecto 
```bash
- npm run start
Luego abra su navegador en http://localhost:4200
```
