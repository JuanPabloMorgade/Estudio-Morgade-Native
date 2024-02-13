import React from 'react'
import { Text , View, StyleSheet, Pressable, Alert} from "react-native";

const Cliente = ({item, setModalVisible, pacienteEditar, pacienteEliminar}) => {

    const{Nombre, Apellido, Email, Teléfono, Mensaje, id} = item
    const enviandoo = () =>{
        Alert.alert(
            'Enviando el Mail',
            'Aguarde, a la brevedad sera respondido...',
            [ {text: 'Ok 🙂 '}]
        )
    }
  return (
    <View style={styles.contenedor}>
        <Text style={styles.label}> Nombre: <Text style={styles.texto}> {Nombre}</Text></Text>
        <Text style={styles.label}> Apellido: <Text style={styles.normal}> {Apellido}</Text></Text>
        <Text style={styles.label}> Email: <Text style={styles.normal}> {Email}</Text></Text>
        <Text style={styles.label}> Teléfono: <Text style={styles.normal}> {Teléfono}</Text></Text>
        <Text style={styles.label}> Mensaje: <Text style={styles.normal}> {Mensaje}</Text></Text>
            <View style={styles.contenedorBotones}>
                <Pressable 
                    style={[styles.btn, styles.btnEditar]} 
                    onPress={() => {
                        setModalVisible(true)
                        pacienteEditar(id)
                    }}> 

                    <Text style={styles.btnTexto}>Editar</Text>
                </Pressable>

                <Pressable style={[styles.btn, styles.btnEnviar]} 
                    onPress={() => enviandoo()}
                > 
                    <Text style={styles.btnTexto}>Enviar</Text>
                </Pressable>

                <Pressable 
                    style={[styles.btn, styles.btnEliminar]}
                    onPress={() => {
                        pacienteEliminar(id)
                    }}
                > 
                    <Text style={styles.btnTexto}>Eliminar</Text>
                </Pressable>

            </View>

    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor: '#FFF',
        padding: 10,
        borderBottomColor: '#94A3B8',
        borderBottomWidth:1,
        borderRadius:10,
        marginBottom:15,
        marginHorizontal: 10
    },
    label:{
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700'
    },
    texto:{
        color: '#6D28D9',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10
    },
    normal:{
        fontWeight: 'normal',
        textTransform: 'none'
    },
    contenedorBotones:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,

    },
    btn:{
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    btnEditar:{
        backgroundColor: '#F59E0B',
    },
    btnEliminar:{
        backgroundColor: '#EF4444',
    },
    btnTexto:{
        textTransform:'uppercase',
        fontSize: 12,
        fontWeight: '700',
        color:'#FFF'
    },
    btnEnviar:{
        backgroundColor: '#1FC7F8',
    }
})


export default Cliente