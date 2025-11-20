import { View, Text, Pressable, ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export default function About() {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        <View className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <Text className="text-2xl font-bold text-gray-800 mb-3">
            📚 About Page
          </Text>
          <Text className="text-base text-gray-600 mb-4">
            This page demonstrates TanStack Query (React Query) for data fetching
            and caching.
          </Text>

          <Pressable
            onPress={() => refetch()}
            disabled={isFetching}
            className={`rounded-xl py-3 px-4 ${
              isFetching ? "bg-gray-400" : "bg-blue-600 active:bg-blue-700"
            }`}
          >
            <Text className="text-white text-center font-semibold">
              {isFetching ? "Refreshing..." : "Refresh Posts"}
            </Text>
          </Pressable>
        </View>

        {isLoading && (
          <View className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <Text className="text-blue-800 text-center font-semibold">
              Loading posts...
            </Text>
          </View>
        )}

        {isError && (
          <View className="bg-red-50 rounded-xl p-6 border border-red-200">
            <Text className="text-red-800 text-center font-semibold">
              Error loading posts. Please check your internet connection.
            </Text>
          </View>
        )}

        {data && (
          <View className="gap-4">
            <Text className="text-lg font-bold text-gray-800">
              Latest Posts (Cached by TanStack Query)
            </Text>
            {data.map((post) => (
              <View
                key={post.id}
                className="bg-white rounded-xl shadow p-4 border border-gray-200"
              >
                <Text className="text-sm font-bold text-blue-600 mb-1">
                  #{post.id}
                </Text>
                <Text className="text-base font-semibold text-gray-800 mb-2">
                  {post.title}
                </Text>
                <Text className="text-sm text-gray-600" numberOfLines={3}>
                  {post.body}
                </Text>
              </View>
            ))}
          </View>
        )}

        <View className="mt-6">
          <Link href="/" asChild>
            <Pressable className="bg-gray-600 rounded-xl py-4 px-6 active:bg-gray-700">
              <Text className="text-white text-center font-semibold">
                ← Back to Home
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
