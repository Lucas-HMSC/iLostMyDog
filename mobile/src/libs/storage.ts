import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserData {
  user: {
    Id_Usuario: number;
    Nome: string;
    Telefone: string;
    Email: string;
    Cidade: string;
  }
}

export async function saveUserData(data: UserData): Promise<void> {
  try {
    await AsyncStorage.setItem('@iLostMyDog:userData', JSON.stringify(data));
  } catch(e) {
    console.log(e);
  }
}

export async function returnUserData() {
  try {
    const data = await AsyncStorage.getItem('@iLostMyDog:userData');

    return JSON.parse(data as any);
  } catch(e) {
    console.log(e);
  }
}

export async function removeUserData() {
  await AsyncStorage.removeItem('@iLostMyDog:userData');
}