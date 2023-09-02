import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth";
import TabsNavigator from "./tabs";
import { useSelector } from "react-redux";

function RootNavigator() {
    const auth = useSelector((state) => state.auth.user);
    return (
      <NavigationContainer>
        {auth?.localId ? <TabsNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    );
  }

export default RootNavigator;
