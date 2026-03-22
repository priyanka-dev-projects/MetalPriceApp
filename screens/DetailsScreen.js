import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/DetailsScreenStyles';
import {fetchMetalPrice} from '../api/api';

const DetailsScreen = ({route}) => {
  const {metal} = route.params;

  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [time, setTime] = useState('');

  const fetchDetails = async () => {
    setLoading(true);
    setError(false);

    try {
      const data = await fetchMetalPrice();

      setPrice(data.price);
      setTime(
        new Date().toLocaleString(),
      );

      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const openPrice = price
    ? price - 120
    : 0;

  const closePrice = price
    ? price - 80
    : 0;

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading details...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          Failed to load details
        </Text>

        <TouchableOpacity
          style={styles.retryButton}
          onPress={fetchDetails}>
          <Text style={styles.retryText}>
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {metal} Details
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Current Price:
        </Text>

        <Text style={styles.value}>
          ₹ {price}
        </Text>

        <Text style={styles.label}>
          Open Price:
        </Text>

        <Text style={styles.value}>
          ₹ {openPrice}
        </Text>

        <Text style={styles.label}>
          Close Price:
        </Text>

        <Text style={styles.value}>
          ₹ {closePrice}
        </Text>

        <Text style={styles.time}>
          Date & Time:
        </Text>

        <Text style={styles.timeValue}>
          {time}
        </Text>

      </View>

    </View>
  );
};

export default DetailsScreen;
