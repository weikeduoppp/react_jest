import { useCallback, useState } from 'react';

export default function useUpdate(): () => void{
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
}
