# Monorepo + Expo + pnpm + Vite Setup — Lessons Learned

## 🧩 1. Architectural Foundations
- **Separation of concerns**: Keep web (`vite`) and mobile (`expo`) apps distinct, sharing logic through a `core` package.  
- **Workspace linking**: `pnpm` workspaces + `turbo` pipelines allow apps to share code efficiently while keeping builds isolated.
- **Core principle**: A well-structured monorepo balances *modularity* (each app independent) and *interdependency* (shared logic via packages).

---

## ⚙️ 2. Build and Module Resolution
- **The `dist` directory matters**: Shared libraries like `@project/core` must be built before any app imports them. Metro or Vite can’t consume TypeScript directly without a compiled output.
- **Turbo pipeline rule**: If `turbo.json` says `"dependsOn": ["^dev"]`, every dependency must define a `"dev"` script.  
  → Otherwise, `turbo run dev` skips watching that package.
- **Principle**: Always ensure a consistent entry point (`main`, `module`, `types`) exists and points to built files.

---

## 🧠 3. Understanding Metro (Expo’s bundler)
- **Metro ≠ Webpack/Vite** — it’s optimized for React Native, not standard Node resolution.  
  → It doesn’t automatically follow symlinks or multiple `node_modules` layers.  
- **Problem**: `pnpm` uses symlinks + flat storage = Metro can’t find packages unless explicitly told how.  
- **Solution**:  
  - `unstable_enableSymlinks = true` (follow workspace links)  
  - Add `workspaceRoot` to `watchFolders` (so Metro reloads shared code)  
  - Define `nodeModulesPaths` and `extraNodeModules` (so it can find deps at the root)

**Principle**: Tell Metro *where* to look, *what* to watch, and *how* to resolve packages — never assume Node’s defaults apply.

---

## 🧱 4. Babel Runtime Issues (and the “InteropRequireDefault” Error)
- **Symptom**: `Unable to resolve @babel/runtime/helpers/interopRequireDefault`  
- **Root cause**:  
  - Missing `@babel/runtime` package (Metro requires it for transpiled ES helpers).  
  - Babel misconfiguration (`babel.config.js` missing or misplaced).  
  - Non-hoisted package layout confusing Metro.  
- **Resolution path**:  
  1. Install `@babel/runtime` (root or mobile).  
  2. Add `babel.config.js` in `apps/mobile/`.  
  3. Configure Metro to follow pnpm symlinks.  
- **Principle**: Runtime helpers are a *Babel dependency*, not part of React Native. Babel needs to know where they live and how to resolve them.

---

## 🪄 5. When to Hoist (and Why You Avoided It)
- **Hoisting** (putting all deps in root `node_modules`) is a quick fix but hides deeper structure issues.
- You learned to fix this *the correct way*:
  - Proper Metro config (symlinks + paths)
  - Consistent runtime and build dependencies
  - Correct dependency declarations (`peerDependencies` vs `dependencies`)
- **Principle**: Hoisting should never be required when the dependency tree and resolver config are correct.

---

## 🔍 6. Debugging Mindset — How You Solved It
1. **Read the error literally**: “Cannot resolve entry file,” “Unable to resolve module” — always about missing paths or builds.  
2. **Work bottom-up**: Check file existence, package.json fields, build artifacts.  
3. **Use `require.resolve()`** to confirm what Node sees.  
4. **Understand the bundler’s perspective**, not just your code’s structure.  
5. **Eliminate one variable at a time**: build output, Babel config, Metro resolver, then dependencies.

**Principle**: Don’t just patch symptoms — test assumptions about how each layer (pnpm, Metro, Babel) *finds files*.

---

## 🧭 7. Core Monorepo Principles to Remember
- **Single truth of source**: Shared code lives once (`@project/core`), consumed via workspace linking.  
- **Clear contracts**: Each package exposes a build entry (`dist/index.js`) and `types/index.d.ts`.  
- **Explicit boundaries**: Apps shouldn’t import from another app — only from `core`.  
- **Controlled startup**: Run only the process you’re debugging (`pnpm dev:web` or `pnpm dev:mobile`), not the whole pipeline.

---

## 🧩 8. Practical Commands You Learned
| Purpose | Command |
|----------|----------|
| Build shared core | `pnpm --filter @project/core build` |
| Start mobile only | `pnpm dev:mobile` |
| Clear Metro cache | `expo start --clear` |
| Check Babel helper resolution | `node -e "require.resolve('@babel/runtime/helpers/interopRequireDefault')"` |
| Accept Xcode license | `sudo xcodebuild -license accept` |
| Set developer path | `sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer` |

---

## 🧠 9. Meta-Lessons (Teacher’s Perspective)
- The tools (`pnpm`, `Turbo`, `Metro`, `Vite`, `Expo`) each have **different module resolution expectations**. Mastery is about understanding *where they intersect*.  
- The most subtle bugs come from **tooling boundaries**, not from your code.  
- The best developers learn to **debug the ecosystem**, not just the app.  
- Your workflow embodies the principle:  
  > “Understand the resolver, and you understand the runtime.”
