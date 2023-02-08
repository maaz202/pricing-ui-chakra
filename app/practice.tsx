import React from 'react'
import { Heading, Text } from '@chakra-ui/react'

export default function Practice() {
  return (
    <>
      <h1>This is heading by h1</h1>
      <h2>This is heading by h2</h2>
      <p>This is paragraph by p</p>
      <Heading color="red" fontSize="48px">This is default heading by chakra</Heading>
      <Heading as="h1" color={"blue"}>This is h1 heading by chakra</Heading>
      <Text fontWeight="bold">This is paragraph by chakra</Text>
      <Heading>Flex box in html/css</Heading>
      <div 
        style={{
          color: "white",
          display: "flex", 
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green", 
          height: "500px"
        }}
      >
        <div style={{backgroundColor: "red", padding: "50px", height: "100px"}}>div1</div>
        <div style={{backgroundColor: "blue", padding: "50px", height: "100px"}}>div2</div>
        <div style={{backgroundColor: "orange", padding: "50px", height: "100px"}}>div3</div>
      </div>
    </>
  );
}
