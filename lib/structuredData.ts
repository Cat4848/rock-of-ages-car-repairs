import { Organization, Thing, WithContext, ImageObject } from "schema-dts";

export const business = {
  type: "Mobile Mechanic",
  countryCode: "+44",
  mobile: "7845465922",
  email: "catalinrol@gmail.com"
};

function jsonLd<T extends Thing>(data: WithContext<T>) {
  return `
    ${JSON.stringify(data)}
  `;
}

const image1: WithContext<ImageObject> = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  author: "Rock of Ages Auto Repairs",
  name: "Mobile Mechanic Kent",
  contentUrl: "yellow-toy-car-in-dramatic-desert-landscape.jpeg",
  description: "Mobile Mechanic Services Presentation"
};

export const organization = jsonLd<Organization>({
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  image: [image1],
  name: "Mobile Mechanic in Kent",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sunderland Close",
    postalCode: "ME1 3AS",
    addressRegion: "England",
    addressLocality: "Kent",
    addressCountry: "GB"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.376522,
    longitude: 0.487458
  }
});
