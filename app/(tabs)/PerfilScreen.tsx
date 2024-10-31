import { View, StyleSheet, Text, Image,  TouchableOpacity} from 'react-native';
import {Link} from 'expo-router';

export default function PerfilScreen(){
    return(
        <View style={styles.container}>
            
            <View style={styles.infoContainer}>

                <Text style={styles.title}>Perfil</Text>

                <Image style={styles.fotoPerfil} source={require('@/assets/images/foto-perfil.jpeg')}/>
                
                <View style={styles.infos}>
                    <View>
                        <Text style={styles.nomeCampo}>Nome Completo</Text>
                        <Text style={styles.texto}>Roneuane Grazielle</Text>
                        <View style={styles.linha}></View>
                    </View>
                    <View>
                        <Text style={styles.nomeCampo}>E-mail</Text>
                        <Text style={styles.texto}>roneuane@mail.com</Text>
                        <View style={styles.linha}></View>
                    </View>
                    <View>
                        <Text style={styles.nomeCampo}>CPF</Text>
                        <Text style={styles.texto}>012.345.678.99</Text>
                        <View style={styles.linha}></View>
                    </View>
                    <View>
                        <Text style={styles.nomeCampo}>Telefone</Text>
                        <Text style={styles.texto}>00000-0000</Text>
                        <View style={styles.linha}></View>
                    </View>
                    <View>
                        <Text style={styles.nomeCampo}>Data de Nascimento</Text>
                        <Text style={styles.texto}> 26/04/1991</Text>
                        <View style={styles.linha}></View>
                    </View>
                </View>

                <View>
                    <Link href="/(tabs)/explore">
                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.textBotao}>Meus Pets</Text>
                        </TouchableOpacity>
                    </Link>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#430069'
    },

    infoContainer:{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        position: 'relative',
        margin: 20,
        borderRadius: 15,

    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',

    },

    fotoPerfil:{
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 10,
    },

    infos:{
        gap: 20,
        marginTop: 20,
    },

    nomeCampo:{
        fontSize: 15,
        color: '#C4C4C4',
    },

    texto:{
        fontSize: 20,
    },

    linha:{
        height: 1,
        width: 300,
        backgroundColor: '#C4C4C4',
    },

    botao:{
        height: 50,
        width: 300,
        backgroundColor:'#F18000',
        borderRadius: 25,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textBotao:{
        fontSize: 18,
        color: '#ffffff',
    },
})