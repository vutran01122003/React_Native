import { Text, SafeAreaView, View, Button } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView>
      <View class="auth_container" style={{background: "#00CCF9", height: "100vh", width: "100vw", display: "flex",  alignItems: "center", justifyContent: "space-around"}}>
          <View style={{height: "100px", width: "100px", borderRadius: "50%", border: "8px solid black"}}></View>
          <View class="auth_content" style={{display: "flex", flexDirection: "column", gap: "40px", alignItems: "center"}}>
            <Text class="auth_title" style={{display: "block", fontWeight: "700", fontSize: "18px"}}>GROW YOUR BUSINESS</Text>
            <Text class="auth_text" style={{display: "block", fontWeight: "600", fontSize: "16px", textAlign: "center"}}>We will help you to grow your business using online server</Text>
          </View>

          <View class="auth_button_group" style={{display: "flex", flexDirection: "row", gap: "40px"}}>
              <View class="auth_login_btn" style={{display: "flex", justifyContent: "center", alignItems: "center", background: "yellow", width: "100px", height: "35px", borderRadius: "8px", cursor: "pointer"}}>
                <Text style={{fontWeight: "700"}}>LOGIN</Text>
              </View>
              <View class="auth_register_btn" style={{display: "flex", justifyContent: "center", alignItems: "center", background: "yellow", width: "100px", height: "35px", borderRadius: "8px", cursor: "pointer"}}>
                <Text style={{fontWeight: "700"}}>SIGN UP</Text>
              </View>
          </View>
      </View>
    </SafeAreaView>
  );
}
