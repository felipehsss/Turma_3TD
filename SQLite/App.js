import { SQLiteProviter } from 'expo-sqlite-provier';


export default function App() {
  return (
<SQLiteProviter 
 databaseName='userDatabase2.db'
 onInit={async (db) => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstname TEXT,
      lastname TEXT
      email TEXT,
      phone TEXT
    );
    PRAGMA journal_mode = WAL;
    `)
 }}
 options={{ useNewConnection: false }}
 >

</SQLiteProviter>    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
