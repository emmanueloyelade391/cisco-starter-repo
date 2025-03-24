import { useEffect, useState } from 'react';

const Latency = () => {
  const [latency, setLatency] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:55455');

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.timestamp) {
          const packetTimestamp = data.timestamp;
          const currentTimestamp = Date.now();
          const calculatedLatency = currentTimestamp - packetTimestamp;
          setLatency(calculatedLatency);
        }
      } catch (err) {
        console.error('Error parsing WebSocket message:', err);
      }
    };

    socket.onerror = (err) => {
      console.error('WebSocket error:', err);
      setError('WebSocket connection error');
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup on unmount
    return () => socket.close();
  }, []);

  return (
    <div className="p-4 bg-blue-100 rounded-xl shadow-md">
      <h3 className="text-blue-600 font-semibold">Packet Latency</h3>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : latency !== null ? (
        <p className="text-blue-800 font-mono">{latency} ms</p>
      ) : (
        <p className="text-gray-500">Waiting for packets...</p>
      )}
    </div>
  );
};

export default Latency;