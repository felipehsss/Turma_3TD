import { View,TextInput, Button, StyleSheet, Alert } from "react-native";
import { useSQLiteContext } from "expo-sqlite";

const UserForm = () => {
const [form, setForm] = useState({
  firstname: '',
  lastname: '',
  email: '',
  phone: ''
});

const db = useSQLiteContext();

const handleSubmit = async () => {

  try {
    if(!form.firstname || !form.lastname || !form.email || !form.phone) {
        throw new Error('Preencha todos os campos');
        await db.execAsync(`
          INSERT INTO users  (firstname, lastname, email, phone)
          VALUES (?, ?, ?, ?)` , [form.firstname, form.lastname, form.email, form.phone]);
          Alert.alert('Usuário adicionado!');
          setForm({
            firstname: '',
            lastname: '',
            email: '',
            phone: ''
          });

    } catch (error) {
      console.error(error);
      Alert.alert('Erro', error.message || 'Ocorreu um erro ao adicionar o usuário');

  }

}

}