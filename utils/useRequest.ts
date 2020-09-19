import { useState } from 'react';
import request from './request';

type ReturnType = {
  data: any;
  isLoading: boolean;
  progress: number;
  error: string | null;
  get: (url: string, params?: any) => Promise<void>;
};

function useRequest(): ReturnType {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState();
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const handleDownloadProgress = (event: ProgressEvent) => {
    if (event.lengthComputable) {
      const completed = Math.round((event.loaded * 100) / event.total);
      setProgress(completed);
    }
  };

  async function get(url: string, params?: any): Promise<void> {
    try {
      setProgress(0);
      setLoading(true);
      const api = request();
      const response = await api.get(url, {
        params,
        onDownloadProgress: handleDownloadProgress,
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
      setProgress(0);
    }
  }

  return { data, isLoading, progress, error, get };
}
export default useRequest;
