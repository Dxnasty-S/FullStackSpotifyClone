import { FlatList, StyleSheet, Text, View } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.header}>
        {/* header */}
        <FontAwesome name="search" size={16} color="gray" />
        <TextInput value={search} onChangeText={setSearch} placeholder='What do you wanna listen today?' style={styles.input} />
        <Text onPress={() => setSearch('')} style={{color: "white"}}>Cancel</Text>
      </View>
      <FlatList data={tracks} renderItem={({ item }) => <TrackListItem track={item} />} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 10,
  },
  input: {
    color: 'white',
    flex: 1,
    backgroundColor: '#121314',
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});
