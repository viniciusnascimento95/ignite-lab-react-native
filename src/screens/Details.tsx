import { useRoute } from "@react-navigation/native";
import { Text, VStack } from "native-base";
import { Header } from "../components/Header";

type RouteParamns = {
  orderId: string;
};

export function Details() {
  const route = useRoute();
  const { orderId } = route.params as RouteParamns;
  return (
    <VStack flex={1} bg="gray.700">
      <Header title="solicitação" />
      <Text color="white">{orderId}</Text>
    </VStack>
  );
}
