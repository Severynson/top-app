import Head from "next/head";
import Image from "next/image";
import { Button, Htag, P, Tag } from "../Components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <P size="l">Big</P>
      <P size="m">Medium</P>
      <P size="s">Small</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="m" color='green'>Green</Tag>
      <Tag size="m" color="primary">Green</Tag>
    </>
  );
}
