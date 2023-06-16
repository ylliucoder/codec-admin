function convertEnv(envOptions: Record<string, string>) {
  const result = {};
  Object.entries(envOptions).forEach(([envKey, envValue]) => {
    const key = envKey.toUpperCase().trim();
    const value = envValue.toLowerCase().trim();
    if (value === "true") result[key] = true;
    else if (value === "false") result[key] = false;
    else if (/^[0-9]+$/.test(value)) result[key] = parseInt(value);
    else result[key] = envValue;
  });
  return result;
}

export { convertEnv };
