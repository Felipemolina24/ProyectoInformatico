Diagrama C4: https://online.visual-paradigm.com/share.jsp?id=323738313337342d31

Requisitos Funcionales

    Autenticación de Usuarios:
•	Permitir a los usuarios iniciar sesión usando un nombre de usuario y contraseña.
•	Validar las credenciales ingresadas contra una base de datos segura donde se almacenan los detalles del usuario.
    Gestión de Sesiones:
•	Crear una sesión para el usuario una vez que se autentique exitosamente.
•	  Asegurar que la sesión sea única y segura para cada usuario.

    Validación de Entrada:
•	Implementar validaciones en el lado del cliente para verificar que el formato del nombre de usuario. email y la contraseña cumplan con las políticas establecidas (por ejemplo, longitud, email valido, campos obligatorios).
•	Implementar validaciones en el lado del servidor para una capa adicional de seguridad.

    Mensajes de Error Claros:
•	Proporcionar mensajes de error claros y específicos en caso de que la autenticación falle (por ejemplo, "Nombre de usuario o contraseña incorrectos", "La cuenta no existe").

    Integración con la API:
•	La autenticación debe realizarse a través de una API que maneje las solicitudes de inicio de sesión y las validaciones de seguridad correspondientes.

Requisitos No Funcionales

    Seguridad:
•	Utilizar protocolos seguros para la transmisión de datos (HTTPS).
•	Almacenar las contraseñas en la base de datos utilizando un hash.

    Usabilidad:
•	Diseñar una interfaz de usuario intuitiva y amigable.

    Rendimiento:
•	 Optimizar la respuesta de la API para garantizar un inicio de sesión rápido.
•	Manejar adecuadamente los errores y tiempos de espera de la API para no dejar al usuario en un estado de incertidumbre.

    Escalabilidad:
•	Diseñar la API y la base de datos para soportar un aumento en el número de solicitudes de inicio de sesión conforme crece la base de usuarios.

    Mantenibilidad:
•	 Escribir código limpio y bien documentado tanto para la interfaz de usuario como para la API, facilitando futuras actualizaciones y mantenimiento.


Juan Felipe Gomez
Rafael Gomez
Jaime Humberto Ñañez
william Banguera
Miguel Sotelo