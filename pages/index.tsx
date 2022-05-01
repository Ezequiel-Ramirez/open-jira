import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import { Typography } from "@mui/material";
import { Layaut } from "../components/layauts";

const HomePage: NextPage = () => {
  return (
    <Layaut>
      <Typography variant="h1" color="primary">
        Hola Mundo
      </Typography>
    </Layaut>
  );
};
export default HomePage;
