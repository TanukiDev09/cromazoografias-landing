# Integración WordPress/WooCommerce con Next.js

Este proyecto integra el frontend Next.js con el backend WordPress/WooCommerce para un proceso de compra funcional.

## 🚀 Inicio Rápido

### Requisitos Previos

- XAMPP con Apache y MySQL corriendo
- Node.js instalado
- WordPress/WooCommerce configurado en `C:\xampp\htdocs\TanukiWeb`

### Configuración

1. **Generar credenciales de API de WooCommerce**
   - Sigue las instrucciones en [SETUP_GUIDE.md](./SETUP_GUIDE.md)

2. **Configurar variables de entorno**

   ```bash
   # Copia las credenciales al archivo .env.local
   # WC_CONSUMER_KEY=tu_consumer_key
   # WC_CONSUMER_SECRET=tu_consumer_secret
   ```

3. **Instalar dependencias**

   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📋 Verificación

Para verificar que WordPress está configurado correctamente:

```
http://localhost/TanukiWeb/verify-api.php
```

Esto mostrará:

- ✅ Estado de WooCommerce
- ✅ Productos disponibles
- ✅ Estado de la API REST
- ✅ Estado del plugin CORS
- ✅ Estado del plugin MercadoPago

## 🏗️ Arquitectura

```
┌─────────────────┐         ┌──────────────────┐
│   Next.js       │         │   WordPress      │
│   Frontend      │ ◄─────► │   WooCommerce    │
│   (Port 3000)   │  REST   │   (XAMPP)        │
└─────────────────┘   API   └──────────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │  MercadoPago │
                              │   Payment    │
                              └──────────────┘
```

## 📁 Archivos Clave

### Frontend (Next.js)

- `lib/wordpress-api.ts` - Servicio de API para WordPress/WooCommerce
- `components/ProductGrid/ProductGrid.tsx` - Muestra productos desde WordPress
- `components/PurchaseModal/PurchaseModal.tsx` - Crea órdenes en WooCommerce
- `.env.local` - Variables de entorno (credenciales API)

### Backend (WordPress)

- `wp-content/mu-plugins/wp-api-cors.php` - Plugin CORS para permitir peticiones desde Next.js
- `verify-api.php` - Script de verificación de configuración

## 🔧 Funcionalidades

- ✅ Obtención dinámica de productos desde WooCommerce
- ✅ Creación de órdenes en WooCommerce
- ✅ Integración con MercadoPago para pagos
- ✅ Manejo de estados de carga y errores
- ✅ Datos de respaldo si la API no está disponible

## 📖 Documentación Adicional

- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Guía detallada de configuración
- [Implementation Plan](./implementation_plan.md) - Plan técnico de implementación

## 🐛 Solución de Problemas

Ver la sección "Solución de Problemas" en [SETUP_GUIDE.md](./SETUP_GUIDE.md)

## 📝 Notas

- Las credenciales de API nunca deben committearse al repositorio
- En producción, actualiza las URLs en `.env.local` al dominio real
- Usa HTTPS en producción para todas las comunicaciones API
