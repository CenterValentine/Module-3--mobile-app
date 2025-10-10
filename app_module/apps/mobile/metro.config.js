// Metro configuration for Expo in a pnpm monorepo without hoisting.
// - Follows workspace symlinks
// - Resolves modules from the repo root node_modules first
// - Watches the whole workspace so linked packages rebuild and hot-reload

const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname; // apps/mobile
const workspaceRoot = path.resolve(projectRoot, '../..'); // repo root (app_module)

/** @type {import('metro-config').ConfigT} */
const config = getDefaultConfig(projectRoot);

// 1) Watch the whole workspace so changes in packages (e.g., @project/core) trigger reloads
config.watchFolders = [workspaceRoot];

// 2) Ensure Metro resolves modules from the workspace root node_modules first
config.resolver = config.resolver || {};
config.resolver.nodeModulesPaths = [
  path.join(workspaceRoot, 'node_modules'),
  path.join(projectRoot, 'node_modules'),
];

// 3) Follow pnpm symlinks so packages resolve correctly without hoisting
config.resolver.unstable_enableSymlinks = true;

// 4) Fallback mapping so ANY module is looked up at the root node_modules
config.resolver.extraNodeModules = new Proxy(
  {},
  {
    get: (target, name) => path.join(workspaceRoot, 'node_modules', name),
  }
);

// 5) Some libraries publish .cjs; include if missing
if (!config.resolver.sourceExts.includes('cjs')) {
  config.resolver.sourceExts.push('cjs');
}

module.exports = config;