/* eslint-disable react/no-unescaped-entities */
import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface TazamaContactUsProps {
    fullName?: string;
    email?: string;
    message?: string;
}

export const TazamaContactUs = ({
    fullName,
    email,
    message,
}: TazamaContactUsProps) => {

    const date = new Date()

    return (
        <Html>
            <Head />
            <Preview>Yelp recent login</Preview>
            <Body style={main}>
                <div className="border-t-8 border-primary pt-24">
                    <Container className="max-w-3xl mx-auto px-8">
                        <Section style={logo} className="mb-16 mx-auto">
                            <Img
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1734352663/tazama-gold_ithy47.png"
                                className="mx-auto w-80"
                            />
                        </Section>

                        <Section style={content}>

                            <Row style={{ ...boxInfos, paddingBottom: "" }}>
                                <Column>
                                    <Heading
                                        style={{
                                            fontSize: 32,
                                            fontWeight: "bold",
                                            textAlign: "center",
                                        }}
                                    >
                                        Hi There,
                                    </Heading>
                                    <Text
                                        style={{
                                            fontSize: 24,
                                            textAlign: "center",
                                            lineHeight: 1.35,
                                            marginBottom: 32
                                        }}
                                    >
                                        We got a new form submission from the Tazama Africa Safaris website.
                                    </Text>

                                    <Text style={paragraph}>
                                        <b>Full Name: </b>
                                        {fullName}
                                    </Text>
                                    <Text style={{ ...paragraph, marginTop: -5 }}>
                                        <b>Email: </b>
                                        {email}
                                    </Text>
                                    <Text style={{ ...paragraph, marginTop: -5 }}>
                                        <b>Message: </b>
                                    </Text>

                                    <Text style={paragraph}>
                                        {message}
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        <Section style={containerImageFooter}>
                            <Img
                                style={image}
                                width={620}
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1734352663/buildings_xvblqa.png"
                                className="mx-auto"
                            />
                        </Section>

                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 12,
                                color: "rgb(0,0,0, 0.7)",
                            }}
                        >
                            © {date.getFullYear()} | Tazama Africa Safaris, Arusha, Tanzania
                            | www.tazamaafaricasafaris.com
                        </Text>
                    </Container>
                </div>
            </Body>
        </Html>
    );
};

export default TazamaContactUs;

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

const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
};

const image = {
    maxWidth: "100%",
    margin: "auto"
};

const boxInfos = {
    padding: "20px",
};

const containerImageFooter = {
    padding: "45px 0 0 0",
    marginTop: 80
};
