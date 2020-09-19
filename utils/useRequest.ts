import { useState } from 'react';
import request from './request';

type ReturnType = {
  data: any;
  isLoading: boolean;
  error: string | null;
  get: (url: string, params?: any) => Promise<void>;
};

function useRequest(): ReturnType {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState();
  const [error, setError] = useState<string | null>(null);

  async function get(url: string, params?: any): Promise<void> {
    try {
      setLoading(true);
      const api = request();
      const response = await api.get(url, {
        params,
      });

      if (!response.data) {
        throw new Error('Failed to fetch data');
      }
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { data, isLoading, error, get };
}
export default useRequest;
