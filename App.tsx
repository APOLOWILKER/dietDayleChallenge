import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { useFonts } from "expo-font";
import { ActivityIndicator, StatusBar } from "react-native";
import theme from "src/theme";
import { ThemeProvider } from "styled-components";
import { Home } from "./src/screens/Home";

export default function App() {
   const [ fontsLoaded ] = useFonts({Nunito_400Regular, Nunito_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle={"light-content"}
      />
      {
        fontsLoaded ? (
          <Home />
        ) : (
          <ActivityIndicator/>
        )
      }

    </ThemeProvider>
    
  );
}
