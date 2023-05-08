-- CreateTable
CREATE TABLE "identificacao" (
    "id" TEXT NOT NULL,
    "nBI" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nomePai" TEXT NOT NULL,
    "nomeMae" TEXT NOT NULL,
    "naturalidade" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "dataDeNascimento" TEXT NOT NULL,
    "altura" TEXT NOT NULL,
    "dataEmicao" TEXT NOT NULL,
    "validade" TEXT NOT NULL,

    CONSTRAINT "identificacao_pkey" PRIMARY KEY ("id")
);
