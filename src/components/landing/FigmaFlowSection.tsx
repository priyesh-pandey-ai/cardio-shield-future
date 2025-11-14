import { FlowDiagram } from "../../../figma/components/FlowDiagram";

const FigmaFlowSection = () => {
  return (
    <section id="how-it-works" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute inset-x-0 top-10 flex justify-center">
        <div className="w-[60%] h-48 bg-gradient-to-r from-teal-200 to-emerald-200 opacity-30 blur-3xl pointer-events-none" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="w-[70%] h-60 bg-gradient-to-r from-white via-teal-100 to-white opacity-60 blur-3xl pointer-events-none" />
      </div>
      <div className="relative z-10">
        <FlowDiagram />
      </div>
    </section>
  );
};

export default FigmaFlowSection;
