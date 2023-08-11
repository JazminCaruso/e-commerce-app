import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import TabsNavigator from "./tabs";
import AuthNavigator from "./auth";

function RootNavigator() {
    const auth = useSelector((state) => state.auth.user);
    return (
      <NavigationContainer>
        {auth?.localId ? <TabsNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    );
  }

export default RootNavigator;
