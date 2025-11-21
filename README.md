
## The Ultimate Expo 51+ Template Architecture


Here is a ready-to-go, production-grade GitHub template with the 2025 gold standard stack:

Expo 51 + Expo Router + TanStack Query + Zustand + NativeWind (Tailwind) + TypeScript.


------

##  I. Architecture: The Modular Approach

The core philosophy of this architecture is the **clear separation of concerns** into three distinct layers, ensuring scalability and maintainability.

### A. The Three-Layer Separation

| **Layer**             | **Role (The "What")**                                        | **Location**                                 | **Key Interaction**                                          |
| --------------------- | ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| **Presentation (UI)** | Renders views and handles immediate user input. **Purely presentational.** | `src/components`, `app/`                     | Receives data and callbacks via **props**.                   |
| **Business Logic**    | Orchestrates data flow, contains filtering/sorting logic, and handles side effects. | `src/hooks`, `src/features/*/hooks`          | Uses **TanStack Query** (Server State) and **Zustand** (Client State). |
| **Data & Services**   | Manages external interactions: API calls, local storage, third-party SDKs. | `src/features/*/api`, `src/lib`, `src/store` | Provides **pure functions** that are consumed by the Business Logic layer. |

### B. Optimal Folder Organization

This structure favors the **feature-sliced design**, grouping related elements for better isolation and context.

```tex
 expo-modern-stack/
├── app/                     # EXPO ROUTER: File-based routing (screens and layouts)
│   ├── (tabs)/              # Grouped routes (e.g., Tab Navigator)
│   ├── products/
│   │   └── [id].tsx         # Dynamic route 
│   └── +not-found.tsx
├── src/
│   ├── assets/              # Images, Fonts, Lottie files.
│   ├── components/          # Global, small, reusable UI elements (Button, Card, Typography).
│   ├── features/            # FEATURE-SLICED ARCHITECTURE: Grouped by domain (auth, products, feed)
│   │   └── products/
│   │       ├── ui/          # ProductCard, ProductList (UI for this feature)
│   │       ├── hooks/       # useProducts, useProduct, useMutateProduct (Feature logic)
│   │       ├── api/         # productService.ts (Feature-specific API calls)
│   │       └── types.ts
│   ├── hooks/               # Common, reusable hooks (useDebounce, useIsMounted)
│   ├── lib/                 # Third-party configurations (queryClient.ts, axios.ts)
│   ├── store/               # Zustand stores (useAppStore.ts, useSettingsStore.ts)
│   └── constants/           # Global constants (queryKeys.ts, colors.ts)
└── ... app.json, tailwind.config.js, 
```

### C. Code Quality & Typing

- **100% TypeScript:** This is **mandatory** for type safety, robust refactoring, and superior developer experience (DX).
- **Modern React:** Stick exclusively to **Functional Components** and **Hooks**. Avoid class components entirely.
- **Import Aliases:** Configure `tsconfig.json` and Babel to use absolute imports (e.g., `import { Button } from '@components/Button'`). This keeps file paths clean and simplifies moving files.
- **Input Validation (Zod):** Use libraries like **Zod** to define and validate schema for API responses and form inputs. This ensures type integrity from the API boundary to the UI.

------

## II. Performance Optimization

Mobile performance requires deliberate effort, mainly focused on minimizing work on the JavaScript thread.

### A. List & Data Efficiency

- **Use `FlashList`:** For almost all lists, prefer `@shopify/flash-list` over the standard `FlatList`. It offers significant performance gains due to its revolutionary memory management and rendering.
- **Virtualization:** When using any list component, ensure it's properly configured with a stable, unique **`keyExtractor`** to enable efficient virtualization and rendering.
- **TanStack Query's Caching:** Its automated caching, de-duplication, and background re-fetching minimize redundant network requests, leading to the single biggest perceived performance gain for API-dependent applications.

### B. Rendering & Memoization

- **Component Memoization:** Use **`React.memo`** for all pure, reusable components to prevent unnecessary re-renders when parent state changes but props remain the same.
- **`useCallback` and `useMemo`:**
  - Use **`useCallback`** to memoize functions passed down to child components, preventing re-renders of the child.
  - Use **`useMemo`** to memoize expensive calculation results or complex objects/arrays used as props or dependencies.
- **Avoid Inline Object Creation:** Never create complex objects, arrays, or functions directly inside the `render` method or component body if they are passed as props, as this destroys memoization.

### C. Asset & Thread Management

- **Native-Thread Animations:** Use **`react-native-reanimated`** and **`react-native-gesture-handler`** exclusively for complex animations and gestures. They run on the native thread, avoiding the JavaScript bottleneck.
- **Image Optimization:** Use **`expo-image`** for native caching, optimized loading, and automatic resizing. Always supply images close to their display dimensions.
- **Remove Console Logs:** Implement a Babel plugin like `babel-plugin-transform-remove-console` to strip all `console.log` calls from **production builds**, as they severely degrade JavaScript thread performance.

------

##  III. Expo Ecosystem Best Practices

Leverage Expo's tooling for superior development and deployment.

- **Expo Router:** Fully commit to the file-based routing system (`app/`). It provides **deep linking, universal web support**, and state management for routes with zero configuration.
- **Expo Application Services (EAS):**
  - **EAS Build:** Use EAS to handle all native builds (iOS/Android). This is the modern, powerful workflow, replacing the deprecated `expo build`.
  - **EAS Update (OTA):** Implement Over-The-Air updates via EAS to deploy JavaScript and asset changes instantly to users without requiring a new App Store review.
- **Dev Clients Over Expo Go:** Use **Expo Dev Clients** (`expo run:android` / `expo run:ios`) for development once you install any custom native modules. This gives you native module support while retaining the powerful Expo development workflow.
- **Environment Variables:** Manage configuration (API URLs, keys, etc.) using `app.config.js` or `app.json` combined with **`expo-constants`**. Never store sensitive keys directly in the compiled application bundle.
- **Platform-Specific Code:** Use **`Platform.OS`** or **`Platform.select()`** for minor stylistic tweaks. For major differences in logic or UI, use the Expo Router naming conventions (`Screen.ios.tsx`, `Screen.android.tsx`).

------

## IV. Template Feature Summary

| **Category**     | **Best Practice Implemented**                      | **Tooling**                          |
| ---------------- | -------------------------------------------------- | ------------------------------------ |
| **Architecture** | Feature-Sliced Design, Three-Layer Separation      | TypeScript                           |
| **State**        | Clear separation of Server and Client state        | **TanStack Query** / **Zustand**     |
| **Navigation**   | Universal, Deep-linkable routing                   | **Expo Router**                      |
| **UI/Styling**   | Utility-first, responsive, and composable styles   | **NativeWind (Tailwind CSS)**        |
| **Performance**  | Native-thread animations, optimized list rendering | **Reanimated, FlashList**            |
| **Validation**   | Type-safe schema definition                        | **Zod** (Recommended Integration)    |
| **CI/CD**        | Automated native builds and instant updates        | **GitHub Actions + EAS Build + OTA** |

### ⚡ How to Use It (30 Seconds)

1. **Create Repo from Template:** Click the link above and click "Use this template" on GitHub.
2. **Clone:** `git clone <https://github.com/yuxz/expo-typescript-template.git>`
3. **Install:** `npm install` (or `yarn`)
4. **Run:** `npx expo start`

