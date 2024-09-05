import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, SafeAreaView } from "react-native";
import { styles } from "../assets/styles";

const Form = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <SafeAreaView>
      <View>
        <Text>Username</Text>
        <TextInput
          value={username}
          placeholder="Input text"
          onChageText={(val) => setUsername(val)}
          style={styles.inputStyle}
        ></TextInput>
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          value={password}
          placeholder="Input text"
          onChageText={(val) => setPassword(val)}
          style={styles.inputStyle}
        ></TextInput>
      </View>
      <View>
        <Text>Username</Text>
        <TextInput
          value={username}
          placeholder="Input text"
          onChageText={(val) => setUsername(val)}
          style={styles.inputStyle}
        ></TextInput>
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          value={password}
          placeholder="Input text"
          onChageText={(val) => setPassword(val)}
          style={styles.inputStyle}
        ></TextInput>
      </View>
      <View>
        <Text>Username</Text>
        <TextInput
          value={username}
          placeholder="Input text"
          onChageText={(val) => setUsername(val)}
          style={styles.inputStyle}
        ></TextInput>
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          value={password}
          placeholder="Input text"
          onChageText={(val) => setPassword(val)}
          style={styles.inputStyle}
        ></TextInput>
      </View>
    </SafeAreaView>
  );
};

export default Form;
