import  React ,  {  useRef, useState  }  from  'react' ; 
import  {  View ,  TouchableOpacity, StyleSheet, Animated  }  from  'react-native' ; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import  {  Modalize  }  from  'react-native-modalize' ;
import { Button } from '../Button';
import { FabButton } from '../FabButton';
import { Input } from '../Input';
// import { InputForm } from '../InputForm';
import { 
  Container,
  Content,
  Title,
  TitleButton,
  Form,
  ModalTitle,
  Footer
} from './styles';

interface ModalizeProps{
  isOpen: ()=> void ;
}

interface Props{
  open: ModalizeProps
}

export function TeacherRegisterModal({open}: Props){ 
  
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const modalizeRef = useRef<Modalize>(null);  

  return ( 
    <GestureHandlerRootView>
      <Container > 
        <Content   
          // snapPoint={400} 
          onOpen={open.isOpen}   
          modalHeight={400}
          panGestureComponentEnabled={true}
          // tapGestureEnabled
          withReactModal={true}
          scrollViewProps={{ scrollEnabled: false, showsVerticalScrollIndicator: false , showsHorizontalScrollIndicator: false}}
          ref={ modalizeRef }
        > 
          <Footer>
            <ModalTitle>Criar turma</ModalTitle>
            <Form >
              <Input 
                placeholder='Docente'
              />
              <Input 
                placeholder='Turma'
              />
              <Input 
                placeholder='Semestre'
              />
              <Button 
                title='Criar Turma'
              />
            </Form>
          </Footer>
        </Content> 
      </Container> 
    </GestureHandlerRootView>
    
  ) ; 
};