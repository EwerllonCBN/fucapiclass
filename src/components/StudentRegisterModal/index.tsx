// import  React ,  {  useRef, useState  }  from  'react' ; 
// import  {  View ,  TouchableOpacity, StyleSheet, Modal, Pressable  }  from  'react-native' ; 
// import { RectButtonProps } from 'react-native-gesture-handler';
// import { ScrollView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
// import  {  Modalize  }  from  'react-native-modalize' ;
// import { Button } from '../Button';
// import { Input } from '../Input';
// // import { InputForm } from '../InputForm';
// import { 
//   Container,
//   Title,
//   TitleButton,
//   Form,
//   ModalTitle
// } from './styles';



// export function StudentRegisterModal(){ 
//   const defaultProps = {
//     title: '',
//     //slide fade  none
//     animationType: 'slide',
//     haveOutsideTouch: false,
//     data: []
//   }
//   const [nome, setNome] = useState('');
//   const [mensagem, setMensagem] = useState('');
//   const modalizeRef = useRef<Modalize>(null);

//   const onOpen = () => { 
//     modalizeRef.current?.open() ; 
//   } ;
// // StudentRegisterModal.registerComponent(StudentRegisterModal, () => gestureHandlerRootHOC());
// return (
//   <Modal
//     animationType={animationType}
//     transparent={true}
//     visible={show}
//     onRequestClose={() => { }}
//   >
//     <View style={{ flex: 1, backgroundColor: '#000000AA' }}>
//       <Pressable
//         onPress={() => {
//           if (!haveOutsideTouch) return;
//           closePopup()
//         }}
//         style={{ flex: 1 }}>

//       </Pressable>

//       <View style={{
//         bottom: 0,
//         position: 'absolute',
//         width: '100%',
//         backgroundColor: 'white',
//         borderTopLeftRadius: 15,
//         borderTopRightRadius: 15,
//         // height: Dimensions.get('window').height * 0.4,
//         maxHeight: Dimensions.get('window').height * 0.4
//       }}>
//         <Text style={{
//           alignSelf: 'center',
//           color: '#182E44',
//           fontSize: 20,
//           fontWeight: '500',
//           margin: 15
//         }}>{title}</Text>
//         {renderContent()}
//       </View>
//     </View>
//   </Modal>
// );
// };