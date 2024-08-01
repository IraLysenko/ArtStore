import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run art-store:serve',
        production: 'nx run art-store:preview',
      },
      ciWebServerCommand: 'nx run art-store:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
