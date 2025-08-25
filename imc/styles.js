import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#273c75',
  },
  input: {
    height: 45,
    borderColor: '#dcdde1',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  botao: {
    backgroundColor: '#0097e6',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#44bd32',
  },
  classificacao: {
    fontSize: 20,
    marginTop: 8,
    color: '#353b48',
  },
  erro: {
    color: '#e84118',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
});