import React, {  useCallback } from "react";
import { View, Pressable, StyleSheet, LayoutChangeEvent, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNav } from "./NavigationProvider";

export const NavOverlay: React.FC = () => {
    const inset = useSafeAreaInsets();
      const { setNavHeight, route, setRoute } = useNav();
    const onLayout = useCallback((e: LayoutChangeEvent) => {
        const h = e.nativeEvent.layout.height;
        setNavHeight(h);
    }, [setNavHeight]);

    return (
    
    <View onLayout={onLayout} style={[styles.wrap, { paddingBottom: inset.bottom }]}>
        {[
        { key: "home", label: "Home"  },
        { key: "plan", label: "Plan" },
        { key: "settings", label: "Settings" },
      ].map(tab => (
        <Pressable
          key={tab.key}
          onPress={() => setRoute(tab.key)}
          style={[styles.item, route === tab.key && styles.active]}
        >
          <Text>{tab.label}</Text>
        </Pressable>
      ))}
    </View>
)}

const styles = StyleSheet.create(
    {
        wrap: {
            position: "absolute",
            left: 0, right: 0, bottom: 0,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
            borderTopWidth: StyleSheet.hairlineWidth,
            zIndex: 9999,
            // elevation: 10,
            paddingHorizontal: 12,
            paddingTop: 8,
        },
        item : {
            paddingVertical: 10,
            paddingHorizontal: 16,
            borderRadius: 12
        },
        active : {
            backgroundColor: "#eee" 
        }
    }
)