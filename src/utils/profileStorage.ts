
interface ProfileEntry {
  url: string;
  timestamp: string;
  rememberMe: boolean;
}

export const saveProfileUrl = (url: string, rememberMe: boolean) => {
  const entry: ProfileEntry = {
    url,
    timestamp: new Date().toISOString(),
    rememberMe
  };
  
  // Get existing entries
  const existingEntries = getProfileEntries();
  
  // Add new entry
  const updatedEntries = [entry, ...existingEntries];
  
  // Save to localStorage
  localStorage.setItem('arcadeProfileEntries', JSON.stringify(updatedEntries));
  
  console.log('Profile URL saved:', entry);
};

export const getProfileEntries = (): ProfileEntry[] => {
  try {
    const stored = localStorage.getItem('arcadeProfileEntries');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading profile entries:', error);
    return [];
  }
};

export const clearProfileEntries = () => {
  localStorage.removeItem('arcadeProfileEntries');
};
