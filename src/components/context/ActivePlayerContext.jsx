import { createContext, useContext, useState, useEffect } from "react";

const ActivePlayerContext = createContext();

export const ActivePlayerProvider = ({ children }) => {
  const [activePlayer, setActivePlayer] = useState("Lutador 1");

  useEffect(() => {
    const handleKeyChangePlayer = (e) => {
      const isTyping =
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable;

      if (isTyping) return;

      if (e.key.toLowerCase() === "a") {
        setActivePlayer("Lutador 1");
      } else if (e.key.toLowerCase() === "l") {
        setActivePlayer("Lutador 2");
      }
    };

    window.addEventListener("keydown", handleKeyChangePlayer);
    return () => window.removeEventListener("keydown", handleKeyChangePlayer);
  }, []);

  return (
    <ActivePlayerContext.Provider value={{ activePlayer, setActivePlayer }}>
      {children}
    </ActivePlayerContext.Provider>
  );
};

export const useActivePlayer = () => useContext(ActivePlayerContext);
