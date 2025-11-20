# 🚀 Expo TypeScript Template

A production-ready, modern Expo template with the 2025 gold standard stack, featuring best practices and a complete setup for building scalable React Native applications.

## 📦 Tech Stack

This template includes:

- **[Expo 54](https://expo.dev/)** - The fastest way to build React Native apps
- **[Expo Router](https://docs.expo.dev/router/introduction/)** - File-based navigation built on React Navigation
- **[TanStack Query v5](https://tanstack.com/query/latest)** - Powerful data fetching and caching
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[NativeWind v2](https://www.nativewind.dev/)** - Tailwind CSS for React Native
- **[TypeScript](https://www.typescriptlang.org/)** - Full type safety and IntelliSense

## ✨ Features

- ✅ File-based routing with Expo Router
- ✅ Type-safe navigation
- ✅ Tailwind CSS styling with NativeWind v2
- ✅ Server state management with TanStack Query
- ✅ Client state management with Zustand
- ✅ Full TypeScript support
- ✅ Example screens demonstrating each technology
- ✅ Production-ready project structure
- ✅ Clean and modern UI examples

## 📁 Project Structure

```
├── app/                    # Expo Router pages (file-based routing)
│   ├── _layout.tsx        # Root layout with providers
│   ├── index.tsx          # Home screen
│   ├── about.tsx          # About page (TanStack Query demo)
│   └── counter.tsx        # Counter page (Zustand demo)
├── components/            # Reusable components
├── stores/                # Zustand stores
│   └── counterStore.ts    # Example counter store
├── hooks/                 # Custom React hooks
├── assets/                # Images, fonts, etc.
├── global.css             # Global Tailwind styles
├── tailwind.config.js     # Tailwind configuration
├── metro.config.js        # Metro bundler config (NativeWind)
└── app.json              # Expo configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) app on your mobile device (for testing)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yuxz/expo-typescript-template.git
cd expo-typescript-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
npm run android    # Run on Android
npm run ios        # Run on iOS (macOS only)
npm run web        # Run on Web
```

## 📱 Demo Pages

### Home Screen (`app/index.tsx`)
- Overview of the tech stack
- Navigation to demo pages
- Styled with NativeWind/Tailwind CSS

### About Page (`app/about.tsx`)
- Demonstrates TanStack Query
- Fetches and caches data from an API
- Shows loading, error, and success states
- Refresh functionality

### Counter Page (`app/counter.tsx`)
- Demonstrates Zustand state management
- Persistent state across navigation
- Simple increment/decrement/reset actions

## 🎨 Styling with NativeWind

This template uses NativeWind v2, which brings Tailwind CSS to React Native:

```tsx
<View className="flex-1 bg-gray-50 items-center justify-center p-6">
  <Text className="text-2xl font-bold text-blue-600">
    Hello World
  </Text>
</View>
```

## 🔄 State Management

### Zustand (Client State)

Create a store in `stores/`:

```typescript
import { create } from 'zustand';

interface MyStore {
  value: string;
  setValue: (value: string) => void;
}

export const useMyStore = create<MyStore>((set) => ({
  value: '',
  setValue: (value) => set({ value }),
}));
```

### TanStack Query (Server State)

Use in your components:

```typescript
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['myData'],
  queryFn: fetchMyData,
});
```

## 🗺️ Navigation with Expo Router

Add new pages by creating files in the `app/` directory:

- `app/profile.tsx` → `/profile` route
- `app/settings/index.tsx` → `/settings` route
- `app/settings/[id].tsx` → `/settings/123` dynamic route

Navigate using the `Link` component:

```tsx
import { Link } from 'expo-router';

<Link href="/profile">Go to Profile</Link>
```

Or programmatically:

```tsx
import { router } from 'expo-router';

router.push('/profile');
```

## 🛠️ Configuration

### Tailwind (tailwind.config.js)
Customize your design system by editing `tailwind.config.js`.

### TypeScript (tsconfig.json)
Strict mode is enabled by default. Adjust as needed.

### Expo (app.json)
Configure app name, splash screen, icons, and more in `app.json`.

## 📦 Building for Production

### Development Build
```bash
npx expo prebuild
npx expo run:android
npx expo run:ios
```

### EAS Build (Recommended)
```bash
npm install -g eas-cli
eas login
eas build --platform all
```

## 🧪 Testing

Add your preferred testing library:

```bash
# Jest + React Native Testing Library
npm install --save-dev jest @testing-library/react-native

# Detox for E2E testing
npm install --save-dev detox
```

## 🔧 Troubleshooting

### Web Platform Issues
The web platform may have issues with NativeWind's CSS processing. This template is optimized for iOS and Android. For web-first apps, consider using a different styling solution.

### Metro Bundler Cache Issues
If you encounter unexpected errors, try clearing the Metro bundler cache:
```bash
npx expo start --clear
```

### TypeScript Errors
Make sure all dependencies are installed:
```bash
npm install
npx expo install --fix
```

### Build Issues
For native builds, you may need to run:
```bash
npx expo prebuild --clean
```

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Docs](https://docs.expo.dev/router/introduction/)
- [TanStack Query Docs](https://tanstack.com/query/latest/docs/react/overview)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [React Native Docs](https://reactnative.dev/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

This template combines best practices from the React Native community and leverages the amazing work of:
- Expo team
- TanStack team
- Zustand maintainers
- NativeWind team
- React Native community

---

**Happy coding!** 🎉
