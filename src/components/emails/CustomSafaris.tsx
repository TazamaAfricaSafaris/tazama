import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  fullNames: string;
  email: string;
  phoneNumber: string;
  peopleInTheGroup: number;
  date: string;
  howFar?: string;
  additionalComments?: string;
}

export const CustomSafarisEmail = ({
  fullNames,
  email,
  phoneNumber,
  peopleInTheGroup,
  date,
  howFar,
  additionalComments,
}: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Tazama Custom Safaris Email</Preview>
      <Body style={main}>
        <Container>
          {/* <Section style={logo}>
            <Img src={`${baseUrl}/static/yelp-logo.png`} />
          </Section> */}

          <Section style={content}>
            {/* <Row>
              <Img
                style={image}
                width={620}
                src={`${baseUrl}/static/yelp-header.png`}
              />
            </Row> */}

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi James,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  There is a new guest requesting for a custom safari
                </Heading>

                <Text style={paragraph}>
                  <b className="text-[#a87133]">Full Names </b>
                  {fullNames}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b className="text-[#a87133]">Email </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b className="text-[#a87133]">Phone Number: </b>
                  {phoneNumber}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b className="text-[#a87133]">People in the group</b>
                  {peopleInTheGroup}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b className="text-[#a87133]">Date </b>
                  {date}
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b className="text-[#a87133]">
                    Stage in the booking process:{" "}
                  </b>
                  {howFar}
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b className="text-[#a87133]">Phone Number: </b>
                  {phoneNumber}
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b className="text-[#a87133]">Additinal comments: </b>
                  {additionalComments}
                </Text>
                <Text style={paragraph}>
                  {` Goodluck in closing this sale :)`}
                </Text>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | Tazama Africa Safaris | Sakina, Arusha - Tanzania
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default CustomSafarisEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
