import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  StatusBar,
  Dimensions,
  PermissionsAndroid,
  Animated,
  Easing,
  Image,
  ImageBackground,
  YellowBox
} from 'react-native';

import {Container, Header, Left, Body, Right, Content, Footer, FooterTab, Button, Badge, Text, Title, Subtitle} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';

import * as Progress from 'react-native-progress';

import ProgressBar from 'react-native-progress/Bar';

import {Fonts} from '../../../src/utils/Fonts';

import CountDown from 'react-native-countdown-component';


const {width, height} = Dimensions.get('window');

class Soal extends Component {
  constructor() {
    super();
    this.state = {
      modal : false,

      width : width,

      id_posistion : 0,

      jawaban : [],

      soal : [
        {
          id : 0,
          pertanyaan : 'Jika lebih besar dari bulatan A makan B adalah?',
          pilihan_jawaban : {
            a : 'a',
            b : 'b',
            c : 'c',
            d : 'd',
            e : 'e'
          },
        },
        {
          id : 1,
          pertanyaan : 'Apakah lebih besar dari?',
          pilihan_jawaban : {
            a : 'a',
            b : 'b',
            c : 'c',
            d : 'd',
            e : 'e'
          }
        },
        {
          id : 2,
          pertanyaan : 'Apakah lebih besar dari?',
          pilihan_jawaban : {
            a : 'a',
            b : 'b',
            c : 'c',
            d : 'd',
            e : 'e'
          }
        },
        {
          id : 3,
          pertanyaan : 'Apakah lebih besar dari?',
          pilihan_jawaban : {
            a : 'a',
            b : 'b',
            c : 'c',
            d : 'd',
            e : 'e'
          }
        },
        {
          id : 4,
          pertanyaan : 'Apakah lebih besar dari?',
          pilihan_jawaban : {
            a : 'a',
            b : 'b',
            c : 'c',
            d : 'd',
            e : 'e'
          }
        },
        {
          id : 5,
          pertanyaan : 'Apakah lebih besar dari?',
          pilihan_jawaban : {
            a : 'a',
            b : 'b',
            c : 'c',
            d : 'd',
            e : 'e'
          }
        },
        {
          id : 6,
          pertanyaan : 'Apakah lebih besar dari?',
          pilihan_jawaban : {
            a : 'a',
            b : 'b',
            c : 'c',
            d : 'd',
            e : 'e'
          }
        },
        {
          id : 7,
          pertanyaan : 'Apakah lebih besar dari?',
          pilihan_jawaban : {
            a : 'a',
            b : 'b',
            c : 'c',
            d : 'd',
            e : 'e'
          }
        },
        {
          id : 8,
          pertanyaan : 'Apakah lebih besar dari?',
          pilihan_jawaban : {
            a : 'a',
            b : 'b',
            c : 'c',
            d : 'd',
            e : 'e'
          }
        },
        {
          id : 9,
          pertanyaan : '10. Apakah lebih besar dari?',
          pilihan_jawaban : {
            a : 'a',
            b : 'b',
            c : 'c',
            d : 'd',
            e : 'e'
          }
        }
      ]
    }
  }


  fadeRight() {
    Animated.timing(this.state.xValue, {
      toValue: width,
      duration : 1000,
      easing : Easing.back()
    }).start();

    setTimeout(() => {
      Animated.timing(this.state.xValueTwo, {
        toValue: -width/100,
        duration : 200,
        easing : Easing.back()
      }).start();
    }, 1000);
  }

  left(id) {
    this.setState({ id_posistion : id });
    this.onscroll.scrollTo({ x: width * id });
  }

  right(id) {
    if(this.state.soal.length == id) {
      console.log('can move');
    } else {
      this.setState({ id_posistion : id });
      this.onscroll.scrollTo({ x: width * id });
    }
  }

  pilih(id, jawaban, id_tombol) {
    let checking = this.state.jawaban.find(data => data.id_soal === parseInt(id));
    if(!checking) {
      this.state.jawaban.push({ id_soal : id, jawaban: jawaban, tombol : id_tombol});
    } else {
      //console.log('data ada');
      let index = this.state.jawaban.indexOf(checking);
      this.state.jawaban.splice(index, 1);
      //console.log('data dihapus');
      this.state.jawaban.push({ id_soal : id, jawaban: jawaban, tombol : id_tombol});
      //console.log('data dimasukan lagi');
    }
    this.setState({ id_posistion : id });

  }


  render() {
    return (
      <Container>
      <Header iosBarStyle="light-content" androidStatusBarColor="#111" style={{backgroundColor: 'rgb(5, 91, 219)', elevation: 0, borderBottomWidth: 0, paddingLeft: 20, paddingRight: 20}}>
        <Left>
          <Text style={{color: '#fff', width: 150, fontFamily: Fonts.Roboto}}>Test Soal</Text>
        </Left>
        <Body/>
        <Right/>
      </Header>
      <View style={{backgroundColor: 'rgb(5, 91, 219)', flexDirection: 'row'}}>
        <View style={{paddingTop: 10,  paddingLeft: 20, paddingRight: 20, paddingBottom: 20, flexDirection: 'row'}}>
          <View style={{marginRight: 100}}>
            <Text style={{color: '#fff', fontSize: 25, fontFamily: Fonts.Roboto}}>Matematika</Text>
            <Text style={{color: '#fff', fontSize: 12}}>BAB 1 Dimensi</Text>
            <Text style={{color: '#fff', fontSize: 12}}>Bangun Ruang Volume</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{borderWidth: 1, borderRadius: 5, padding: 5, borderColor: '#fff'}}>
              <Text style={{color: '#fff'}}>Akhiri Ujian</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Left>
              <CountDown
                until={3600}
                onFinish={() => alert('finished')}
                size={15}
                timeToShow={['H', 'M', 'S']}
              />
            </Left>
            <Right><Text style={{color: 'rgb(5, 91, 219)'}}>{this.state.id_posistion+1} dari 10</Text></Right>
          </View>
          <Progress.Bar showsVerticalScrollIndicator={false}  progress={this.state.jawaban.length/10} width={width} style={{width: '100%'}}/>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} snapToInterval={width}
          ref={(node) => this.onscroll = node}
          onScroll={this.handleScroll}
          >
          {
            this.state.soal.map(list=>(
              <View key={list.id} style={{borderWidth: 0, width: width, padding: 20}}>
                <View style={{backgroundColor: '#fff', width: '100%'}}>
                  <View>
                    <Text>{list.pertanyaan}</Text>
                    <Text>A. {list.pilihan_jawaban.a}</Text>
                    <Text>B. {list.pilihan_jawaban.b}</Text>
                    <Text>C. {list.pilihan_jawaban.c}</Text>
                    <Text>D. {list.pilihan_jawaban.d}</Text>
                    <Text>E. {list.pilihan_jawaban.e}</Text>
                  </View>
                </View>
                <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TouchableOpacity onPress={()=>this.pilih(list.id, 'A', list.id+'_A')} style={{
                      width: 50,
                      height: 50,
                      backgroundColor:  this.state.jawaban.find(data => data.tombol === list.id+'_A') == undefined ? 'rgb(5, 91, 219)':'rgb(240, 164, 18)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 30,
                      margin: 10
                    }}>
                    <Text style={{color: '#fff'}}>A</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.pilih(list.id, 'B', list.id+'_B')} style={{
                      width: 50,
                      height: 50,
                      backgroundColor: this.state.jawaban.find(data => data.tombol === list.id+'_B') == undefined ? 'rgb(5, 91, 219)':'rgb(240, 164, 18)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 30,
                      margin: 10
                    }}>
                    <Text style={{color: '#fff'}}>B</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.pilih(list.id, 'B', list.id+'_C')} style={{
                      width: 50,
                      height: 50,
                      backgroundColor: this.state.jawaban.find(data => data.tombol === list.id+'_C') == undefined ? 'rgb(5, 91, 219)':'rgb(240, 164, 18)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 30,
                      margin: 10
                    }}>
                    <Text style={{color: '#fff'}}>C</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.pilih(list.id, 'B', list.id+'_D')} style={{
                      width: 50,
                      height: 50,
                      backgroundColor: this.state.jawaban.find(data => data.tombol === list.id+'_D') == undefined ? 'rgb(5, 91, 219)':'rgb(240, 164, 18)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 30,
                      margin: 10
                    }}>
                    <Text style={{color: '#fff'}}>D</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.pilih(list.id, 'B', list.id+'_E')} style={{
                      width: 50,
                      height: 50,
                      backgroundColor: this.state.jawaban.find(data => data.tombol === list.id+'_E') == undefined ? 'rgb(5, 91, 219)':'rgb(240, 164, 18)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 30,
                      margin: 10
                    }}>
                    <Text style={{color: '#fff'}}>E</Text>
                  </TouchableOpacity>
                </View>
                <View style={{padding: 20, paddingLeft: 0, paddingRight: 0, flexDirection: 'row'}}>
                  <TouchableOpacity onPress={()=>this.left(list.id-1)} style={{ width: '50%', borderWidth: 1, borderColor: 'rgb(5, 91, 219)', padding: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'rgb(5, 91, 219)'}}>Sebelumnya</Text>
                  </TouchableOpacity>
                  <View style={{margin: 3}}/>
                    {
                      (list.id < this.state.soal.length - 1  ) &&
                      <TouchableOpacity onPress={()=>this.right(list.id+1)} style={{ width: '50%', borderWidth: 1, borderColor: 'rgb(5, 91, 219)', padding: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'rgb(5, 91, 219)'}}>Selanjutnya</Text>
                      </TouchableOpacity>
                    }
                  {
                    (list.id == this.state.soal.length - 1 ) &&
                    <TouchableOpacity onPress={()=>this.right(list.id+1)} style={{ width: '50%', backgroundColor: 'rgb(240, 164, 18)', borderWidth: 1, borderColor: 'rgb(240, 164, 18)', padding: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{color: '#fff'}}>Selesai</Text>
                    </TouchableOpacity>
                  }

                </View>
              </View>
            ))
          }
        </ScrollView>



      </ScrollView>

      </Container>
    )
  }
}

export default Soal;
