import Head from "next/head";

export default function StructuredData({ data }) {
  return (
    <Head>
      <script
        key="structured-data"
        type="application-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}
