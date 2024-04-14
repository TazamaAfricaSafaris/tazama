"use client";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Section,
  Text,
  Tailwind,
  Row,
} from "@react-email/components";
import { Font } from "@react-email/font";
import * as React from "react";


interface EmailProps {
  fullNames: string;
  email: string;
  message: string;
}

export default function Email(props: EmailProps) {
  const defaultTheme = require("tailwindcss/defaultTheme");
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            fontFamily: {
              sans: ["Inter", ...defaultTheme.fontFamily.sans],
              display: ["Lexend", ...defaultTheme.fontFamily.sans],
            },
          },
        },
      }}
    >
      <Head />
      <Html>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Body style={main}>
          <Container className="mx-auto  mb-10 h-full w-full max-w-[680px] bg-[#f6f1eb]">
            <Row className="relative flex flex-col rounded-t-[5px] bg-black">
              <Img
                // width={146}
                height={200}
                width="full"
                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1708503376/about/kdn3adaglqhebzttfttk.jpg"
                className=" placeholder w-full rounded-t-md object-cover opacity-50"
              />

              {/* <Text className="absolute  bottom-0 text-white text-xl pl-5">New Trip</Text> */}
            </Row>

            <Section className="ml-[20px] mt-[20px] max-w-[600px]">
              <Heading
                as="h2"
                className="text-xl font-bold leading-[21px] text-[#0c0d0e]"
              >
                A new guest has contacted you on the page
              </Heading>

              <Row className="relative">
                <Text className=" bg-[#a87133] p-3 text-lg font-medium leading-[27px] text-white">
                  Guest Full Names
                </Text>
                <Text className="absolute top-[67px] mt-0  bg-[#c29c70] p-3 text-base text-zinc-900">{`${props.fullNames}`}</Text>
              </Row>
              <Row className="relative mt-10">
                <Text className=" bg-[#a87133] p-3 text-lg font-medium leading-[27px] text-white">
                  Email
                </Text>
                <Text className="absolute top-[67px] mt-0 bg-[#c29c70] p-3 text-base text-zinc-900">
                  {props.email}
                </Text>
              </Row>

              <Row className="relative mt-10">
                <Text className=" bg-[#a87133] p-3 text-lg font-medium leading-[27px] text-white">
                  Message
                </Text>
                <Text className="absolute top-[67px] mt-0 bg-[#c29c70] p-3 text-base text-zinc-900">
                  {props.message}
                </Text>
              </Row>

              <Hr style={divider} className="mb-20" />
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

const main = {
  backgroundColor: "#f3f3f5",
  // fontFamily: "Montserrat, sans-serif",
};

const divider = {
  margin: "0",
};
