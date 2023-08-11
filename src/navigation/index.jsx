import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "./tabs";
import AuthNavigator from "./auth";
import { useState } from "react";

function RootNavigator() {
    const [userId, setUserId] = useState(null);
    return (
        <NavigationContainer>
            {userId ? <TabsNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default RootNavigator;
