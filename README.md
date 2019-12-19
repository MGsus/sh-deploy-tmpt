# Configuración

## VPS

### Requisitos

1. Node
2. Git

### Pasos

1. Clonar el repositorio de trabajo

   ```sh
   git clone https://enlace-repo.git
   ```

2. Entrar en la carpeta y eliminar los archivos de configuración de git. Esta carpeta será la que se utilizara para las pruebas y el desarrollo.

   ```sh
   cd REPO/
   rm -rf .git .gitignore
   ```

3. Crear una carpeta con el nombre del entorno, por ejemplo, devel y clonar allí el repo. Este será el repositorio que recibirá los cambios una vez haya pasado las pruebas del desarrollador.

   ```sh
   mkdir devel & cd devel/
   git clone https://enlace-repo.git

   ```

   Se debe cambiar el nombre de la carpeta en el archivo deploy.sh para ejecutar el git pull

---

## PC Local de los Desarrolladores

### Requisitos

### Pasos

1. Realizar la configuración ssh

   - Generar el par de llaves (Pública y privada)

     ```sh
     ssh-keygen -m PEM -t rsa
     ```

   - Le dará la opción de cambiar el nombre, lo dejamos igual. Se llamará `id_rsa` & `id_rsa.pub`

     ```language
     Enter file in which to save the key (/Users/yourname/.ssh/id_rsa):
     ```

   - De igual forma, no crearemos password para la llave privada. Dejamos esta opción en blanco

     ```language
     Enter passphrase (empty for no passphrase):
     Enter same passphrase again:
     ```

   - Enviamos la llave pública al archivo **authorized_keys** del servidor. El siguiente comando solo funciona en entronos **UNIX**, si se trabajará en Windows, tendrá que modificar **manualmente** el archivo authorized_keys del servidor

     ```sh
     ssh-copy-id SYSUSER@x.x.x.x
     ```

2. Configuración VSCode

   - Clonar el repositorio y abrir la carpeta www.

     ```sh
     git clone https://enlace-repo.git &
     code carpeta-repo/
     ```

   - En VSCode, descargamos la extension `SFTP` y recargamos el editor.

   - Creamos un archivo de configuración presionando `F1` y seleccionando `SFTP: Config`

   - Cambiaremos los valores de `username` y `host` de acuerdo a los otorgados por administrador, además, agregar la línea `"privateKeyPath": " "enlace al archivo id_rsa"`

     ```json
     {
       "name": "My Server",
       "host": "107.180.91.86",
       "protocol": "sftp",
       "port": 22,
       "username": "admindevel",
       "privateKeyPath": "/home/gsus/.ssh/id_rsa",
       "remotePath": "/home/admindevel/tstpipeline/www",
       "uploadOnSave": true
     }
     ```

   - Deberá aparecer en el panel izquierdo un boton, el explorador de archivos del SFTP. En cada archivo, clic derecho, editar localmente. Así, quedará enlazado a nuestro explorador local.