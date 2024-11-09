import Wrapper from "@/shared/components/wrapper";
import HeaderBack from "@/shared/components/headerBack";
import { Image, View } from "react-native";
import React from "react";
import { styles } from './styles';
import Typography from "@/shared/components/Typography";
import TitleScreen from "@/shared/components/title";
import TitleSection from "@/shared/components/titleSection";
import { ArrowRight } from "@/shared/assets/icons";

export default function EditProfile() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <HeaderBack title="Edit profile" />

        <View style={styles.containerAvatar}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://i.ibb.co/Y70KDJ8/Avatar-12.png' }}
          />
          <Typography customStyle={styles.changeProfile} value="Change Profile Picture" />
        </View>

        <View style={styles.divider} />

        <View>
          <TitleSection value="Profile Information" />

          <View style={styles.containerInformation}>
            <Typography customStyle={styles.textId} value="Name" />
            <Typography customStyle={styles.textValue} value="Arfi Ganteng" />
            <ArrowRight />
          </View>
          <View style={styles.containerInformation}>
            <Typography customStyle={styles.textId} value="Username" />
            <Typography customStyle={styles.textValue} value="Arfi.ganteng" />
            <ArrowRight />
          </View>
        </View>

        <View style={styles.divider} />

        <View>
          <TitleSection value="Personal Information" />

          <View style={styles.containerInformation}>
            <Typography customStyle={styles.textId} value="User ID" />
            <Typography customStyle={styles.textValue} value="119321" />
            <ArrowRight />
          </View>
          <View style={styles.containerInformation}>
            <Typography customStyle={styles.textId} value="E-mail" />
            <Typography customStyle={styles.textValue} value="arfi.ganteng@gmail.com" />
            <ArrowRight />
          </View>
          <View style={styles.containerInformation}>
            <Typography customStyle={styles.textId} value="Phone Number" />
            <Typography customStyle={styles.textValue} value="08239838912" />
            <ArrowRight />
          </View>
        </View>
      </View>
    </Wrapper>
  );
}
