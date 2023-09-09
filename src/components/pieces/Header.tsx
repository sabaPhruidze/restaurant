import { Helmet } from "react-helmet";
import ICON from "../../assets/Img/ICON.svg";
export default function Header() {
  const description =
    "This is a small project in order to test my skills what I learned during the framer motion course";
  return (
    <Helmet>
      <link rel="icon" href={ICON} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Saba phruidze" />
      <meta name="copyright" content="Copyright 2023 Saba phruidze" />
      <meta http-equiv="expires" content="Fri, 01 Jan 2030 00:00:00 GMT" />
      <meta name="description" content={description} />
      <title>Restaurant website</title>
      <meta name="description" content="Page description" />
    </Helmet>
  );
}
