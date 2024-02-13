import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  Modal,
  FlatList,
  Image,
  Alert
} from 'react-native';
import { Formulario } from './src/components/Formulario';
import Cliente from './src/components/Cliente';
import Footer from './src/components/Footer';

const App= () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [cliente, setCliente] = useState([])
  const [client, setClient] = useState({})

  const pacienteEditar = id => {
    const pacienteEditar = cliente.filter(client => client.id === id)
    setClient(pacienteEditar[0])
  }

  const pacienteEliminar = id =>{
    Alert.alert(
      '¿Deseas eliminar Este Formulario?',
      'Si lo Elimina No se podrá recuperar la información',
      [
        {text: 'Cancelar'},
        {text: 'Si, eliminar', onPress: () => {
          const pacientesActualizados = cliente.filter(
            pacientesState => pacientesState.id !== id)
            setCliente(pacientesActualizados)
        }}
      ]
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View >
          <View>
              <View style={styles.divImageLogo}>
                <Image style={styles.imagg} source= {require('./src/components/photo.png')} />
              </View>
            <Text style={styles.titulo}>Estudio Contable</Text>
            <Text style={styles.tituloI}>Daniel Morgade</Text>
          </View>
        </View>

        <Text style={styles.tituloB}>BIENVENIDOS A ESTUDIO MORGADE</Text>
        <Text style={styles.tituloC}>Somos un Estudio dedicado a brindar asesoramiento integral y personalizado a nuestros clientes en materia impositiva, contable, laboral y societaria.</Text>

        <Text style={styles.tituloD}>Asimismo brindamos servicios de consultoría, asesoramiento a empleados en relación de dependencia y servicios para consorcios.</Text>

        <View style={styles.contenedorrr}>
          <ScrollView horizontal>
            <View>
              <Image style={styles.imgStyle} source={require('./src/components/EC3.png')} /> 
            </View>

            <View>
              <Image style={styles.imgStyle} source={require('./src/components/E5.png')} /> 
            </View>

            <View>
              <Image style={styles.imgStyle} source={require('./src/components/estuudio.png')} /> 
            </View>

            <View>
              <Image style={styles.imgStyle} source={require('./src/components/EC4.png')} /> 
            </View>

            <View>
              <Image style={styles.imgStyle} source={require('./src/components/EC1.jpg')} /> 
            </View>

          </ScrollView>
            
        </View>
      


      <Pressable onPress={() => setModalVisible(true)} style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNC}>Contactarse</Text>
      </Pressable>

      {cliente.length === 0 ? 
        <Text style={styles.noCliente}>No hay formularios cargados</Text> : 
          <FlatList 
            data={cliente}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                  <Cliente 
                  item={item}
                  setModalVisible={setModalVisible}
                  pacienteEditar={pacienteEditar}
                  pacienteEliminar={pacienteEliminar} 
                />
              )
            }}
          />
      }
      

      <Formulario 
        modalVisible={modalVisible} 
        setModalVisible = {setModalVisible} 
        setCliente = {setCliente}
        cliente={cliente} 
        client={client}
        setClient={setClient}
        />

        



      <Footer/>
      </ScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  contenedorrr:{
    marginHorizontal: 10
  },
  divImageLogo:{
    display: 'flex',
    height: 2
  },
  imagg:{
    width:58,
    height:50,
    marginLeft:20,
    marginTop: 15
  },
  imgStyle:{
    marginTop: 20,
    width:355,
    height: 220,
    marginHorizontal: 10,
    borderRadius: 10
  },
  titulo:{
    textAlign:'center',
    fontSize: 30,
    color: '#000',
    fontWeight: '600',
    marginLeft:50
  },
  tituloI:{
    textAlign:'center',
    fontSize: 25,
    color: '#5893D4',
    fontWeight: '800',
    marginLeft:50
  },
  tituloB:{
    marginTop: 30,
    textAlign:'center',
    marginHorizontal: 5,
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    
  },
  tituloC:{
    marginTop:5,
    fontSize: 16,
    textAlign:'center',
    fontWeight: '600',
    marginHorizontal: 13,
  },
  tituloD:{
    marginTop:5,
    fontSize: 16,
    textAlign:'center',
    fontWeight: '600',
    marginHorizontal: 13,
  },
  btnNuevaCita:{
    backgroundColor:'#5C98F2',
    padding: 15,
    marginTop:20,
    marginHorizontal:20,
    borderRadius: 10,
    marginBottom: 20
  },
  btnTextoNC:{
    textAlign: 'center',
    color:'#FFF',
    fontSize:18,
    fontWeight:'900',
    textTransform: 'uppercase',
    
  },
  noCliente:{
    marginTop: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
  logo:{
    marginLeft:10
  },
  
})

export default App;
