import { Template1 } from "../templates/Template1";
import { Template2 } from "../templates/Template2";
import { Template3 } from "../templates/Template3";

export const ResumePreview = ({ data, template, reference }) => {
  {
    if (template === "template1") {
      return <Template1 data={data} reference={reference} />;
    } else if (template === "template2") {
      return <Template2 data={data} reference={reference} />;
    } else {
      return <Template3 data={data} reference={reference} />;
    }
  }
};
