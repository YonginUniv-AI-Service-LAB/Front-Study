import React from 'react';
import { registerRootComponent } from 'expo';
import MainScreen from './MainScreen';

/**
 * Entry point of the Expo app.
 * You can add providers (e.g., Redux, Context) or navigation here if needed.
 */
function App() {
  return <MainScreen />;
}

// Registers the main component for Expo
registerRootComponent(App);

export default App;
