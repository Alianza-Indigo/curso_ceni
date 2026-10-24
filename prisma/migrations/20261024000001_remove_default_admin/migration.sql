-- Remove only the known initial seed credentials, never a password that was changed.
DELETE FROM "AdminUsuario" WHERE "id" = 'admin-seed-001' AND "passwordHash" = '$2b$12$bicuHHnkFFpuN7iOsLo8IuZKZSVgzXgFCQ11QdD/0zbTTEF2n6tDC';
