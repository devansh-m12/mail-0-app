import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

interface ProfilePictureProps {
  profilePicture: {
    pictureLink?: string;
    backgroundColor?: string;
    icon?: string;
    text?: string;
  };
  size?: number;
}

export default function ProfilePicture({ profilePicture, size = 48 }: ProfilePictureProps) {
  const pictureStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  if (profilePicture.pictureLink) {
    return (
      <Image
        source={{ uri: profilePicture.pictureLink }}
        style={[styles.profilePicture, pictureStyle]}
        resizeMode="cover"
      />
    );
  }

  return (
    <View
      style={[
        styles.profilePicture,
        pictureStyle,
        { backgroundColor: profilePicture.backgroundColor },
      ]}
    >
      {profilePicture.icon ? (
        <Text style={[styles.profileIcon, { fontSize: size * 0.5 }]}>
          {profilePicture.icon}
        </Text>
      ) : profilePicture.text ? (
        <Text style={[styles.profileText, { fontSize: size * 0.375 }]}>
          {profilePicture.text}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  profilePicture: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 5,
  },
  profileIcon: {
    color: '#FFFFFF',
  },
  profileText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
