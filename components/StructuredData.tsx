interface IStructuredData {
  data: string;
}

export default function StructuredData({ data }: IStructuredData) {
  return (
    <script
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
