import { FileText, User } from "lucide-react";
const Header = () => {
  return (
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
  );
};

export default Header;
