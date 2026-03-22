import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  RefreshControl,
  View,
  Image,
} from 'react-native';

import MetalCard from '../components/MetalCard';
import styles from '../styles/HomeScreenStyles';

const HomeScreen = ({navigation}) => {
  const metals = [
    'Gold',
    'Silver',
    'Platinum',
    'Palladium',
  ];

  const [refreshing, setRefreshing] =
    useState(false);

  const [refreshKey, setRefreshKey] =
    useState(0);

  const [lastUpdated, setLastUpdated] =
    useState(new Date());

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshKey(prev => prev + 1);
      setLastUpdated(new Date());
      setRefreshing(false);
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1);
      setLastUpdated(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>

      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Metal Prices
      </Text>

      <Text style={styles.timestamp}>
        Last updated: {' '}
        {lastUpdated.toLocaleTimeString()}
      </Text>

      {metals.map(metal => (
        <MetalCard
          key={metal}
          metal={metal}
          navigation={navigation}
          refreshKey={refreshKey}
        />
      ))}

      <View style={{height: 40}} />

    </ScrollView>
  );
};

export default HomeScreen;
