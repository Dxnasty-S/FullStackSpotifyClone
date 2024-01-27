import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem'


export default function HomeScreen() {
  return (
    <FlatList 
      data={tracks}
      renderItem={({ item }) => <TrackListItem track={item}/>}        
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
