
declare namespace Intl {
  class ListFormat {
    constructor(locale?: string, options?: { style?: 'long' | 'short' | 'narrow', type?: 'conjunction' | 'disjunction' | 'unit' });
    public format(items: string[]): string;
  }
}