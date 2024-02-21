import Head from "next/head";

interface IStructuredData {
  data: string;
}

export default function StructuredData({ data }: IStructuredData) {
  return (
    <Head>
      <script
        key="structured-data"
        type="application-json"
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </Head>
  );
}
