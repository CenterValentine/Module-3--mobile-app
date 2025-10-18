// import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNav } from "./NavigationProvider";
import Home from "../screens/HomeScreen";
import GardenPlanner from "../screens/PlannerScreen";
import Settings from "../screens/SettingsScreen";

export const Layout = () => {
    const { route } = useNav();

const Current = {
  home: Home,
  plan: GardenPlanner,
  settings: Settings
} [route] || Home;

const ActiveScreen = Current;

return <ActiveScreen />;
};


