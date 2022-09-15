import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput,Button} from 'react-native'
import api from './config/api'
export default app=>{
  const [usuario,setUsuario] = useState('')
  const [senha,setSenha] = useState('')


  const cadastrar = async()=>{
    try {
      await api.post('/cadastro',{usuario,senha})
      console.log('Usuario e senha cadastrados')
    } catch (e) {
      console.log('Erro: ',e)
    }
  }
  const mostrarUsuario = (dispatch)=> async({usuario,senha})=>{
    try {
      console.log('passou por aqui')
      const usuario = await api.get('/login')
      dispatch({type:'get_glogpost', payload: usuario.data})
      console.log(usuario.data)
      // console.log(usuario)
    } catch (error) {
      console.log('erro ao mostrar usuario')
    }
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Usuario"
        onChangeText={setUsuario}
        style={{ borderWidth: 1, width: 200 }}
      />

      <TextInput
        placeholder="senha"
        onChangeText={setSenha}
        style={{ borderWidth: 1, width: 200 }}
      />
      <Button title="Cadastrar" onPress={cadastrar} />
      <Button
      title="mostrar usuario"
      onPress={()=>mostrarUsuario({usuario,senha})}
      />
    </View>
  )
}