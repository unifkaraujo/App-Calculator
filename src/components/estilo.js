import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    FontePadrao: {
      fontSize: 32,
      textAlign: "center",
      color: "#000"
    },
    
    Button: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: "center", 
        backgroundColor: "rgba(0,0,0,0.6)",
    },

    button: {
      fontSize: 35,
      width: Dimensions.get('window').width / 4, /* Pega a largura total da janela e divide por 4 (serão 4 botões na linha) */
      height: Dimensions.get('window').width / 4, /* Será um quadrado, portanto, mesmo tamanho da largura */  
      padding: 20,
      backgroundColor: '#f0f0f0',
      textAlign: 'center',
      borderWidth: 0.3,
      borderColor: '#888', 
  },

    buttonDouble: {
      fontSize: 35,
      width: (Dimensions.get('window').width / 4) * 2, /* Pega a largura total da janela e divide por 4 (serão 4 botões na linha) */
      height: Dimensions.get('window').width / 4, /* Será um quadrado, portanto, mesmo tamanho da largura */  
      padding: 20,
      backgroundColor: '#f0f0f0',
      textAlign: 'center',
      borderWidth: 0.3,
      borderColor: '#888', 
  },

  buttonTriple: {
      fontSize: 35,
      width: (Dimensions.get('window').width / 4) * 3, /* Pega a largura total da janela e divide por 4 (serão 4 botões na linha) */
      height: Dimensions.get('window').width / 4, /* Será um quadrado, portanto, mesmo tamanho da largura */  
      padding: 20,
      backgroundColor: '#FF918E',
      textAlign: 'center',
      borderWidth: 0.3,
      borderColor: '#888', 
  },

  buttonIgual: {
    fontSize: 35,
    width: Dimensions.get('window').width / 4, /* Pega a largura total da janela e divide por 4 (serão 4 botões na linha) */
    height: Dimensions.get('window').width / 4, /* Será um quadrado, portanto, mesmo tamanho da largura */  
    padding: 20,
    backgroundColor: '#A08CFF',
    textAlign: 'center',
    borderWidth: 0.3,
    borderColor: '#888', 
},

buttonDigitos: {
  fontSize: 35,
  width: Dimensions.get('window').width / 4, /* Pega a largura total da janela e divide por 4 (serão 4 botões na linha) */
  height: Dimensions.get('window').width / 4, /* Será um quadrado, portanto, mesmo tamanho da largura */  
  padding: 20,
  backgroundColor: '#FFD060',
  textAlign: 'center',
  borderWidth: 0.3,
  borderColor: '#888', 
},

})