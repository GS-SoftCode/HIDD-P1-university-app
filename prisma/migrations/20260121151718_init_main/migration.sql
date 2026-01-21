-- CreateEnum
CREATE TYPE "EstadoEstudiante" AS ENUM ('Activo', 'Inactivo', 'Graduado', 'Retirado');

-- CreateTable
CREATE TABLE "Admin" (
    "id_admin" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "Docente" (
    "id_docente" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "especialidad" TEXT NOT NULL,

    CONSTRAINT "Docente_pkey" PRIMARY KEY ("id_docente")
);

-- CreateTable
CREATE TABLE "Estudiante" (
    "id_estudiante" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "id_carrera" INTEGER NOT NULL,
    "estado" "EstadoEstudiante" NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id_estudiante")
);

-- CreateTable
CREATE TABLE "Carrera" (
    "id_carrera" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "duracion" INTEGER NOT NULL,
    "facultad" TEXT NOT NULL,

    CONSTRAINT "Carrera_pkey" PRIMARY KEY ("id_carrera")
);

-- CreateTable
CREATE TABLE "Periodo" (
    "id_periodo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Periodo_pkey" PRIMARY KEY ("id_periodo")
);

-- CreateTable
CREATE TABLE "Ciclo" (
    "id_ciclo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "id_carrera" INTEGER NOT NULL,

    CONSTRAINT "Ciclo_pkey" PRIMARY KEY ("id_ciclo")
);

-- CreateTable
CREATE TABLE "Materia" (
    "id_materia" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "creditos" INTEGER NOT NULL,
    "id_ciclo" INTEGER NOT NULL,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("id_materia")
);

-- CreateTable
CREATE TABLE "Docente_Materia" (
    "id_docente" INTEGER NOT NULL,
    "id_materia" INTEGER NOT NULL,
    "id_periodo" INTEGER NOT NULL,

    CONSTRAINT "Docente_Materia_pkey" PRIMARY KEY ("id_docente","id_materia","id_periodo")
);

-- CreateTable
CREATE TABLE "Estudiante_Materia" (
    "id_estudiante" INTEGER NOT NULL,
    "id_materia" INTEGER NOT NULL,
    "id_periodo" INTEGER NOT NULL,
    "fecha_inscripcion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Estudiante_Materia_pkey" PRIMARY KEY ("id_estudiante","id_materia","id_periodo")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userId_key" ON "Admin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Docente_userId_key" ON "Docente"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_userId_key" ON "Estudiante"("userId");

-- CreateIndex
CREATE INDEX "Estudiante_id_carrera_idx" ON "Estudiante"("id_carrera");

-- CreateIndex
CREATE UNIQUE INDEX "Periodo_nombre_key" ON "Periodo"("nombre");

-- CreateIndex
CREATE INDEX "Ciclo_id_carrera_idx" ON "Ciclo"("id_carrera");

-- CreateIndex
CREATE UNIQUE INDEX "Materia_codigo_key" ON "Materia"("codigo");

-- CreateIndex
CREATE INDEX "Materia_id_ciclo_idx" ON "Materia"("id_ciclo");

-- CreateIndex
CREATE INDEX "Docente_Materia_id_docente_idx" ON "Docente_Materia"("id_docente");

-- CreateIndex
CREATE INDEX "Docente_Materia_id_materia_idx" ON "Docente_Materia"("id_materia");

-- CreateIndex
CREATE INDEX "Docente_Materia_id_periodo_idx" ON "Docente_Materia"("id_periodo");

-- CreateIndex
CREATE INDEX "Estudiante_Materia_id_estudiante_idx" ON "Estudiante_Materia"("id_estudiante");

-- CreateIndex
CREATE INDEX "Estudiante_Materia_id_materia_idx" ON "Estudiante_Materia"("id_materia");

-- CreateIndex
CREATE INDEX "Estudiante_Materia_id_periodo_idx" ON "Estudiante_Materia"("id_periodo");

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_id_carrera_fkey" FOREIGN KEY ("id_carrera") REFERENCES "Carrera"("id_carrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ciclo" ADD CONSTRAINT "Ciclo_id_carrera_fkey" FOREIGN KEY ("id_carrera") REFERENCES "Carrera"("id_carrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia" ADD CONSTRAINT "Materia_id_ciclo_fkey" FOREIGN KEY ("id_ciclo") REFERENCES "Ciclo"("id_ciclo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Docente_Materia" ADD CONSTRAINT "Docente_Materia_id_docente_fkey" FOREIGN KEY ("id_docente") REFERENCES "Docente"("id_docente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Docente_Materia" ADD CONSTRAINT "Docente_Materia_id_materia_fkey" FOREIGN KEY ("id_materia") REFERENCES "Materia"("id_materia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Docente_Materia" ADD CONSTRAINT "Docente_Materia_id_periodo_fkey" FOREIGN KEY ("id_periodo") REFERENCES "Periodo"("id_periodo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante_Materia" ADD CONSTRAINT "Estudiante_Materia_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "Estudiante"("id_estudiante") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante_Materia" ADD CONSTRAINT "Estudiante_Materia_id_materia_fkey" FOREIGN KEY ("id_materia") REFERENCES "Materia"("id_materia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante_Materia" ADD CONSTRAINT "Estudiante_Materia_id_periodo_fkey" FOREIGN KEY ("id_periodo") REFERENCES "Periodo"("id_periodo") ON DELETE RESTRICT ON UPDATE CASCADE;
