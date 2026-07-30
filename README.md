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
- **Migraciones versionadas**: el schema vive en `prisma/migrations/` (Prisma Migrate), no se
  gestiona con `db push` a mano. El script `build` corre `prisma migrate deploy` antes de
  `next build`, así que cada deploy en producción aplica automáticamente las migraciones
  pendientes contra `DATABASE_URL` — no hace falta tocar la base de datos manualmente.
- **Asistente virtual**: widget de chat (`/api/asistente` + `components/AsistenteChat.tsx`)
  con Gemini 3.1 Flash Lite, anclado estrictamente al contenido del módulo que el estudiante
  está viendo (más el glosario e índice del curso) para no inventar criterios o cifras.
  Conversación efímera: vive solo en el estado del navegador, no se guarda en ningún lado ni
  sobrevive a un recargo de página.

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

4. Aplica las migraciones a la base de datos:

   ```bash
   npx prisma migrate deploy
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
| `GEMINI_API_KEY` | API key de [Google AI Studio](https://aistudio.google.com/apikey) para el asistente virtual |

Sin estas variables configuradas, el login con Google y la persistencia de progreso no
funcionarán — la aplicación no puede generarlas por sí sola, deben provenir de tu propia
cuenta de Google Cloud y de tu propio proveedor de base de datos. Si falta `GEMINI_API_KEY`
específicamente, el resto del curso funciona normal — solo el widget del asistente
responderá con un aviso de que no está configurado.

## Scripts

- `npm run dev` — servidor de desarrollo.
- `npm run build` — aplica migraciones pendientes (`prisma migrate deploy`) y compila
  (`next build`). Es lo que corre Vercel en cada deploy de producción.
- `npm run start` — arranque de producción (tras `build`).
- `npm run lint` — ESLint.
- `npm run db:migrate` — `prisma migrate dev`: usa esto en desarrollo cuando cambies
  `prisma/schema.prisma`, para generar un nuevo archivo de migración versionado en
  `prisma/migrations/` (commitéalo junto con el cambio de schema).
- `npm run db:studio` — abre Prisma Studio para inspeccionar los datos.

### Cómo cambiar el schema de la base de datos

1. Edita `prisma/schema.prisma`.
2. Corre `npm run db:migrate` (te pedirá un nombre para la migración) — esto la aplica a tu
   base de datos local y crea el archivo SQL versionado en `prisma/migrations/`.
3. Commitea el nuevo folder de migración junto con el cambio de schema.
4. Al hacer deploy, `prisma migrate deploy` (dentro del script `build`) la aplica sola a
   producción. Nunca uses `prisma db push` contra la base de datos de producción — no queda
   registro en `prisma/migrations/` y el próximo `migrate deploy` puede entrar en conflicto.
