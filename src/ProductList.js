import React, { useState, useEffect } from 'react';
import { Text, View, FlatList} from 'react-native';

export default function Suppliers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Text>
      {item.name} 
    </Text>
  );

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
}