
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  documents: ['apps/frontend/src/graphql/**/*.{ts,tsx}'],
  generates: {
    'apps/frontend/src/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        avoidOptionals: true,
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
