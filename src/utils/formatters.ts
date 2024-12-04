// Date formatters
export const formatDate = (date: Date | string, locale = 'en-US'): string => {
  const d = new Date(date);
  return d.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
};

export const formatDateTime = (date: Date | string, locale = 'en-US'): string => {
  const d = new Date(date);
  return d.toLocaleString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Number formatters
export const formatCurrency = (amount: number, currency = 'USD', locale = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatNumber = (num: number, locale = 'en-US'): string => {
  return new Intl.NumberFormat(locale).format(num);
};

export const formatPercentage = (value: number, decimals = 2): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

// String formatters
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

// Size formatters
export const formatFileSize = (bytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
};

// Duration formatters
export const formatDuration = (milliseconds: number): string => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ${hours % 24}h`;
  if (hours > 0) return `${hours}h ${minutes % 60}m`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
};

// List formatters
export const formatList = (items: string[], locale = 'en-US'): string => {
  // Fallback implementation if Intl.ListFormat is not available
  if (!('ListFormat' in Intl)) {
    return items.reduce((acc, item, index) => {
      if (index === 0) return item;
      if (index === items.length - 1) return `${acc} and ${item}`;
      return `${acc}, ${item}`;
    }, '');
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new Intl.ListFormat(locale, { style: 'long', type: 'conjunction' }).format(items);
};

// Phone number formatter
export const formatPhoneNumber = (phoneNumber: string, ): string => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1,3})(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  return phoneNumber;
};
