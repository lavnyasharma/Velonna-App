import { Image, Modal, ScrollView, TouchableOpacity, View } from "react-native";
import TitleScreen from "@/shared/components/title";
import React, { useState } from "react";
import { styless } from './styles';
import { AddBlue } from "@/shared/assets/icons";
import { normalize } from "@/shared/helpers";
import AnyList from "@/shared/components/anyList";
import Typography from "@/shared/components/Typography";
import color from "@/shared/constans/colors";
import Input from "@/shared/components/input";
import ButtonSmall from "@/shared/components/buttons/small";
import useDarkMode from "@/shared/hooks/useDarkMode";
import CloseBtn from "@/shared/components/close";
import { wishList } from "@/shared/constans/mockup";

export default function WhiteList() {
  const [nameWishlists, setNameWishlists] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const { isDarkMode } = useDarkMode();

  const styles = styless(isDarkMode);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.navbarContainer}>
        <TitleScreen value="Whitelists" />
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <AddBlue />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: normalize(24) }}>
        <AnyList
          data={wishList}
          rows={2}
          renderItem={(item) => {
            return (
              <View key={item.id} style={styles.containerWhiteList}>
                <View style={{ alignItems: 'center' }}>
                  <AnyList
                    data={item.images}
                    rows={2}
                    renderItem={(item) => (
                      <Image
                        key={item.id}
                        resizeMode="cover"
                        style={{
                          width: normalize(72),
                          height: normalize(72),
                          borderRadius: 6,
                          flex: 1,
                          margin: normalize(3),
                        }}
                        source={{ uri: item.image }}
                      />
                    )}
                  />
                </View>
                <View style={{ padding: normalize(10) }}>
                  <Typography customStyle={styles.nameWhiteList} value={item.name} />
                  <Typography
                    customStyle={{
                      color: color.neutral.darkGray,
                    }}
                    value={`${item.itemsCount} items`}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalOverlay} />
          <View style={styles.modalView}>
            <View style={styles.containerHeaderModal}>
              <Typography customStyle={styles.titleHeaderModal} value="Add new Wishlists" />
              <CloseBtn onPress={() => setModalVisible(!modalVisible)} />
            </View>

            <View style={{ marginTop: normalize(24) }}>
              <Input
                value={nameWishlists}
                placeholder="New wishlists"
                onChange={(value) => setNameWishlists(value)}
              />
            </View>
            <View style={styles.containerDescription}>
              <Typography
                customStyle={styles.textDescription}
                value="Only you can view these wishlists, unless you want to share them with others."
              />
            </View>

            <View>
              <ButtonSmall title="Add" disabled={nameWishlists.length < 1} />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
