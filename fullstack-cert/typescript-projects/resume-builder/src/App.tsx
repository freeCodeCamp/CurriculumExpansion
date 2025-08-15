import { FileText, User } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { CVData } from "./types/cv";
import "./App.css";
import { Field } from "./Field";
import Header from "./components/Header";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { CVPreview } from "./components/CVPreview";
import { ExperienceForm } from "./components/ExperienceForm";

export function App() {
  const [cvData, setCVData] = useState<CVData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      summary: "",
    },
    experience: [],
    education: [],
    skills: [],
  });
  const [showPreview, setShowPreview] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [objective, setObjective] = useState("");
  const [degree, setDegree] = useState("");
  const [gradYear, setGradYear] = useState(0);

  function handleUpdateName(e: ChangeEvent) {
    setFullName((e.target as HTMLInputElement).value);
  }

  function handleUpdateEmail(e: ChangeEvent) {
    setEmail((e.target as HTMLInputElement).value);
  }

  function handleUpdatePhone(e: ChangeEvent) {
    setPhone((e.target as HTMLInputElement).value);
  }

  function handleUpdateObjective(e: ChangeEvent) {
    setObjective((e.target as HTMLInputElement).value);
  }

  function handleUpdateDegree(e: ChangeEvent) {
    setDegree((e.target as HTMLInputElement).value);
  }

  function handleUpdateGradYear(e: ChangeEvent) {
    const gradYear = parseInt((e.target as HTMLInputElement).value);
    const cutOffYear = 1976;
    if (Number.isSafeInteger(gradYear) && gradYear > cutOffYear) {
      setGradYear(parseInt((e.target as HTMLInputElement).value));
    } else {
      // TODO: add validation
    }
  }

  const updatePersonalInfo = (personalInfo: CVData["personalInfo"]) => {
    setCVData((prev) => ({ ...prev, personalInfo }));
  };

  const updateExperience = (experience: CVData["experience"]) => {
    setCVData((prev) => ({ ...prev, experience }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div
            className={`space-y-8 ${showPreview ? "lg:block" : "block"} ${showPreview && "hidden lg:block"}`}
          >
            <PersonalInfoForm
              data={cvData.personalInfo}
              onChange={updatePersonalInfo}
            />
            <ExperienceForm
              data={cvData.experience}
              onChange={updateExperience}
            />
          </div>
          {/* Preview Section */}
          <article
            className={`${!showPreview ? "lg:block" : "block"} ${!showPreview && "hidden lg:block"}`}
          >
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
                <h2 className="text-lg font-semibold text-slate-800 mb-2">
                  Live Preview
                </h2>
                <p className="text-sm text-slate-600">
                  Your CV updates in real-time as you fill out the form.
                </p>
              </div>

              <div className="bg-slate-100 rounded-lg p-4 max-h-[calc(100vh-12rem)] overflow-auto">
                <CVPreview data={cvData} />
              </div>
            </div>
          </article>
        </div>
      </main>
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-600">
            <p className="mb-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            <p className="text-sm">
              Your CV data is automatically saved in your browser's local
              storage.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
