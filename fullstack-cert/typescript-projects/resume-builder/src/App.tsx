import { FileText, User } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { CVData } from "./types/cv";
import "./App.css";
import { Field } from "./Field";

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

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-slate-900">CV Builder</h1>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div
            className={`space-y-8 ${showPreview ? "lg:block" : "block"} ${showPreview && "hidden lg:block"}`}
          >
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Personal Information
              </h2>

              <form>
                <Field
                  onChange={handleUpdateName}
                  labelText={"Full Name *"}
                  fieldType={"text"}
                />

                <Field
                  onChange={handleUpdateEmail}
                  labelText={"Email"}
                  fieldType={"email"}
                />
                <Field
                  onChange={handleUpdatePhone}
                  labelText={"Phone"}
                  fieldType={"phone"}
                />
                <Field
                  onChange={handleUpdateObjective}
                  labelText={"Objective"}
                  fieldType={"text"}
                />
                <Field
                  onChange={handleUpdateDegree}
                  labelText={"Degree"}
                  fieldType={"text"}
                />
                <Field
                  onChange={handleUpdateGradYear}
                  labelText={"GradYear"}
                  fieldType={"text"}
                />
              </form>
            </div>
          </div>
          {/* Previw Section */}
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
                <label>
                  fullName: <p id="name">{fullName}</p>
                </label>
                <label>
                  Email: <p id="email">{email}</p>
                </label>
                <label>
                  Phone: <p id="phone">{phone}</p>
                </label>
                <label>
                  Objective: <p id="objective">{objective}</p>
                </label>
                <div>
                  <label>
                    Degree: <p id="degree">{degree}</p>
                  </label>
                  <label>
                    Year: <p id="gradYear">{gradYear}</p>
                  </label>
                </div>
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
