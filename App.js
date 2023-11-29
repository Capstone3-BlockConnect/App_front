import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import RootStack from "./src/navigation/Rootstack";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    </RecoilRoot>
  );
}
