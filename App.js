import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from "@expo-google-fonts/space-grotesk";
import { View } from 'react-native';
import ProdutoItem from './src/telas/Produto';
import mock from './src/mocks/produto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Sobre from './src/telas/Sobre';
// import List from './src/telas/ListaProdutos';
import mock_sobre from './src/mocks/sobre';
import mock_vendas from './src/mocks/vendas'
import Vendas from './src/telas/Vendas';


function MenuKit(){
  return <ProdutoItem {...mock}/>
}

function MenuSobre(){
  return <Sobre {...mock_sobre}/>
}

function MenuVendas() {
  return <Vendas {...mock_vendas} />;
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return <Tab.Navigator
            screenOptions={({route}) =>({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if(route.name === "Kit"){
                  iconName = focused
                  ? 'basket'
                  : 'basket-outline';
                } else if(route.name === "Sobre nós"){
                  iconName = focused
                  ? 'accessibility'
                  : 'accessibility-outline';
                } else if(route.name === "Produtos"){
                  iconName = focused
                  ? 'list'
                  : 'list-outline';
                } else if(route.name === "Lista de Desejos"){
                  iconName = focused
                  ? 'heart'
                  : 'heart-outline';
                }
              
                return <Ionicons name={iconName} size={size} color={color} />
              },
              tabBarActiveTintColor: '#FF8F00',
              tabBarInactiveTintColor: 'black',
              tabBarHideOnKeyboard: true,
              headerShown: false,
            })}>
              <Tab.Screen name='Kit' component={MenuKit} />
              <Tab.Screen name='Sobre nós' component={MenuSobre} />
              <Tab.Screen name='Produtos' component={MenuVendas} />
              <Tab.Screen name='Lista de Desejos' component={MenuKit} />
          </Tab.Navigator>
}

export default function App() {

//Carrega a fonte para o projeto
const [ fonteCarregada ] = useFonts({
  "SpaceGRegular" : SpaceGrotesk_300Light,
  "SpaceGBold" : SpaceGrotesk_700Bold,
})


  //Checa se as fontes já foram carregadas
  if(!fonteCarregada){
    return <View />
  }

  return  <NavigationContainer>
            <TabsMenu />
          </NavigationContainer>
}
