import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "../constants";
import { useRouter } from "expo-router";

export default function Signin() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Welcome back! Please sign in.</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput placeholder="Enter your email" style={styles.formControl} />
        </View>
        <View>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.formPasswordControl}
            secureTextEntry
          />
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or continue with</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/join")}>
          <Text style={styles.signupSubTitleText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
