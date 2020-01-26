import Head from 'next/head';
import resolvePath from '@src/utils/resolvePath';

export default ({ title, description, url, logo, author, siteName, publishedTime, modifiedTime }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={logo} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      <meta property="article:modified_time" content={modifiedTime} />
      <meta property="article:author" content={author} />

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/assets/images/favicon.png?123" type="image/png" />
      <link rel="stylesheet" href="/assets/css/animate.css" />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/default.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />

      {/* FOR IE9 below */}
      {/* [if lt IE 9]> */}
      <script src="/assets/js/vendor/jquery-1.12.4.min.js"></script>
      <script src="/assets/js/vendor/modernizr-3.7.1.min.js"></script>
      <script src="/assets/js/bootstrap.min.js"></script>
      <script src="/assets/js/jquery.easing.min.js"></script>
    </Head >
  );
};
