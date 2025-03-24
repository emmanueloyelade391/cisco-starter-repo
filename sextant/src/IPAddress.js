import { useEffect, useState } from 'react';
import axios from 'axios';

const IPAddress = ({ type }) => {
  const [ip, setIp] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const url =
          type === 'ipv4'
            ? 'https://api.ipify.org?format=json'
            : 'https://api64.ipify.org?format=json';

        const response = await axios.get(url);
        setIp(response.data.ip);
      } catch (err) {
        setError('Failed to fetch IP address');
        console.error(err);
      }
    };

    fetchIP();
  }, [type]);

  return (
    <div className="p-4 bg-blue-100 rounded-xl shadow-md">
      <h3 className="text-blue-600 font-semibold">
        {type === 'ipv4' ? 'IPv4 Address' : 'IPv6 Address'}
      </h3>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : ip ? (
        <p className="text-blue-800 font-mono">{ip}</p>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default IPAddress;