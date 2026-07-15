import jsPDF from "jspdf";
import Button from "../ui/Button";

export default function ReportCard() {

  function generatePDF() {

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Digital Forensics Investigation Report", 20, 20);

    doc.setFontSize(14);

    doc.text("Case ID: CASE-2026-001", 20, 40);
    doc.text("Threat Level: HIGH", 20, 55);
    doc.text("Confidence: 96%", 20, 70);
    doc.text("Evidence Files: 18", 20, 85);
    doc.text("Devices: 6", 20, 100);
    doc.text("Users: 12", 20, 115);

    doc.text("Timeline Summary", 20, 140);

    doc.setFontSize(12);

    doc.text("- User Login", 30, 155);
    doc.text("- USB Connected", 30, 165);
    doc.text("- salary.xlsx Accessed", 30, 175);
    doc.text("- salary.xlsx Deleted", 30, 185);
    doc.text("- Dropbox Upload", 30, 195);

    doc.save("Investigation_Report.pdf");

  }


  return (

    <div className="bg-slate-800 rounded-xl p-8">

      <h2 className="text-2xl text-white font-bold mb-6">
        Investigation Report
      </h2>


      <div className="grid grid-cols-2 gap-4 text-gray-300">

        <p>
          <span className="text-white font-semibold">
            Case ID:
          </span>
          {" "}CASE-2026-001
        </p>


        <p>
          <span className="text-white font-semibold">
            Threat Level:
          </span>
          {" "}HIGH
        </p>


        <p>
          <span className="text-white font-semibold">
            Confidence:
          </span>
          {" "}96%
        </p>


        <p>
          <span className="text-white font-semibold">
            Evidence:
          </span>
          {" "}18 Files
        </p>


        <p>
          <span className="text-white font-semibold">
            Devices:
          </span>
          {" "}6
        </p>


        <p>
          <span className="text-white font-semibold">
            Users:
          </span>
          {" "}12
        </p>

      </div>


      <Button
        onClick={generatePDF}
        className="mt-8 bg-green-600 hover:bg-green-700"
      >
        Export PDF
      </Button>


    </div>

  );

}