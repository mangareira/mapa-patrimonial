import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "src/app/generated/prisma/**/*", // Ignora toda a pasta do Prisma Client
      "**/prisma-client*" // Padrão adicional para outros arquivos relacionados
    ]
  }
];

export default eslintConfig;
