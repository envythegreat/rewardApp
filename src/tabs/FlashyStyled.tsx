import React, { useMemo } from 'react';
import { SafeAreaProvider, useSafeAreaInsets  } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar, {
  TabsConfig,
  FlashyTabBarItemConfig,
} from '@gorhom/animated-tabbar';
import HomeSVG from '../component/icons/HomeSVG';
import ProfileSVG from '../component/icons/ProfileSVG';
import { MainTabsParams } from '../authentication/Routes';
import Home from './Home'
import Settings from './Settings'
import { Platform } from 'react-native';
import Tabbar from './Tabbar';
const Tab = createBottomTabNavigator<MainTabsParams>();

const tabs: TabsConfig<FlashyTabBarItemConfig, MainTabsParams> = {
  Home: {
    labelStyle: {
      color: 'white',
    },
    icon: {
      component: HomeSVG,
      color: '#444',
    },
    indicator: {
      size: 4,
      color: '#5B37B7',
    },
  },
  Settings: {
    labelStyle: {
      color: 'white',
    },
    icon: {
      component: ProfileSVG,
      color: '#444',
    },
    indicator: {
      size: 4,
      color: '#1194AA',
    },
  },
  Tabbar: {
    labelStyle: {
      color: 'white',
    },
    icon: {
      component: ProfileSVG,
      color: '#444',
    },
    indicator: {
      size: 4,
      color: '#1194AA',
    },
  },
};

const FlashyStyledScreen = () => {
  // hooks
  const { bottom } = useSafeAreaInsets();

  // memos
  const screenPaddingBottom = useMemo(() => {
    // icon size + margin padding + outer space + inner space + screen bottom padding
    return 20 + bottom + 12 * 2 + 12 * 2 + 12;
  }, [bottom]);

  const tabBarOptions = useMemo(
    () => ({
      safeAreaInsets: {
        bottom: 0,
      },
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 16,
        marginLeft: 32,
        marginRight: 32,
        marginBottom: bottom,
        backgroundColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      },
    }),
    [bottom]
  );

  // render
  return (
    <SafeAreaProvider style={{marginBottom: Platform.OS === 'ios'? 1 : 10}}>
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      tabBar={props => (
        <AnimatedTabBar
          preset="flashy"
          tabs={tabs}
          iconSize={20}
          itemOuterSpace={12}
          itemInnerSpace={12}
          {...props}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        initialParams={{
          backgroundColor: '#000',
          nextScreen: 'Settings',
          paddingBottom: screenPaddingBottom,
        }}
        component={Home}
      />
      <Tab.Screen
        name="Settings"
        initialParams={{
          backgroundColor: '#000',
          nextScreen: 'Tabbar',
          paddingBottom: screenPaddingBottom,
        }}
        component={Settings}
      />
      <Tab.Screen
        name="Tabbar"
        initialParams={{
          backgroundColor: '#000',
          nextScreen: 'Home',
          paddingBottom: screenPaddingBottom,
        }}
        component={Tabbar}
      />
    </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default FlashyStyledScreen;