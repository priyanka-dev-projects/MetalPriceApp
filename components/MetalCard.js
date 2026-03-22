import React, {useEffect, useState} from 'react';
import {
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from '../styles/MetalCardStyles';
import {fetchMetalPrice} from '../api/api';

const MetalCard = ({
  metal,
  navigation,
  refreshKey,
}) => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [time, setTime] = useState('');

  const loadPrice = async () => {
    setLoading(true);
    setError(false);

    try {
      const data = await fetchMetalPrice();

      setPrice(data.price);
      setTime(data.time);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPrice();
  }, [refreshKey]);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Details', {
          metal,
        })
      }>

      <Text style={styles.metalName}>
        {metal}
      </Text>

      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <View>
          <Text style={styles.errorText}>
            Failed to load
          </Text>

          <TouchableOpacity
            onPress={loadPrice}>
            <Text style={styles.retry}>
              Retry
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.price}>
            ₹ {price}
          </Text>

          <Text style={styles.time}>
            Updated at: {time}
          </Text>
        </View>
      )}

    </TouchableOpacity>
  );
};

export default MetalCard;
