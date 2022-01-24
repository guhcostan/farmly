import React, { useState } from 'react';

const ConfigContext = React.createContext({
  darkMode: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDarkMode: () => {},
});

const ConfigProvider: React.FC = ({ children }) => {
  const [darkMode, toggleDarkMode] = useState(false);
  return (
    <ConfigContext.Provider
      value={{
        darkMode,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        toggleDarkMode,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useConfig = () => React.useContext(ConfigContext);
export { ConfigProvider, useConfig };
