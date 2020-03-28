export const pick = breakpoints => value => {
  const defaultValue = Array.isArray(value) ? value[0] : value;

  const mapToBreakpointBaseStructure = (breakpoint, index) => ({
    breakpoint,
    index
  });

  const mapWithMatchMedia = ({ breakpoint, index }) => {
    const mediaQuery = createMediaQuery(breakpoint);
    const { media, matches } = window.matchMedia(mediaQuery);
    return {
      breakpoint,
      index,
      media,
      matches
    };
  };

  const pickOnlyMatchingQueries = ({ matches }) => matches;

  const mediaQueryResult = [...breakpoints]
    .map(mapToBreakpointBaseStructure)
    .map(mapWithMatchMedia)
    .filter(pickOnlyMatchingQueries);

  if (!mediaQueryResult.length) {
    // The default value is always the first item in the array
    // or the value itself if it's not an array
    return defaultValue;
  }

  // Always get the nearest result which is the last item in the array
  const lastMatchedQuery = [...mediaQueryResult].pop();
  // The idea here is to also try to pick the value
  // from its "index" from right to left
  // until we fallback to default value

  if (Array.isArray(value)) {
    return (
      // Added + 1 to skip picking the "base" value which is the first item in the array
      value[lastMatchedQuery.index + 1] ||
      // If above fails, try to pick the specific index
      value[lastMatchedQuery.index] ||
      // If it still fails, let's just get the last item from the array
      value.slice(0).pop()
    );
  } else {
    return value || defaultValue;
  }
};
