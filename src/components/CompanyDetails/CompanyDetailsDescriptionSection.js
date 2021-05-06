import parse from 'html-react-parser';

const CompanyDetailsDescriptionSection = ({ description }) => {
  return (
    <div className="bg-white shadow-md p-5 mb-5 rounded-md">
      <p className="whitespace-pre-wrap">{parse(description)}</p>
    </div>
  );
};

export default CompanyDetailsDescriptionSection;