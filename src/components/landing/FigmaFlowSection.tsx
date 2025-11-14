import { FlowDiagram } from "../../../figma/components/FlowDiagram";
import SectionShell from "./SectionShell";

const FigmaFlowSection = () => {
  return (
    <SectionShell
      id="how-it-works"
      tint="teal"
      className="overflow-visible"
      contentClassName="bg-transparent border-none shadow-none p-0"
    >
      <FlowDiagram />
    </SectionShell>
  );
};

export default FigmaFlowSection;
