import DocLayout from "../../components/DocLayout";
import { sideMenuItems } from "../../utils/mdxUtils";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Button } from "../../components";
import FeaturesBlock from "../../blocks/features-block";
import HeroBlock from "../../blocks/hero-block";
import Callout from "../../blocks/callout-block";
import ReactPlayer from "react-player/lazy";
import Page404 from "../404.js";
import { useTina } from "tinacms/dist/react";
import { client } from "../../.tina/__generated__/client";
import { useColorMode } from "@xstyled/styled-components";
import { useEffect } from "react";
const components = {
  Callout: (props) => {
    return <Callout callout={props} />;
  },
  Button: (props) => {
    return (
      <Button as="a" href={props.url} variant={props.type}>
        {props.text}
      </Button>
    );
  },
  Hero: (props) => {
    return <HeroBlock hero={props} />;
  },
  FeatureSection: (props) => {
    return <FeaturesBlock features={props.featureList} />;
  },
  VideoPlayer: (props) => {
    // <iframe  src="https://www.loom.com/embed/f4853da64a074612a9472cf65e519909" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    return (
      <iframe
        src={props.url}
        width="640"
        height="416"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      ></iframe>
    );
  },
};

function DocPage(props) {
  const [mode, setMode] = useColorMode();
  useEffect(() => {
    setMode("dark");
  }, []);
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  if (data && data.docs) {
    const sideNav = sideMenuItems(data);
    return (
      <DocLayout title={data.docs.title} navGroups={sideNav}>
        <TinaMarkdown components={components} content={data.docs.body} />
      </DocLayout>
    );
  } else {
    return <Page404 />;
  }
}
export default DocPage;

export const getStaticProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.documentQuery({
    relativePath: `${params.filename}.mdx`,
  });
  return {
    props: {
      variables,
      data,
      query,
    },
  };
};

export const getStaticPaths = async () => {
  const docsListData = await client.queries.docsConnection({});

  return {
    paths:
      docsListData?.docsConnection?.edges?.map((doc) => ({
        params: { filename: doc.node._sys.filename },
      })) || [],
    fallback: "blocking",
  };
};
