import Button from "@/components/button";
import { Input } from "@/components/input";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";



export default function index(){
    return(
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image style={styles.logo} source={require("../assets/images/logo.png")}/>
            </View>
            
            {/*box-titulo*/}
            <View style={styles.titleBox}>
                <Text style={styles.title}>BOAS VINDAS!</Text>
                <Text style={styles.subtitle}>Pronto para organizar suas finanças? Acesse agora</Text>
            </View>

            {/*box-input*/}
            <View style={styles.forms}>
                <Input
                    placeholder="Nome"
                />
                <Input
                    placeholder="E-mail"
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                <View
                    style={{
                        height: 0.8,
                        width: "100%",
                        backgroundColor: "#e9e9e9ff",
                        marginVertical: 20,
                    }}
                ></View>
                <Button
                    title="Register"
                />
                <TouchableOpacity style={styles.back}
                onPress={() => router.back()}>
                <Text style={styles.backText}>Já tenho uma conta</Text>
            </TouchableOpacity>

            </View>
        </View>
    );
}

