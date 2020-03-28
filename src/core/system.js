import { pick } from './pick';

const Defaults = {
  Breakpoints: ["40em", "52em", "64em"]
};

const system = (breakpoints) => value => {
  if (!Array.isArray(breakpoints)) {
    throw new Error('Breakpoints should be an array of media');
  }
  const getInitialData = useCallback(() => {
    return pick(breakpoints, value);
  }, [value]);

  const [data, setData] = useState(
    getInitialData(value)
  );

  useEffect(() => {
    getInitialData();
  }, [getInitialData]);

  useEffect(() => {
    const handleResize = () => {
      const newData = pick(breakpoints, value);
      setData(newData);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [value]);
  return data;
};

const systemWithDefaults = system(Defaults.Breakpoints);
export { systemWithDefaults as system };
