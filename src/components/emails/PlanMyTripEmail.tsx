import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  tripType: string;
  addOns: string;
  planningProcess: string;
  numberOfGuests: string;
  budget: string;
  dateofTravel: string;
  additionalPlans: string;
  mustSeePlans: string;
  additionalComments?: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const PlanMyTripEmail = (props: EmailProps) => (
  <Html>
    <Head />
    <Preview>New Trip Enquiry!!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Text style={title}>Guest Full Names</Text>
          <Text style={paragraph}>
            {`${props.firstName} ${props.lastName}`}
          </Text>
          <Hr style={hr} />

          <Text style={title}>Email</Text>

          <Text style={paragraph}>{props.email}</Text>

          <Hr style={hr} />
          <Text style={title}>Type of trip the guest is interested in</Text>
          <Text style={paragraph}>{props.tripType}</Text>
          <Hr style={hr} />

          <Text style={title}>
            {`${props.firstName} would like to add the following on this trip`}
          </Text>
          <Text style={paragraph}>{props.addOns}</Text>
          <Hr style={hr} />

          <Text style={title}>
            How far the guest is on the planning Process
          </Text>
          <Text style={paragraph}>{props.planningProcess}</Text>
          <Hr style={hr} />

          <Text style={title}>Number of guests</Text>
          <Text style={paragraph}>{props.numberOfGuests}</Text>
          <Hr style={hr} />

          <Text style={title}>Date of Travel</Text>
          <Text style={paragraph}>{props.dateofTravel}</Text>
          <Hr style={hr} />

          <Text style={title}>Budget</Text>
          <Text style={paragraph}>{props.budget}</Text>
          <Hr style={hr} />

          <Text style={title}>Trip Extra Plans</Text>
          <Text style={paragraph}>{props.additionalPlans}</Text>
          <Hr style={hr} />

          <Text style={title}>Specific Wildlidfe experiences</Text>
          <Text style={paragraph}>{props.additionalComments}</Text>
          <Hr style={hr} />

          <Text style={footer}>
            Tazama Africa Safaris, Sakina, Arusha - Tanzania
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default PlanMyTripEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px  0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "10 48px",
  // paddingLeft: "10px"
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const title = {
  fontSize: "20px",
  fontWeight: "bold",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
