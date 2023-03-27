interface StorageAdapter {
    getItem(key: string): any;
    setItem(key: string, value: any): void;
    removeItem(key: string): void;
    clear(): void;
}

const LocalStorageAdapter: StorageAdapter = {
    getItem(key: string): any {
        const value = localStorage.getItem(key);

        if (value !== null) {
            return JSON.parse(value);
        }

        return null;
    },

    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    },

    removeItem(key: string): void {
        localStorage.removeItem(key);
      },
    
      clear(): void {
        localStorage.clear();
      }
};

export default LocalStorageAdapter;