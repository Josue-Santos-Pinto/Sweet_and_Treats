type MainStylesType = {
  background: {
    primary: string;
    secundary: string;
    tertiary: string;
  };
  text: {
    color: {
      primary: string;
      secundary: string;
    };
    size: {
      title: string;
      subtitle: string;
      small: string;
    };
    family: {
      waterbrush: string;
    };
  };
};

export const MainStyles: MainStylesType = {
  background: {
    primary: '#F8F0E5',
    secundary: '#EADBC8',
    tertiary: '#DAC0A3',
  },
  text: {
    color: {
      primary: '#000',
      secundary: '#DDD',
    },
    size: {
      title: '28px',
      subtitle: '10px',
      small: '6px',
    },
    family: {
      waterbrush: 'WaterBrush-Regular',
    },
  },
};
