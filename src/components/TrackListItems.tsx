import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Track } from '../types';

type TrackListItemProps = {
  track: Track;
};

const TrackListItem = ({ track }: TrackListItemProps) => {
  const image = track.album?.images?[0]:

  return (
    <Pressable
      onPress={() => console.log('Playing track: ', track.id)}
      style={styles.container}
    >
      {image && <Image source ={{ uri: image.url }} style={styles.image} />}
      <view>
        <text style={styles.title}>{track.name}</text>
        <text style={styles.subtitle}>{track.artists[0]?.name}</text>
      </view>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    color: 'white',
    fontSize: 16,
  },
  subtitle: {
    color: 'gray',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    marginRatio: 10,
    marginRight: 5,
  },
})
