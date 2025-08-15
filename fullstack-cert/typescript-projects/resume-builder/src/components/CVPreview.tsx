import React from 'react';
import { CVData } from '../types/cv';
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar } from 'lucide-react';

interface CVPreviewProps {
  data: CVData;
}

export const CVPreview: React.FC<CVPreviewProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const getSkillBars = (level: string) => {
    const levels = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
    const count = levels[level as keyof typeof levels] || 2;
    return Array(4).fill(0).map((_, i) => (
      <div
        key={i}
        className={`h-2 w-6 rounded-sm ${
          i < count ? 'bg-blue-600' : 'bg-slate-200'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">{data.personalInfo.fullName || 'Your Name'}</h1>
          
          <div className="flex flex-wrap justify-center gap-4 text-blue-100 text-sm mt-4">
            {data.personalInfo.email && (
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                {data.personalInfo.email}
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                {data.personalInfo.phone}
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {data.personalInfo.location}
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                {data.personalInfo.website.replace(/^https?:\/\//, '')}
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-1" />
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
            <p className="text-slate-700 leading-relaxed">{data.personalInfo.summary}</p>
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
                <div key={exp.id} className="relative pl-4 border-l-2 border-slate-200">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-2 top-1"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">{exp.position}</h3>
                      <h4 className="text-lg text-blue-600 font-medium">{exp.company}</h4>
                    </div>
                    <div className="flex items-center text-slate-600 text-sm mt-1 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{exp.description}</p>
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
                <div key={edu.id} className="relative pl-4 border-l-2 border-slate-200">
                  <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-2 top-1"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">{edu.degree} in {edu.field}</h3>
                      <h4 className="text-lg text-green-600 font-medium">{edu.institution}</h4>
                      {edu.gpa && <p className="text-slate-600">GPA: {edu.gpa}</p>}
                    </div>
                    <div className="flex items-center text-slate-600 text-sm mt-1 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
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
                <div key={skill.id} className="flex items-center justify-between">
                  <span className="font-medium text-slate-700">{skill.name}</span>
                  <div className="flex items-center space-x-1 ml-4">
                    {getSkillBars(skill.level)}
                    <span className="text-xs text-slate-500 ml-2">{skill.level}</span>
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