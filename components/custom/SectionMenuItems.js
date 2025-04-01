import React from 'react'
import {Text, View, StyleSheet, SectionList} from 'react-native'

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

const Item = ({name, price}) => (
    <View style={[sectionStyles.innerContainer, sectionStyles.innerItemContainer]}>
        <Text>{name}</Text>
        <Text>{price}</Text>
    </View>
)
const SectionHeader = ({title}) => (
    <View style={[sectionStyles.innerHeaderContainer, sectionStyles.innerContainer]}>
            <Text style={sectionStyles.headerText}>{title}</Text>
        </View>
)

export default function SectionMenuItems() {
    const renderItem = ({item}) => <Item name={item.name} price={item.price} />
    const renderSectionHeader = ({section :{title}}) => <SectionHeader title={title} />
    
    return (
        <View style={sectionStyles.container}>
            <SectionList
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            ></SectionList>
        </View>
    );
}


const sectionStyles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        paddingHorizontal: 24
    },
    headerText: {
        fontSize: 14,
        fontWeight: 600
    },
    innerHeaderContainer: {
        backgroundColor: '#FBEC5D'
    },
    innerItemContainer: {
        backgroundColor: 'white',
    },
    innerContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        paddingVertical: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        marginVertical: 4,
        borderRadius: 6,
      },
    text: {
        color: 'white'
    }
})