import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Heading color={["red", "blue"]}>Chakra</Heading>
    </>
  );
}
