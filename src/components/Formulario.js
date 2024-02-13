import React, {useState, useEffect} from 'react'
import{Modal, Text, Button, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Pressable, Alert} from 'react-native'

export const Formulario = ({
        modalVisible, 
        setModalVisible, 
        setCliente, 
        cliente, 
        client,
        setClient,
    }) => {

    const[Nombre, setNombre] = useState('')
    const[id, setId] = useState('')
    const[Apellido, setApellido] = useState('')
    const[Email, setEmail] = useState('')
    const[Teléfono, setTeléfono] = useState('')
    const[Mensaje, setMensaje] = useState('')

    useEffect(() => {
        if(Object.keys(client).length > 0){
            setId(client.id)
            setNombre(client.Nombre)
            setApellido(client.Apellido)
            setEmail(client.Email)
            setTeléfono(client.Teléfono)
            setMensaje(client.Mensaje)
        }
    }, [client])


    const handleCita = () =>{
        if([Nombre, Apellido, Email, Teléfono, Mensaje].includes('')){
            Alert.alert(
                'Error, rellene todos los campos',
                'Todos los campos son obligatorios',
                [ {text: 'Cancelar'}, {text: 'Ok'}]
            )
            return
        }

        const nuevoCliente = {
            Nombre,
            Apellido,
            Email,
            Teléfono,
            Mensaje
        }

        if(id){
            nuevoCliente.id = id
            const clientesActualizados = cliente.map(clienteState => 
                clienteState.id === nuevoCliente.id ? nuevoCliente :
                clienteState)

                setCliente(clientesActualizados)
                setClient({})
        }else{
            nuevoCliente.id = Date.now()
            setCliente([...cliente, nuevoCliente])
        }

        setId('')
        setModalVisible(!modalVisible)
        setNombre('')
        setApellido('')
        setEmail('')
        setTeléfono('')
        setMensaje('')

    }
  return (
    <Modal animationType='fade' visible={modalVisible}>
        <SafeAreaView style={styles.contenid}>
            <ScrollView>

                <Pressable style={styles.btnCancelar}>
                    <Text style={styles.btnCancelarTexto} 
                    onPress={() => {
                        setModalVisible(!modalVisible)
                        setClient({})
                        setId('')
                        setNombre('')
                        setApellido('')
                        setEmail('')
                        setTeléfono('')
                        setMensaje('')
                    }}>X</Text>
                </Pressable>

                <Text style={styles.titulo}>{client.id ? 'Editar' : 'Formulario'} {' '} 
                    <Text style={styles.tituloB}>{client.id ? 'Formulario' : 'de Contacto'}</Text>
                </Text>


                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Cliente</Text>
                    <TextInput style={styles.input} placeholder='Ingrese Nombre' placeholderTextColor={'#666'} 
                    value={Nombre} onChangeText={setNombre} />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Apellido Cliente</Text>
                    <TextInput style={styles.input} placeholder='Ingrese Apellido' placeholderTextColor={'#666'}
                    value={Apellido} onChangeText={setApellido} />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder='Ingrese Email' placeholderTextColor={'#666'} keyboardType='email-address' value={Email} onChangeText={setEmail} />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono</Text>
                    <TextInput style={styles.input} placeholder='Ingrese Teléfono' placeholderTextColor={'#666'} keyboardType='number-pad' value={Teléfono} onChangeText={setTeléfono} maxLength={10}/>
                </View>


                <View style={styles.campo}>
                    <Text style={styles.label}>Mensaje</Text>
                    <TextInput style={[styles.input, styles.mensajeInput]} placeholder='Ingrese el Mensaje' placeholderTextColor={'#666'}
                    value={Mensaje} onChangeText={setMensaje} multiline={true} numberOfLines={4}/>
                </View>

                <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
                        <Text style={styles.btnNuevaCitaTexto} 
                        > {client.id ? 'Editar Formulario' : 'Agregar Formulario'}</Text>
                    </Pressable>

            </ScrollView>

        </SafeAreaView>
      </Modal>
  )
}

const styles = StyleSheet.create({
    contenid:{
        backgroundColor: '#5491F2',
        flex: 1,

    },
    titulo:{
        fontSize:30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color:'#fff',
        marginBottom:25
    },
    tituloB:{
        fontWeight:'900',
        color:'#fff'
    },
    input:{
        backgroundColor:'#FFF',
        padding: 15,
        borderRadius:10,
        
    },
    label:{
        color:'#FFF',
        marginBottom:8,
        marginTop:8,
        fontSize:20,
        fontWeight:'600'
    },
    campo:{
        marginTop:15,
        marginHorizontal: 30,
    },
    mensajeInput:{
        height:100, 
    },
    btnCancelar:{
        marginTop: 10,
        backgroundColor: '#5491F2',
        marginLeft:320,
        marginRight:8,
        padding: 20,
        borderRadius: 10,
    },
    btnCancelarTexto:{
        color:'#FFF',
        textAlign:'left',
        fontWeight: '900',
        fontSize:20,
        textTransform:'uppercase',
    },
    btnNuevaCita:{
        marginTop: 50,
        backgroundColor: '#F59E0B',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
        marginVertical:50

    },
    btnNuevaCitaTexto:{
        textAlign: 'center',
        color:'#FFF',
        fontWeight: '900',
        fontSize: 18,
        textTransform:'uppercase'

    
    }
})
