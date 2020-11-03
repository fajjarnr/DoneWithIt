import React, { useEffect, useState } from "react";

import { FlatList, StyleSheet } from "react-native";
import listingsApi from "../api/listings.js";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/Button.js";
import Card from "../components/Card";
import Screen from "../components/Screen";
import AppText from "../components/Text.js";
import colors from "../config/colors";
import useApi from "../hooks/useApi.js";
import routes from "../navigation/routes";

export default function ListingScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    paddingHorizontal: 4,
  },
});
