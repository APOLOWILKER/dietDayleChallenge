import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { Home } from "@screens/Home";
import { useFonts } from "expo-font";
import { ActivityIndicator, StatusBar } from "react-native";
import theme from "src/theme";
import { ThemeProvider } from "styled-components";

export default function App() {
   const [ fontsLoaded ] = useFonts({Nunito_400Regular, Nunito_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      { fontsLoaded ? <Home /> : <ActivityIndicator/> }
      {/* { fontsLoaded ? <Statistics /> : <ActivityIndicator/> } */}

    </ThemeProvider>
    
  );
}
