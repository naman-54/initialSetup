/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu'

const MenuOption = (props) => {
    let _menu = null
  const { icon, title, menuList, iconStyle, style, onPressMenuItem = () => {}, type } = props
  const setMenuRef = ref => {
    _menu = ref
  }
  const showMenu = () => {
    _menu.show()
  }
  const hideMenu = () => {
    _menu.hide()
  }
  return <View key={type}>
        <Menu
      ref={setMenuRef}
      button={<TouchableOpacity
        style={style} onPress={showMenu}>
        <Image
   style={iconStyle}
   source={icon}
   />
  </TouchableOpacity>}>
     {menuList.map((item, index) => {
       return <MenuItem disabled={item.disabled}
        onPress={() => {
          onPressMenuItem(item, index, type)
          hideMenu()
        }}>{item.title}</MenuItem>
     })}
    </Menu>
    </View>
}
export default MenuOption
