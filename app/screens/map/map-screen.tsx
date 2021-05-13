import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import MapView from "react-native-maps"
import { Screen } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const MAP: ViewStyle = {
  flex: 1,
}

export const MapScreen = observer(function MapScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <MapView
        style={MAP}
        region={{
          latitude: 39,
          longitude: 24,
          latitudeDelta: 9,
          longitudeDelta: 9,
        }}
      ></MapView>
    </Screen>
  )
})
