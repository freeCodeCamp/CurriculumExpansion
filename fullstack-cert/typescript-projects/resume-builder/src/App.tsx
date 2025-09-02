import { useEffect, useState } from "react";
import "./App.css";

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  data,
  onChange,
}) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
        <i className="fa-solid fa-user w-4 h-3 mr-1 text-[16px] text-[#2563EF]"></i>
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 flex items-center">
            <i className="fa-solid fa-envelope w-4 h-4 mr-1 text-[16px]"></i>
            Email *
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 flex items-center">
            <i className="fa-solid fa-phone w-4 h-4 mr-1 text-[16px]"></i>
            Phone *
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 flex items-center">
            <i className="fa-solid fa-location-dot w-4 h-4 mr-1 text-[16px]"></i>
            Location *
          </label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="New York, NY"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 flex items-center">
            <i className="fa-solid fa-globe w-4 h-4 mr-1 text-[16px]"></i>
            Website
          </label>
          <input
            type="url"
            value={data.website || ""}
            onChange={(e) => handleChange("website", e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="https://johndoe.com"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 flex items-center">
            <i className="fa-brands fa-linkedin w-4 h-4 mr-1 text-[16px]"></i>
            LinkedIn
          </label>
          <input
            type="url"
            value={data.linkedin || ""}
            onChange={(e) => handleChange("linkedin", e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Professional Summary *
          </label>
          <textarea
            value={data.summary}
            onChange={(e) => handleChange("summary", e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
            placeholder="A brief summary of your professional background and career objectives..."
          />
        </div>
      </div>
    </div>
  );
};

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({
  data,
  onChange,
}) => {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };
    onChange([...data, newExperience]);
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: any,
  ) => {
    onChange(
      data.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    );
  };

  const removeExperience = (id: string) => {
    onChange(data.filter((exp) => exp.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800 flex items-center">
          <i className="fa-solid fa-briefcase w-4 h-4 mr-1 text-[16px] text-[#2563EF]"></i>
          Work Experience
        </h2>
        <button
          onClick={addExperience}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <i className="fa-solid fa-plus w-4 h-3 mr-1 text-[12px]"></i>
          Add Experience
        </button>
      </div>

      <div className="space-y-6">
        {data.map((experience) => (
          <div
            key={experience.id}
            className="border border-slate-200 rounded-lg p-4 relative"
          >
            <button
              onClick={() => removeExperience(experience.id)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors"
            >
              <i className="fa-solid fa-trash w-4 h-4 mr-2 text-[16px]"></i>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  value={experience.company}
                  onChange={(e) =>
                    updateExperience(experience.id, "company", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Position *
                </label>
                <input
                  type="text"
                  value={experience.position}
                  onChange={(e) =>
                    updateExperience(experience.id, "position", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Job Title"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <i className="fa-solid fa-calendar w-4 h-4 mr-1"></i>
                  Start Date *
                </label>
                <input
                  type="month"
                  value={experience.startDate}
                  onChange={(e) =>
                    updateExperience(experience.id, "startDate", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <i className="fa-solid fa-calendar w-4 h-4 mr-1"></i>
                  End Date
                </label>
                <input
                  type="month"
                  value={experience.endDate}
                  onChange={(e) =>
                    updateExperience(experience.id, "endDate", e.target.value)
                  }
                  disabled={experience.current}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-slate-100"
                />
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id={`current-${experience.id}`}
                    checked={experience.current}
                    onChange={(e) => {
                      updateExperience(
                        experience.id,
                        "current",
                        e.target.checked,
                      );
                      if (e.target.checked) {
                        updateExperience(experience.id, "endDate", "");
                      }
                    }}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`current-${experience.id}`}
                    className="ml-2 text-sm text-slate-700"
                  >
                    Currently working here
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Description *
              </label>
              <textarea
                value={experience.description}
                onChange={(e) =>
                  updateExperience(experience.id, "description", e.target.value)
                }
                rows={3}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                placeholder="Describe your key responsibilities and achievements..."
              />
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            <i className="w12 h12 mx-auto mb-4 fa-solid fa-briefcase text-[40px]"></i>
            <p>No work experience added yet.</p>
            <p className="text-sm">Click "Add Experience" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export const EducationForm: React.FC<EducationFormProps> = ({
  data,
  onChange,
}) => {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      current: false,
      gpa: "",
    };
    onChange([...data, newEducation]);
  };

  const updateEducation = (id: string, field: keyof Education, value: any) => {
    onChange(
      data.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    );
  };

  const removeEducation = (id: string) => {
    onChange(data.filter((edu) => edu.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800 flex items-center">
          <i className="fa-solid fa-graduation-cap w-5 h-5 mr-2 text-[16px] text-[#2563EF]"></i>
          Education
        </h2>
        <button
          onClick={addEducation}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <i className="fa-solid fa-plus w-4 h-3 mr-1 text-[12px]"></i>
          Add Education
        </button>
      </div>

      <div className="space-y-6">
        {data.map((education) => (
          <div
            key={education.id}
            className="border border-slate-200 rounded-lg p-4 relative"
          >
            <button
              onClick={() => removeEducation(education.id)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors"
            >
              <i className="fa-solid fa-trash w-4 h-4 mr-2 text-[16px]"></i>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Institution *
                </label>
                <input
                  type="text"
                  value={education.institution}
                  onChange={(e) =>
                    updateEducation(education.id, "institution", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="University Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Degree *
                </label>
                <input
                  type="text"
                  value={education.degree}
                  onChange={(e) =>
                    updateEducation(education.id, "degree", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Bachelor's, Master's, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Field of Study *
                </label>
                <input
                  type="text"
                  value={education.field}
                  onChange={(e) =>
                    updateEducation(education.id, "field", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Computer Science, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  GPA (Optional)
                </label>
                <input
                  type="text"
                  value={education.gpa || ""}
                  onChange={(e) =>
                    updateEducation(education.id, "gpa", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="3.8/4.0"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <i className="fa-solid fa-calendar w-4 h-4 mr-1"></i>
                  Start Date *
                </label>
                <input
                  type="month"
                  value={education.startDate}
                  onChange={(e) =>
                    updateEducation(education.id, "startDate", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <i className="fa-solid fa-calendar w-4 h-4 mr-1"></i>
                  End Date
                </label>
                <input
                  type="month"
                  value={education.endDate}
                  onChange={(e) =>
                    updateEducation(education.id, "endDate", e.target.value)
                  }
                  disabled={education.current}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-slate-100"
                />
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id={`current-edu-${education.id}`}
                    checked={education.current}
                    onChange={(e) => {
                      updateEducation(
                        education.id,
                        "current",
                        e.target.checked,
                      );
                      if (e.target.checked) {
                        updateEducation(education.id, "endDate", "");
                      }
                    }}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`current-edu-${education.id}`}
                    className="ml-2 text-sm text-slate-700"
                  >
                    Currently studying
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            <i className="fa-solid fa-graduation-cap mb-4 text-[38px]"></i>
            <p>No education added yet.</p>
            <p className="text-sm">Click "Add Education" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface SkillsFormProps {
  data: Skill[];
  onChange: (data: Skill[]) => void;
}

export const SkillsForm: React.FC<SkillsFormProps> = ({ data, onChange }) => {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "",
      level: "Intermediate",
    };
    onChange([...data, newSkill]);
  };

  const updateSkill = (id: string, field: keyof Skill, value: any) => {
    onChange(
      data.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill,
      ),
    );
  };

  const removeSkill = (id: string) => {
    onChange(data.filter((skill) => skill.id !== id));
  };

  const skillLevels: Skill["level"][] = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
  ];

  const getLevelColor = (level: Skill["level"]) => {
    const colors = {
      Beginner: "bg-yellow-100 text-yellow-800",
      Intermediate: "bg-blue-100 text-blue-800",
      Advanced: "bg-green-100 text-green-800",
      Expert: "bg-purple-100 text-purple-800",
    };
    return colors[level];
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800 flex items-center">
          <i className="fa-solid fa-bolt w-5 h-5 mr-2 text-blue-600 blue-filter"></i>
          Skills
        </h2>
        <button
          onClick={addSkill}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <i className="fa-solid fa-plus w-4 h-3 mr-2 text-[12px]"></i>
          Add Skill
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((skill) => (
          <div
            key={skill.id}
            className="border border-slate-200 rounded-lg p-4 relative"
          >
            <button
              onClick={() => removeSkill(skill.id)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors"
            >
              <i className="fa-solid fa-trash w-4 h-4 mr-2 text-[16px]"></i>
            </button>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Skill Name *
                </label>
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) =>
                    updateSkill(skill.id, "name", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="JavaScript, React, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Proficiency Level
                </label>
                <select
                  value={skill.level}
                  onChange={(e) =>
                    updateSkill(
                      skill.id,
                      "level",
                      e.target.value as Skill["level"],
                    )
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  {skillLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
                <div className="mt-2">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(skill.level)}`}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          <i className="w-12 h-12 mx-auto mb-4 fa-solid fa-bolt text-[40px]"></i>
          <p>No skills added yet.</p>
          <p className="text-sm">Click "Add Skill" to get started.</p>
        </div>
      )}
    </div>
  );
};

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface CVData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

interface CVPreviewProps {
  data: CVData;
}

export const CVPreview: React.FC<CVPreviewProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const getSkillBars = (level: string) => {
    const levels = { Beginner: 1, Intermediate: 2, Advanced: 3, Expert: 4 };
    const count = levels[level as keyof typeof levels] || 2;
    return Array(4)
      .fill(0)
      .map((_, i) => (
        <div
          key={i}
          className={`h-2 w-6 rounded-sm ${
            i < count ? "bg-blue-600" : "bg-slate-200"
          }`}
        />
      ));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">
            {data.personalInfo.fullName || "Your Name"}
          </h1>

          <div className="flex flex-wrap justify-center gap-4 text-blue-100 text-sm mt-4">
            {data.personalInfo.email && (
              <div className="flex items-center">
                <i className="fa-solid fa-envelope w-4 h-4 mr-1 text-[15px] text-white" />
                {data.personalInfo.email}
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center">
                <i className="fa-solid fa-phone w-4 h-4 mr-1 text-[15px] text-white" />
                {data.personalInfo.phone}
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center">
                <i className="fa-solid fa-location-dot w-4 h-4 mr-1 text-[15px] text-white" />
                {data.personalInfo.location}
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center">
                <i className="fa-solid fa-globe w-4 h-4 mr-1 text-[15px] text-white" />
                {data.personalInfo.website.replace(/^https?:\/\//, "")}
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center">
                <i className="fa-brands fa-linkedin w-4 h-4 mr-1 text-[15px] text-white" />
                LinkedIn
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Professional Summary */}
        {data.personalInfo.summary && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-4">
              Professional Summary
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Work Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-6">
              Work Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-4 border-l-2 border-slate-200"
                >
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-2 top-1"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg text-blue-600 font-medium">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex items-center text-slate-600 text-sm mt-1 md:mt-0">
                      <i className="fa-solid fa-calendar w-4 h-4 mr-1 text-[16px] text-[black]"></i>
                      {formatDate(exp.startDate)} -{" "}
                      {exp.current ? "Present" : formatDate(exp.endDate)}
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-6">
              Education
            </h2>
            <div className="space-y-6">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative pl-4 border-l-2 border-slate-200"
                >
                  <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-2 top-1"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">
                        {edu.degree} in {edu.field}
                      </h3>
                      <h4 className="text-lg text-green-600 font-medium">
                        {edu.institution}
                      </h4>
                      {edu.gpa && (
                        <p className="text-slate-600">GPA: {edu.gpa}</p>
                      )}
                    </div>
                    <div className="flex items-center text-slate-600 text-sm mt-1 md:mt-0">
                      <i className="fa-solid fa-calendar w-4 h-4 mr-1 text-[16px] text-[black]"></i>
                      {formatDate(edu.startDate)} -{" "}
                      {edu.current ? "Present" : formatDate(edu.endDate)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-600 pb-2 mb-6">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-between"
                >
                  <span className="font-medium text-slate-700">
                    {skill.name}
                  </span>
                  <div className="flex items-center space-x-1 ml-4">
                    {getSkillBars(skill.level)}
                    <span className="text-xs text-slate-500 ml-2">
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

const Header = ({
  previewState,
}: {
  previewState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) => {
  const [showPreview, setShowPreview] = previewState;
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <i className="fa-solid fa-file w-8 h-8 mr-1 text-[30px] text-[#2563EF]"></i>
            <h1 className="text-2xl font-bold text-slate-900">CV Builder</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="lg:hidden flex items-center px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              {showPreview ? (
                <>
                  <i className="fa-solid fa-eye-slash w-4 h-4 mr-2"></i>
                  Hide Preview
                </>
              ) : (
                <>
                  <i className="fa-solid fa-eye w-4 h-4 mr-2"></i>
                  Show Preview
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const STORAGE_KEY = "cvBuilderDataApp";

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
  const previewState = useState(true);
  const [showPreview] = previewState;
  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData && JSON.parse(savedData)?.personalInfo?.fullName) {
      try {
        setCVData(JSON.parse(savedData));
      } catch (error) {
        console.error("Error loading saved CV data:", error);
      }
    }
  }, []);

  // Save data to localStorage whenever cvData changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cvData));
  }, [cvData]);

  const updatePersonalInfo = (personalInfo: CVData["personalInfo"]) => {
    setCVData((prev) => ({ ...prev, personalInfo }));
  };

  const updateExperience = (experience: CVData["experience"]) => {
    setCVData((prev) => ({ ...prev, experience }));
  };

  const updateEducation = (education: CVData["education"]) => {
    setCVData((prev) => ({ ...prev, education }));
  };

  const updateSkills = (skills: CVData["skills"]) => {
    setCVData((prev) => ({ ...prev, skills }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header previewState={previewState} />
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
            <EducationForm data={cvData.education} onChange={updateEducation} />

            <SkillsForm data={cvData.skills} onChange={updateSkills} />
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
