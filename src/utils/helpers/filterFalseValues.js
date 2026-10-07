export const filterFalseValues = obj => {
  const filteredEntries = Object.entries(obj).filter(
    ([, value]) => value !== false && value != null && value !== ''
  );

  const params = Object.fromEntries(filteredEntries);
  if (params.transmission === true) params.transmission = 'automatic';
  if (params.location) params.location = params.location.trim().split(',')[0].trim();
  return params;
};
