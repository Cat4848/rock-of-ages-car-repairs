import Head from "next/head";
import { Organization, Thing, WithContext } from "schema-dts";

interface IStructuredData<T extends Thing> {
  data: WithContext<T>;
}

export default function StructuredData<T extends Thing>({
  data
}: IStructuredData<T>) {
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
