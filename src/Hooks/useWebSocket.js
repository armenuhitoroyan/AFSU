// useWebSocket.js
import { useState, useEffect } from "react";
import io from "socket.io-client";

export const useWebSocket = (url) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionError, setConnectionError] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Առցանց/անցանց կարգավիճակի ստուգում
    const handleOnline = () => {
      setIsOnline(true);
      setupWebSocket();
    };

    const handleOffline = () => {
      setIsOnline(false);
      setIsConnected(false);
      socket?.disconnect();
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // WebSocket կապի կարգավորում
    const setupWebSocket = () => {
      if (!isOnline) return;

      const newSocket = io(url, {
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      });

      newSocket.on("connect", () => {
        setIsConnected(true);
        setConnectionError(null);
        console.log("WebSocket միացված է");
      });

      newSocket.on("connect_error", (error) => {
        setIsConnected(false);
        setConnectionError(error);
        console.error("WebSocket կապի սխալ:", error);
      });

      newSocket.on("disconnect", (reason) => {
        setIsConnected(false);
        console.log("WebSocket կապը կորել է:", reason);
      });

      newSocket.on("receiveMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    };

    // Սկզբնական կարգավորում
    setupWebSocket();

    // Մաքրում ենք իրադարձությունները
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      socket?.disconnect();
    };
  }, [url, isOnline]);

  // Հաղորդագրություն ուղարկելու ֆունկցիա
  const sendMessage = (message) => {
    if (socket && isConnected) {
      socket.emit("sendMessage", message);
    }
  };

  return {
    socket,
    isConnected,
    isOnline,
    connectionError,
    messages,
    sendMessage,
  };
};
