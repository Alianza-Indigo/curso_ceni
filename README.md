# Curso CENI

Curso interactivo de Certificación de Entornos Neuroinclusivos (CENI), de Alianza Índigo
Neurodivergente A.C. Construido con Next.js (App Router), Prisma/PostgreSQL y Auth.js con
inicio de sesión con Google.

## Arquitectura

- **Autenticación**: Google OAuth vía [Auth.js](https://authjs.dev) (`next-auth@beta`), con
  sesiones de base de datos (no JWT) y adaptador de Prisma.
- **Persistencia**: PostgreSQL vía Prisma. El progreso de cada módulo, el resultado del examen
  final y el folio de la constancia se guardan por usuario — ya no en `localStorage` del
  navegador.
- **Rutas protegidas**: `proxy.ts` (equivalente a `middleware.ts` en versiones anteriores de
  Next.js) redirige a `/login` a cualquier visitante sin sesión.
- **Constancia**: `/api/constancia` genera un PDF real (con `pdf-lib`) al vuelo para quien haya
  aprobado el examen integrador, con folio verificable.

## Configuración local

1. Instala dependencias:

   ```bash
   npm install
   ```

2. Copia `.env.example` a `.env` y completa los valores:

   ```bash
   cp .env.example .env
   ```

3. Necesitas una base de datos PostgreSQL accesible (local o remota) y credenciales de
   OAuth de Google (ver siguiente sección).

4. Aplica el schema de Prisma a la base de datos:

   ```bash
   npm run db:push
   ```

5. Levanta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## Configurar Google OAuth

1. Ve a [Google Cloud Console → Credenciales](https://console.cloud.google.com/apis/credentials)
   y crea (o usa) un proyecto.
2. Configura la "Pantalla de consentimiento de OAuth" (External, con el dominio de la
   organización si aplica).
3. Crea un "ID de cliente de OAuth" de tipo **Aplicación web** con:
   - **Orígenes de JavaScript autorizados**: `https://tu-dominio.com` (y
     `http://localhost:3000` para desarrollo).
   - **URIs de redirección autorizadas**:
     `https://tu-dominio.com/api/auth/callback/google` (y
     `http://localhost:3000/api/auth/callback/google` para desarrollo).
4. Copia el **Client ID** y **Client Secret** a `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET`
   en tu `.env` / variables de entorno del hosting.

## Variables de entorno requeridas en producción

| Variable | Descripción |
| --- | --- |
| `DATABASE_URL` | Cadena de conexión PostgreSQL (Vercel Postgres, Neon, Supabase, Railway, etc.) |
| `AUTH_SECRET` | Secreto aleatorio (`openssl rand -base64 32`) para firmar cookies de sesión |
| `AUTH_TRUST_HOST` | `"true"` si Auth.js corre detrás de un proxy/CDN |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Credenciales OAuth de Google Cloud Console |

Sin estas variables configuradas, el login con Google y la persistencia de progreso no
funcionarán — la aplicación no puede generarlas por sí sola, deben provenir de tu propia
cuenta de Google Cloud y de tu propio proveedor de base de datos.

## Scripts

- `npm run dev` — servidor de desarrollo.
- `npm run build` / `npm run start` — build y arranque de producción.
- `npm run lint` — ESLint.
- `npm run db:push` — sincroniza `prisma/schema.prisma` con la base de datos (sin migraciones
  versionadas; usar `prisma migrate` en un flujo con migraciones formales).
- `npm run db:studio` — abre Prisma Studio para inspeccionar los datos.
