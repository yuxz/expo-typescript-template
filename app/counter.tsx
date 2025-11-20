import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { useCounterStore } from "../stores/counterStore";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <View className="flex-1 bg-gray-50 items-center justify-center p-6">
      <View className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <Text className="text-2xl font-bold text-center mb-3 text-gray-800">
          🔢 Counter Demo
        </Text>
        <Text className="text-base text-center mb-8 text-gray-600">
          Using Zustand for state management
        </Text>

        <View className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 mb-8 items-center">
          <Text className="text-6xl font-bold text-white mb-2">{count}</Text>
          <Text className="text-lg text-green-100">Current Count</Text>
        </View>

        <View className="gap-4">
          <Pressable
            onPress={increment}
            className="bg-green-600 rounded-xl py-4 px-6 active:bg-green-700"
          >
            <Text className="text-white text-center font-semibold text-lg">
              ➕ Increment
            </Text>
          </Pressable>

          <Pressable
            onPress={decrement}
            className="bg-red-600 rounded-xl py-4 px-6 active:bg-red-700"
          >
            <Text className="text-white text-center font-semibold text-lg">
              ➖ Decrement
            </Text>
          </Pressable>

          <Pressable
            onPress={reset}
            className="bg-gray-600 rounded-xl py-4 px-6 active:bg-gray-700"
          >
            <Text className="text-white text-center font-semibold text-lg">
              🔄 Reset
            </Text>
          </Pressable>
        </View>

        <View className="mt-8 pt-6 border-t border-gray-200">
          <Text className="text-sm text-gray-600 text-center mb-4">
            State is managed by Zustand and persists across navigations
          </Text>
          <Link href="/" asChild>
            <Pressable className="bg-blue-600 rounded-xl py-3 px-6 active:bg-blue-700">
              <Text className="text-white text-center font-semibold">
                ← Back to Home
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}
