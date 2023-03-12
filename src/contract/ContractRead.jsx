import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactSeo } from "react-seo";

const ContractRead = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://be-law-pq.vercel.app/api/getContract/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Helmet>
        <ReactSeo
          title="Belovedthorlani"
          description={`This is the answer to the law of contract question ${data.question}`}
          image="data:image/png;base64,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"
          pathname="/legal"
          siteName="Belovedthorlani"
          twitterUsername="@Thorlanii"
          canonicalUrl={`https://www.belovedthorlani.com.ng/legal${id}`}
          meta={[
            {
              name: "keywords",
              content: `law of contract, ${data.question}, ${data.answer}`,
            },
            { name: "author", content: "Thorlani" },
          ]}
        />
      </Helmet>
      <div className="w-full h-fit px-[8%] py-[4%] grid gap-8">
        <div className="w-full h-fit p-5 shadow-xl">
          <h1 className="px-[2%] mt-[30px] font-bold  lg:font-extrabold text-4xl md:text-7xl text-left">
            {data.question}
          </h1>
          <div className="px-[2%] flex items-center mt-[15px]">
            <div className="flex flex-row items-center text-xs md:text-sm">
              <span>Author: </span>
              <span className="font-bold text-sm md:text-base ml-3">
                Thorlani
              </span>
            </div>
            <div className="ml-12 flex flex-row items-center text-xs md:text-sm">
              <span>Date: </span>
              <span className="font-bold text-sm md:text-base ml-3">
                2020-08-26
              </span>
            </div>
          </div>
          <div
            className="px-[2%] mt-[50px] md:mt-[70px] lg:mt-[100px]"
            dangerouslySetInnerHTML={{ __html: data.answer }}
          ></div>
          <p className="px-[2%] my-[20px] font-thin text-sm">
            <i>
              <span className="underline">Note: </span>This answer should only
              be taken as a guide to prepare for your exams or to learn.
            </i>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContractRead;
