import OfflinePage from "Offline";
import './App.css';
import LandingPage from "./LandingPage";
import { useEffect, useState } from "react";
import TotalScoreCard from "components/TotalScoreCard";
import PlayerSection from "components/PlayerSection";

function App() {
  const [offline, setOffline] = useState(false);
  const [prompt, setPrompt] = useState(null);

  const showPrompt = (e) => {
    console.log("beforeinstallprompt event received", e);
    if (prompt) return;
    e.preventDefault();
    setPrompt(e);
  };

  useEffect(() => {
    const handleOnline = () => setOffline(false);
    const handleOffline = () => setOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("beforeinstallprompt", showPrompt);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("beforeinstallprompt", showPrompt);
    };
  }, []);

  const handleInstall = () => {
    if (!prompt) return;
    prompt.prompt();
  };

  return (
    <div className="app">
      {offline ? (
        <OfflinePage />
      ) : (
        <LandingPage disableInstall={!prompt} handleInstall={handleInstall} />
      )}
    </div>
  );
}

export default App;
