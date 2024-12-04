// String Helpers
export const capitalizeFirst = (str: string): string => 
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const slugify = (text: string): string =>
  text.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .trim();

// Date Helpers
export const formatDate = (date: Date): string => 
  new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isDateValid = (date: any): boolean => 
  date instanceof Date && !isNaN(date.getTime());

// Validation Helpers
export const isValidEmail = (email: string): boolean => 
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidPassword = (password: string): boolean => 
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

// Number Helpers
export const formatCurrency = (amount: number, currency: string = 'USD'): string =>
  new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency 
  }).format(amount);

export const roundToDecimals = (num: number, decimals: number = 2): number =>
  Number(Math.round(Number(num + 'e' + decimals)) + 'e-' + decimals);

// Array Helpers
export const removeDuplicates = <T>(arr: T[]): T[] => [...new Set(arr)];

export const groupBy = <T>(arr: T[], key: keyof T): { [key: string]: T[] } =>
  arr.reduce((acc, item) => {
    const groupKey = String(item[key]);
    acc[groupKey] = acc[groupKey] || [];
    acc[groupKey].push(item);
    return acc;
  }, {} as { [key: string]: T[] });

// Object Helpers
export const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> =>
  keys.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {} as Pick<T, K>);

export const omit = <T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as K))
  ) as Omit<T, K>;

// Storage Helpers
export const setLocalStorage = <T>(key: string, value: T): void =>
  localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

// URL Helpers
export const getQueryParams = (): { [key: string]: string } =>
  Object.fromEntries(new URLSearchParams(window.location.search));

export const buildUrl = (base: string, params: { [key: string]: string }): string => {
  const url = new URL(base);
  Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
  return url.toString();
};

// Error Helpers
export const createError = (message: string, code?: string): Error => {
  const error = new Error(message);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (code) (error as any).code = code;
  return error;
};

// File Helpers
export const getFileExtension = (filename: string): string =>
  filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

// Async Helpers
export const delay = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

export const retry = async <T>(
  fn: () => Promise<T>,
  attempts: number = 3,
  delay: number = 1000
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (attempts <= 1) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return retry(fn, attempts - 1, delay);
  }
};
