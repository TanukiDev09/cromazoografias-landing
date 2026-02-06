# Guía de Configuración - Integración WordPress/WooCommerce

## Paso 1: Generar Credenciales de API de WooCommerce

Para que el frontend Next.js pueda comunicarse con WordPress, necesitas generar credenciales de API:

1. Accede al panel de administración de WordPress: `http://localhost/TanukiWeb/wp-admin`
2. Ve a **WooCommerce > Configuración > Avanzado > API REST**
3. Haz clic en **Agregar clave**
4. Completa el formulario:
   - **Descripción**: "Next.js Frontend"
   - **Usuario**: Selecciona tu usuario administrador
   - **Permisos**: Selecciona "Lectura/Escritura"
5. Haz clic en **Generar clave API**
6. **IMPORTANTE**: Copia el **Consumer Key** y el **Consumer Secret** que se muestran

## Paso 2: Configurar Variables de Entorno

1. Abre el archivo `.env.local` en el proyecto Next.js
2. Reemplaza los valores de `WC_CONSUMER_KEY` y `WC_CONSUMER_SECRET` con las credenciales que copiaste
3. Guarda el archivo

Ejemplo:

```env
WC_CONSUMER_KEY=ck_1234567890abcdef1234567890abcdef12345678
WC_CONSUMER_SECRET=cs_1234567890abcdef1234567890abcdef12345678
```

## Paso 3: Crear Productos en WooCommerce

Necesitas crear los productos en WooCommerce:

1. Ve a **Productos > Añadir nuevo** en WordPress
2. Crea dos productos:

### Producto 1: Cromazoografías Vol. 1

- **Nombre**: Cromazoografías Vol. 1
- **Precio regular**: 85000
- **Descripción corta**: Amarillo → Rosa. 96 animales · 96 poemas. 14×17cm.
- **Imagen**: Sube la imagen de portada del Vol. 1
- **Estado**: Publicado

### Producto 2: Cromazoografías Vol. 2

- **Nombre**: Cromazoografías Vol. 2
- **Precio regular**: 85000
- **Descripción corta**: Morado → Gris. 96 animales · 96 poemas. 14×17cm.
- **Imagen**: Sube la imagen de portada del Vol. 2
- **Estado**: Publicado

## Paso 4: Configurar MercadoPago

1. Ve a **WooCommerce > Configuración > Pagos**
2. Busca **MercadoPago** en la lista de métodos de pago
3. Haz clic en **Configurar**
4. Ingresa tus credenciales de MercadoPago:
   - **Public Key**: Tu clave pública de MercadoPago
   - **Access Token**: Tu token de acceso de MercadoPago
5. Activa el método de pago
6. Guarda los cambios

## Paso 5: Iniciar el Servidor de Desarrollo

1. Abre una terminal en el directorio del proyecto Next.js
2. Ejecuta: `npm run dev`
3. Abre el navegador en `http://localhost:3000`

## Verificación

1. Verifica que los productos se muestren correctamente en la página
2. Haz clic en "Comprar VOL 1" o "Comprar VOL 2"
3. Completa el formulario con datos de prueba
4. Verifica que se cree una orden en WordPress (WooCommerce > Pedidos)
5. Verifica que se redirija a la página de pago de MercadoPago

## Solución de Problemas

### Error: "Missing WooCommerce API configuration"

- Verifica que las variables de entorno estén correctamente configuradas en `.env.local`
- Reinicia el servidor de desarrollo (`Ctrl+C` y luego `npm run dev`)

### Error: "Failed to fetch products"

- Verifica que WordPress esté corriendo en `http://localhost/TanukiWeb`
- Verifica que las credenciales de API sean correctas
- Revisa la consola del navegador para más detalles del error

### Los productos no se muestran

- Verifica que los productos estén publicados en WooCommerce
- Verifica que los nombres de los productos incluyan "Cromazoografías"
- El componente usará datos de respaldo si no encuentra productos

### No se redirige a MercadoPago

- Verifica que el plugin de MercadoPago esté activo y configurado
- Verifica que las credenciales de MercadoPago sean correctas
- El sistema mostrará un mensaje con el ID de la orden si no hay URL de pago
