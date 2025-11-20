import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 bg-gray-50 items-center justify-center p-6">
      <View className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <Text className="text-4xl font-bold text-center mb-2 text-blue-600">
          🚀 Expo Template
        </Text>
        <Text className="text-lg text-center mb-8 text-gray-600">
          Production-ready stack for 2025
        </Text>

        <View className="space-y-4 gap-4">
          <View className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <Text className="text-sm font-semibold text-blue-800 mb-1">
              ✅ Expo 54 + Router
            </Text>
            <Text className="text-xs text-blue-600">File-based navigation</Text>
          </View>

          <View className="bg-purple-50 rounded-xl p-4 border border-purple-200">
            <Text className="text-sm font-semibold text-purple-800 mb-1">
              ✅ TanStack Query
            </Text>
            <Text className="text-xs text-purple-600">Data fetching & caching</Text>
          </View>

          <View className="bg-green-50 rounded-xl p-4 border border-green-200">
            <Text className="text-sm font-semibold text-green-800 mb-1">
              ✅ Zustand
            </Text>
            <Text className="text-xs text-green-600">State management</Text>
          </View>

          <View className="bg-pink-50 rounded-xl p-4 border border-pink-200">
            <Text className="text-sm font-semibold text-pink-800 mb-1">
              ✅ NativeWind v4
            </Text>
            <Text className="text-xs text-pink-600">Tailwind CSS styling</Text>
          </View>

          <View className="bg-orange-50 rounded-xl p-4 border border-orange-200">
            <Text className="text-sm font-semibold text-orange-800 mb-1">
              ✅ TypeScript
            </Text>
            <Text className="text-xs text-orange-600">Full type safety</Text>
          </View>
        </View>

        <View className="mt-8 gap-3">
          <Link href="/about" asChild>
            <Pressable className="bg-blue-600 rounded-xl py-4 px-6 active:bg-blue-700">
              <Text className="text-white text-center font-semibold text-base">
                View About Page
              </Text>
            </Pressable>
          </Link>

          <Link href="/counter" asChild>
            <Pressable className="bg-green-600 rounded-xl py-4 px-6 active:bg-green-700">
              <Text className="text-white text-center font-semibold text-base">
                Try Counter (Zustand)
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}
