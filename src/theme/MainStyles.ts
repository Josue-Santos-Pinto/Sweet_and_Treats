type MainStylesType = {
  background: {
    primary: string;
    secundary: string;
    tertiary: string;
    quartiary: string;
  };
  text: {
    color: {
      primary: string;
      secundary: string;
      white: string;
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
    quartiary: '#0F2C59',
  },
  text: {
    color: {
      primary: '#000',
      secundary: '#212121',
      white: '#FFF',
    },
    size: {
      title: '28px',
      subtitle: '16px',
      small: '12px',
    },
    family: {
      waterbrush: 'WaterBrush-Regular',
    },
  },
};
