import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
});

const CartPDF = ({ cartItems }) => (
  <Document>
    <Page style={styles.page}>
      {cartItems.map((item, index) => (
        <View key={index}>
          <Text style={styles.text}>Item: {item.nome}</Text>
          <Text style={styles.text}>Price: R${item.preco}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default CartPDF;
