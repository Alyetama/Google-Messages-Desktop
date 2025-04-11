const { execSync } = require('child_process');
const command = `electron-builder`;
execSync(command, { stdio: 'inherit' });
