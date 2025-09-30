import { Input } from "@/components/input";
import { Image, Text, View } from "react-native";
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
                />
                <Input/>
            </View>
        </View>
    );
}

