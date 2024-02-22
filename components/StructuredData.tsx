import Head from "next/head";

interface IStructuredData {
  data: string;
}

export default function StructuredData({ data }: IStructuredData) {
  return (
    <Head>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </Head>
  );
}
