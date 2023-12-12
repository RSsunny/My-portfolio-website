import { PDFDownloadLink } from "@react-pdf/renderer";
import MyResume from "../ui/MyResume";

function DownlodCV() {
  return (
    <div className="App">
      <PDFDownloadLink document={<MyResume />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download CV..!"
        }
      </PDFDownloadLink>
    </div>
  );
}

export default DownlodCV;
