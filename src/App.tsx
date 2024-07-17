import React, {Component} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import Estilo from './components/estilo'
import Button from './components/button'
import Display from './components/display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class App extends Component { 

  state = { ...initialState  } /* Cria um clone dos atributos setados em initalState */ 
  /* initialState não é referenciado, usamos apenas o state */

  addDigit = (n: any) => {
  
    /* clearDisplay vira verdadeiro se o displayValue atual for 0 ou se ele já está setado como verdadeiro */
    const clearDisplay = (this.state.displayValue === '0' && n != '.') || this.state.clearDisplay

    /* Se for digitado '.' na calculadora, mas nosso número (displayValue) já conter '.', ele é ignorado */
    /* String também é array, por isso podemos usar o includes */
    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.') ) {
      return
    }

    /* Se clearDisplay for verdadeiro, valor temporario fica vazio, senão, valor temporario inicia com o que já está guardado na memória */
    const currentValue = clearDisplay ? '' : this.state.displayValue

    /* Armazeno o número completo em uma variavel temporaria */
    const displayValue = currentValue + n /* Como é string, valores são concatenados */

    /* Nosso novo número é armazenado na nossa variavel de estados */
    this.setState({ displayValue: displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values: values })
    }

  }

  addOperation = (operation: any) => {
    if (this.state.current === 0) {
      this.setState({ operation: operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '=' /* Se for a operação '=', equals fica true */
      const values = [...this.state.values] /* Duplica o array de estado em uma variavel temporaria */
      
      /* O try vai ser pra tentar executar o eval, se der erro pelo menos tem uma avaliação de erro pra ser executada */
      try {
        /* o eval avalia a expressão e tenta fazer a operação, nesse caso concatenamos toda a expressão e usamos o eval */
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) { /* Se for digitado uma operação errada, vai cair aqui */
          values[0] = this.state.values[0] /* Não faço nada */
      }

      /* Zeramos o valor de indice 1, pois a operação foi realizada */
      values[1] = 0

      /* Se o usuario digitou a operação de '=', então calculamos e voltamos ao inicio do array */
      this.setState({ 
        displayValue: `${values[0]}`, /* Garante que será string */
        clearDisplay: true, operation: equals ? null : operation, values: values, 
        current: equals ? 0 : 1 })

    }
  }

  resetCalc = () => {
    /* Transforma nosso objeto de estados exatamente igual o initialState */
    this.setState({ ...initialState })
  }
  
  render() {
  
    return (
      <SafeAreaView style={styleApp.App}>

        <Display value={this.state.displayValue}/>

        <View style={Estilo.Button} > 
          <Button label='AC' estilo={Estilo.buttonTriple} onClick={this.resetCalc} />
          <Button label='/' onClick={this.addOperation} estilo={Estilo.buttonDigitos}/>
          <Button label='7' onClick={this.addDigit} /> 
          {/*Como tem parametro, podemos mandar como uma arrow function */}
          <Button label='8' onClick={() => this.addDigit(8)} />
          <Button label='9' onClick={this.addDigit} />
          <Button label='*' onClick={this.addOperation} estilo={Estilo.buttonDigitos}/>
          <Button label='4' onClick={this.addDigit} />
          <Button label='5' onClick={this.addDigit} />
          <Button label='6' onClick={this.addDigit} />
          <Button label='-' onClick={this.addOperation} estilo={Estilo.buttonDigitos}/>
          <Button label='1' onClick={this.addDigit} />
          <Button label='2' onClick={this.addDigit} />
          <Button label='3' onClick={this.addDigit} />
          <Button label='+' onClick={this.addOperation} estilo={Estilo.buttonDigitos}/>
          <Button label='0' estilo={Estilo.buttonDouble} onClick={this.addDigit} />
          <Button label='.' onClick={this.addDigit} />
          <Button label='=' onClick={this.addOperation} estilo={Estilo.buttonIgual}/>
        </View>
     
      </SafeAreaView>
  )
}}

/* Criamos uma constante para ser utilizada nas estilizações dos componentes */
/* Dentro da constante, criamos as propriedades estilizadas que serão usadas nas nossas views */
const styleApp = StyleSheet.create({
  App: {
    flexGrow: 1,
  }
})