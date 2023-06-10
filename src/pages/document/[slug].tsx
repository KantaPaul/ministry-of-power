import {
  getStaticProps,
  getStaticPaths,
} from "@framework/ssr/document-type.ssr";
export { getStaticProps, getStaticPaths };
import Banner from "@components/banner/Banner";
import { Table } from "@components/ui/Table";
import { PdfIcon } from "@components/icons/pdf-icon";
import { formatDate } from "@lib/format-date";
import Link from "next/link";
import { DocIcon } from "@components/icons/word-icon";
import { LinkIcon } from "@components/icons/link";
import { useRouter } from "next/router";
import { Documentation } from "@type/index";
import DOMPurify from "isomorphic-dompurify";

const Tender = ({ document: columnData }: { document: Documentation[] }) => {
  const router = useRouter();

  if (router?.query?.slug === "eknojore") {
    return (
      <>
        <Banner
          innerBannerBgImg={"/assets/img/inner-banner.png"}
          tag="MPEMR"
          title="Data List"
          subTitle={router?.query?.slug as string}
        />
        <div className="py-[60px] lg:py-24 relative overflow-hidden">
          <div className="content_body">
            {columnData?.map((data: Documentation, index: number) => {
              return (
                <div key={index}>
                  <div className="mb-8">
                    <h3 className="text-2xl">{data?.title}</h3>
                    <p>{formatDate(data?.publication_date)}</p>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(data?.description),
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  const columns = [
    {
      title: "ক্রমিক",
      dataIndex: "docID",
      key: "docID",
      width: 100,
      align: "left",
    },
    {
      title: "শিরোনাম",
      dataIndex: "title",
      key: "title",
      width: 400,
      align: "left",
    },
    {
      title: "প্রকাশের তারিখ",
      dataIndex: "publication_date",
      key: "publication_date",
      width: 150,
      align: "left",
      render: (publication_date: string) => (
        <span>{formatDate(publication_date)}</span>
      ),
    },
    {
      title: "ডাউনলোড",
      width: 200,
      render: (file: any) => (
        <div className="flex justify-center text-5xl gap-4">
          {file?.doc_file ? (
            <Link
              href={file?.doc_file}
              target="_blank"
              rel="nofollow"
              className="text-red-500"
            >
              <PdfIcon />
            </Link>
          ) : (
            ""
          )}
          {file?.word_file ? (
            <Link
              href={file?.word_file}
              target="_blank"
              rel="nofollow"
              className="text-blue-500"
            >
              <DocIcon />
            </Link>
          ) : (
            ""
          )}
          {file?.file_link ? (
            <Link
              href={file?.file_link}
              target="_blank"
              rel="nofollow"
              className="text-green-500"
            >
              <LinkIcon />
            </Link>
          ) : (
            ""
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <Banner
        innerBannerBgImg={"/assets/img/inner-banner.png"}
        tag="MPEMR"
        title="Data List"
        subTitle={router?.query?.slug as string}
      />

      <div className="py-[60px] lg:py-24 relative overflow-hidden">
        <div className="content_body">
          <Table
            // @ts-ignore
            columns={columns}
            emptyText={"Data not found"}
            data={columnData}
            rowKey="docID"
            scroll={{ x: 580 }}
          />
        </div>
      </div>
    </>
  );
};

export default Tender;
