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
  aprobado el examen integrador, con folio verificable, vigencia de 1 año
  (`ResultadoExamen.vigenciaHasta`) y un código QR que apunta a la página pública
  `/verificar/[folio]` (sin autenticación) donde cualquiera puede confirmar folio, nombre,
  fecha y si la constancia sigue vigente. Al vencer, el dashboard invita a repetir el examen
  final para renovarla.
- **Actividades prácticas evaluables**: cada módulo pondera su calificación entre el quiz
  (25–45%) y entregables prácticos (mapas, scripts, autoevaluaciones, planes de mejora, etc.).
  Un módulo solo cuenta como completo — y desbloquea el siguiente — cuando el quiz está
  aprobado **y** se entregó cada actividad (`components/ActividadesEntrega.tsx` +
  `EntregaActividad` en Postgres); el quiz aprobado por sí solo ya no basta.
- **Migraciones versionadas**: el schema vive en `prisma/migrations/` (Prisma Migrate), no se
  gestiona con `db push` a mano. El script `build` corre `prisma migrate deploy` antes de
  `next build`, así que cada deploy en producción aplica automáticamente las migraciones
  pendientes contra `DATABASE_URL` — no hace falta tocar la base de datos manualmente.
- **Asistente virtual**: widget de chat (`/api/asistente` + `components/AsistenteChat.tsx`)
  con Gemini 3.1 Flash Lite, anclado estrictamente al contenido del módulo que el estudiante
  está viendo (más el glosario e índice del curso) para no inventar criterios o cifras.
  Conversación efímera: vive solo en el estado del navegador, no se guarda en ningún lado ni
  sobrevive a un recargo de página.
  - **Tope de costo**: `LIMITE_MENSAJES_ASISTENTE_DIA` (`lib/constantes.ts`, hoy 50) por
    usuario por día, contado en `User.asistenteMensajesHoy` (Postgres). Al superarlo, la
    ruta responde 429 con un mensaje claro.
  - **Redirección a humano**: el prompt del sistema le pide al modelo responder con el
    marcador `MARCADOR_REDIRECCION_HUMANA` cuando detecta abuso, hostilidad, intentos de
    manipulación, o peticiones que requieren autoridad humana (calificar, certificar,
    quejas formales). El widget muestra entonces una tarjeta con el contacto de Alianza
    Índigo (`CONTACTO_ALIANZA_INDIGO`) en vez de la respuesta normal.
- **Bloqueo secuencial de módulos**: hay que aprobar el módulo N-1 para acceder al N
  (`lib/data/modulos.ts#moduloDesbloqueado`), tanto en la UI del dashboard como en la propia
  página del módulo (acceso directo por URL también se bloquea).
- **Panel de administración** (`/admin`): login propio con correo + contraseña, independiente
  del login de Google de los estudiantes — usa una cookie firmada (JWT con `jose`, misma clave
  `AUTH_SECRET`), no Auth.js. Las credenciales viven en la tabla `AdminUsuario` (Postgres),
  sembrada por la migración `20260731040600_admin_usuario` — no en variables de entorno. La
  contraseña se cambia desde el propio panel (sección "Cambiar contraseña"), sin tocar Vercel
  ni el repo. Muestra usuarios registrados, aprobación por módulo, y la tabla de constancias
  emitidas con su folio. Un solo administrador por ahora; para varios habría que extenderlo.

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

El panel de administración (`/admin`) no necesita variables de entorno propias — su usuario
se siembra vía migración y la contraseña se cambia desde el propio panel.

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
